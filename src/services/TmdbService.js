import TmdbApiClient from '../clients/TmdbApiClient';

class TmdbService {
  constructor() {
    this.tmdbClient = new TmdbApiClient();
  }

  async getRatedMovies() {
    const movies = [];

    // Get 1st page
    const page = await this.tmdbClient.getRatedMovies(1);
    movies.push(...page.results)
    const total_pages = page.total_pages;
    const promises = []

    // Get the rest of pages
    for (let i = 2; i <= total_pages; i++) {
      promises.push(this.tmdbClient.getRatedMovies(i));
    }

    await Promise.all(promises).then(pages => {
      for (const page of pages) {
        movies.push(...page.results)
      }
    });

    return movies;
  }
}

const tmdbService = new TmdbService();
export default tmdbService;
