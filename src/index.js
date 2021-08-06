const { scraperService } = require('./providers/providers')

// module.exports = scraperService;

scraperService.scrape({ url: 'https://github.com/NachoSEO/seo-scraper' })
  .then(elements => console.log(elements))