const fetch = require('./fetch/fetch');
const defaultSelectors = require('./config/selectors');
const defaultConfig = require('./config/defaultConfig');
const getRamdomProxy = require('./utils/getRandomProxy');
const debugIndexError = require('debug')('indexError');

const proxies = require('./config/proxies.json');

async function scrape({ url, selectors = defaultSelectors, config = defaultConfig, proxies = null} ) {
  
  if(proxies) {
    const [host, port, username, password] = getRamdomProxy(proxies);
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
    const elements = parse(document, elements); //CONTINUE HERE...
  } catch(err) {
    debugIndexError(err);
  }

}

scrape({ url: 'https://skype.en.softonic.com/', proxies })