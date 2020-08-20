# SEO SCRAPER
Scrape SEO elements by default or whatever you need with easy customizations with this Web Scraper built in Node.js

## Installing
TBD...


## Get started with default config
The default config extract the usual SEO elements without proxies
TBD

## Custom Configuration
In order to work properly the SEO Scraper uses several files of configuration, although not all of them are necessary I recommend you to use them all.

### Parsing
TBD...

### How to use Proxies - Optional
In order to use proxies it's required to add a JSON config (or an Object) with the same format as the example below:
```
{
  "credentials": {
    "username": "exampleUser",
    "password": "examplePass"
  },
  "whitelist": [
    // ip:port
    "11.11.11.11:21232",
    "3.2.1.114:21290"
  ]
}
```
It's important to add an array in the whitelist property in order to use the utility of the package that selects a random proxy for every request.

And pass it to the main function:
```

```
