class ScraperService {
  constructor(scraperRepository, defaultSelectors, defaultConfig, eventEmitter) {
    this.scraperRepository = scraperRepository;
    this.defaultSelectors = defaultSelectors;
    this.defaultConfig = defaultConfig;
    this.eventEmitter = eventEmitter;
  }

  /**
   * Scrape SEO elements or whatever you need from an URL
   * @param {String} url - URL to scrape
   * @param {Object} selectors - CSS selectors to scrape
   * @param {Object} config - Request's configuration
   * @param {Object} proxies - Proxies to do the requests
   * @param {Function} transformer - Transformer Function to change the parse function
   * @param {Array} args - The rest of arguments that you need for the transformer function
   * @return {Object} - The scraped data
   */
  async scrape({ url, selectors = this.defaultSelectors, config = this.defaultConfig, proxies = null, transformer = null }, ...args) {

    if (proxies) {
      const [host, port, username, password] = this.scraperRepository.getRandomProxy(proxies);
      config.proxy = {
        host,
        port: parseInt(port),
        auth: {
          username,
          password
        }
      }
    }

    try {
      const dom = await this.scraperRepository.fetch(url, config);
      const { document } = dom.window;
      return this.scraperRepository.parse(document, selectors, transformer, ...args);
    } catch (error) {
      this.eventEmitter.emit(
        'ScraperService:scrapeError',
        `Error scraping ${url}
        ${error.stack}`
      );
    }
  }
}

module.exports = {
  ScraperService
}