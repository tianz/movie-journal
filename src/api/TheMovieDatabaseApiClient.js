import axios from 'axios';

export default class TheMovieDatabaseApiClient {
  constructor() {
    this.sessionId = '';
    this.client = axios.create({
      baseURL: process.env.REACT_APP_TMDB_URL
    });

    if (process.env.REACT_APP_DEBUG_MODE === 'true') {
      // Request interceptor for logging requests
      this.client.interceptors.request.use(request => {
        console.log('Starting Request', JSON.stringify(request, null, 2));
        return request;
      })
    }

    // Response interceptor for retrying requests after authentication errors
    this.client.interceptors.response.use(response => response, error => {
      const status = error.response ? error.response.status : null;
      console.log(error);

      if (status === 401) {
        return this.createSession().then(_ => {
          error.config.params.session_id = this.sessionId;
          return this.client.request(error.config);
        });
      }

      return Promise.reject(error);
    })
  }

  async createRequestToken() {
    const response = await this.client.get('authentication/token/new', {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
      }
    });

    return response.data;
  }

  async createSessionWithLogin() {
    const createRequestTokenResponse = await this.createRequestToken();
    const requestToken = createRequestTokenResponse.request_token;
    const response = await this.client.post('authentication/token/validate_with_login', {
      username: process.env.REACT_APP_TMDB_USERNAME,
      password: process.env.REACT_APP_TMDB_PASSWORD,
      request_token: requestToken,
    }, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
      }
    });

    return response.data;
  }

  async createSession() {
    const createSessionWithLoginResponse = await this.createSessionWithLogin();
    const requestToken = createSessionWithLoginResponse.request_token;
    const response = await this.client.post('authentication/session/new', {
      request_token: requestToken,
    }, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
      }
    });

    this.sessionId = response.data.session_id;
  }

  async getRatedMovies() {
    const response = await this.client.get(`account/${process.env.REACT_APP_TMDB_ACCOUNT_ID}/rated/movies`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        session_id: this.sessionId,
      }
    });

    return response.data;
  }
}
