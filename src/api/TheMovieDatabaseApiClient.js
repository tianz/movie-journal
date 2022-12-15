import axios from 'axios';

export default class TheMovieDatabaseApiClient {
  constructor() {
    this.sessionId = process.env.REACT_APP_TMDB_SESSION_ID;
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
