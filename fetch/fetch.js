const axios = require('axios').default;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const debugFetch = require('debug')('fetch:default')
const debugFetchError = require('debug')('fetch:error')

module.exports = async function fetch(url, config = {}) {
  debugFetch('Args: %s & %o', url);
  try {
    const response = await axios.get(url, config);
    debugFetch('Crawling succeed for %s', url);
    return new JSDOM(response.data);
  } catch (err) {
    console.error(`ERROR while fetching this url: ${url}`);
    debugFetchError(err)
    return null;
  }
}
