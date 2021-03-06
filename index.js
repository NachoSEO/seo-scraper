const fetch = require('./fetch/fetch');
const parse = require('./parse/parse');
const defaultSelectors = require('./config/selectors');
const defaultConfig = require('./config/defaultConfig');
const getRandomProxy = require('./utils/getRandomProxy');
const debugIndexError = require('debug')('indexError');

/**
 * Scrape SEO elements or whatever you need from an URL
 * @param {string} url URL
 * @param {Object} selectors CSS selectors to scrape
 * @param {Object} config Request's configuration
 * @param {Object} proxies Proxies to do the requests
 * @param {Function} transformer Transformer Function to change the parse function
 * @param {Array} args The rest of arguments that you need for the transformer function
 * @return {Object}
 */
module.exports =  async function scrape({ url, selectors = defaultSelectors, config = defaultConfig, proxies = null, transformer = null}, ...args ) {
  
  if(proxies) {
    const [host, port, username, password] = getRandomProxy(proxies);
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
    const dom = await fetch(url, config);
    const { document } = dom.window;
    return parse(document, selectors, transformer, ...args);
  } catch(err) {
    debugIndexError(err);
  }
}
