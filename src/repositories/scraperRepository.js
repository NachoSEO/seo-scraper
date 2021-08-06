class ScraperRepository {
  constructor(axios, JSDOM, eventEmitter) {
    this.axios = axios;
    this.JSDOM = JSDOM;
    this.eventEmitter = eventEmitter;
  }

  /**
  * Fetch a page and return the document using a GET request
  * @param {String} url - The url to scrape
  * @param {Object} config - The configuration object that axios will use
  * @return {Promise} - A promise with a JSDOM object
  */
  async fetch(url, config = {}) {
    this.eventEmitter.emit(
      'ScraperRepository:fetchInit',
      `Init fetching ${url} with config:\n ${JSON.stringify(config)}`
    );

    try {
      const response = await this.axios.get(url, config);
      this.eventEmitter.emit(
        'ScraperRepository:fetchSuccess',
        `Success fetching ${url}`
      );

      return new this.JSDOM(response.data);
    } catch (error) {
      this.eventEmitter.emit(
        'ScraperRepository:fetchError',
        `Error fetching ${url}
        ${error.stack}`
      );

      return null;
    }
  }

  /**
   * Parse a page and return the data selected using CSS selectors
   * @param {String} document - The document to be parsed
   * @param {String} selector - The CSS selector to be used
   * @param {Function} transformer - A callback function to be 
   * called in case that you need to change the default parsing behaviour
   * @param {args} args - The arguments to be passed to the callback function
   * @return {Object} - An Object with the elements selected
   */
  parse(document, selectors, transformer, ...args) {
    this.eventEmitter.emit(
      'ScraperRepository:parseInit',
      `Init parsing`
    );

    if(transformer) {
      return transformer(document, selectors, ...args);
    }
  
    const elements = {};
    
    for (const [method, value] of Object.entries(selectors)) {
      for (const [selectorName, selector] of Object.entries(value)){
        const newArr = [];
        try {
          const nodeElements = document.querySelectorAll(`${selector}`);
          nodeElements.forEach(node => {
            newArr.push(node[method]);
          })
        } catch(error) {
          this.eventEmitter.emit(
            'ScraperRepository:parseError',
            `Error parsing ${url}
            ${error.stack}`
          );
        }
        elements[selectorName] = newArr;
      }
    }
    this.eventEmitter.emit(
      'ScraperRepository:parseSuccess',
      `Parsing succed`
    );

    return elements;
  }

  /**
   * Function to get a random proxy in every request
   * @param {Array} - An array of proxies to be used
   * @return {Array} - An array with the proxy information to be destructured
   */ 
  getRandomProxy(proxies) {
    const randomNumber = Math.floor(Math.random() * proxies.whitelist.length);
    const [ host, port ] = proxies.whitelist[randomNumber].split(':');
    const { username, password } = proxies.credentials;
    return [ host, port, username, password ];
  }
}

module.exports = {
  ScraperRepository
}