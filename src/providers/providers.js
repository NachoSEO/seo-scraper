const axios = require('axios').default;
const jsdom = require("jsdom");
const EventEmitter = require('events');

const defaultSelectors = require('../config/selectors');
const defaultConfig = require('../config/defaultConfig');
const { events } = require('../config/events');

const { ScraperRepository } = require('../repositories/scraperRepository');

const { ScraperService } = require('../services/ScraperService');

const { LoggerListener } = require('../listeners/LoggerListener');

const { JSDOM } = jsdom;
const eventEmitter = new EventEmitter();

const scraperService = new ScraperService(
  new ScraperRepository(
    axios,
    JSDOM,
    eventEmitter
  ),
  defaultSelectors,
  defaultConfig,
  eventEmitter
);


const loggerListener = new LoggerListener(
  eventEmitter,
  events
);

loggerListener.listen();

module.exports = {
  scraperService
}