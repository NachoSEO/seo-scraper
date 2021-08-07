# NodeJS SEO Scraper
Scrape SEO elements by default or whatever you need with easy customizations with this Web Scraper built in Node.js

## Installing
npm
```
npm install seo-scraper
```

yarn
```
yarn add seo-scraper
```



## Get started with default config
The default config extract the usual SEO elements without proxies:
* title
* meta description
* meta robots
* canonical
* hreflang
* alternate mobile
* rel next/prev (although is deprecated in some Search Engines)
* amp links
* h1 - h6
* links


### Usage
The process is as easy as use the `scrape` function with an object with a url property as argument/input:
```js
const scraper = require('seo-scraper');

scraper.scrape({ url: 'https://github.com/NachoSEO/seo-scraper' })
  .then(elements => console.log(elements))
```

The output of that execution will be:
```js
`
{
  robots: [],
  description: [
    'Scrape SEO elements or whatever you need with this scraper built in Node.js - GitHub - NachoSEO/seo-scraper: Scrape SEO elements or whatever you need with this scraper built in Node.js'
  ],
  title: [
    'GitHub - NachoSEO/seo-scraper: Scrape SEO elements or whatever you need with this scraper built in Node.js'
  ],
  h1: [
    '\n    \n  \n    NachoSEO\n  \n  /\n  \n    seo-scraper\n  \n  \n',
    'NodeJS SEO Scraper'
  ],
  h2: [
    'Latest commit',
    'Git stats',
    'Files',
    '\n            README.md\n          ',
    'Installing',
    'Get started with default config',
    'Custom Configuration',
    'Custom scraping example',
    'Transformers',
    'About',
    '\n  \n    Releases\n      4\n',
    '\n  \n    Packages 0\n',
    '\n  \n    Contributors 2\n',
    'Languages'
  ],
  h3: [
    'Usage',
    'Fetch',
    'Parsing',
    'Proxies - Optional',
    'Example using a Transformer function',
    'Topics',
    'Resources'
  ],
  h4: [
    'Learn and contribute',
    'Connect with others',
    'Launching GitHub Desktop',
    'Launching GitHub Desktop',
    'Launching Xcode',
    'Launching Visual Studio Code'
  ],
  h5: [],
  h6: [],
  links: [
    'about:blank#start-of-content',
    'https://github.com/',
    '/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo',
    '/features',
    '/mobile',
    '/features/actions',
    '/features/codespaces',
    '/features/packages',
    '/features/security',
    '/features/code-review/',
    '/features/issues/',
    '/features/integrations',
    '/sponsors',
    '/customer-stories',
    '/team',
    '/enterprise',
    '/explore',
    '/topics',
    '/collections',
    '/trending',
    'https://lab.github.com/',
    'https://opensource.guide/',
    'https://github.com/readme',
    'https://github.com/events',
    'https://github.community/',
    'https://education.github.com/',
    'https://stars.github.com/',
    '/marketplace',
    '/pricing',
    '/pricing#feature-comparison',
    'https://enterprise.github.com/contact',
    'https://education.github.com/',
    '',
    '',
    '',
    '',
    '/login?return_to=%2FNachoSEO%2Fseo-scraper',
    '/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=NachoSEO%2Fseo-scraper',
    '/NachoSEO',
    '/NachoSEO/seo-scraper',
    '/login?return_to=%2FNachoSEO%2Fseo-scraper',
    '/login?return_to=%2FNachoSEO%2Fseo-scraper',
    '/NachoSEO/seo-scraper/stargazers',
    '/login?return_to=%2FNachoSEO%2Fseo-scraper',
    '/NachoSEO/seo-scraper/network/members',
    '/NachoSEO/seo-scraper/stargazers',
    '/NachoSEO/seo-scraper/network/members',
    '/login?return_to=%2FNachoSEO%2Fseo-scraper',
    '/login?return_to=%2FNachoSEO%2Fseo-scraper',
    '/NachoSEO/seo-scraper',
    '/NachoSEO/seo-scraper/issues',
    '/NachoSEO/seo-scraper/pulls',
    '/NachoSEO/seo-scraper/actions',
    '/NachoSEO/seo-scraper/projects',
    '/NachoSEO/seo-scraper/wiki',
    '/NachoSEO/seo-scraper/security',
    '/NachoSEO/seo-scraper/pulse',
    '/NachoSEO/seo-scraper',
    '/NachoSEO/seo-scraper/issues',
    '/NachoSEO/seo-scraper/pulls',
    '/NachoSEO/seo-scraper/actions',
    '/NachoSEO/seo-scraper/projects',
    '/NachoSEO/seo-scraper/wiki',
    '/NachoSEO/seo-scraper/security',
    '/NachoSEO/seo-scraper/pulse',
    '/NachoSEO/seo-scraper/branches',
    '/NachoSEO/seo-scraper/tags',
    '/NachoSEO/seo-scraper/branches',
    '/NachoSEO/seo-scraper/tags',
    'https://docs.github.com/articles/which-remote-url-should-i-use',
    'https://cli.github.com/',
    'https://desktop.github.com/',
    '/NachoSEO/seo-scraper/archive/refs/heads/master.zip',
    'https://desktop.github.com/',
    'https://desktop.github.com/',
    'https://developer.apple.com/xcode/',
    '/NachoSEO',
    '/NachoSEO/seo-scraper/commits?author=NachoSEO',
    '/NachoSEO/seo-scraper/commit/eeb016220dacb9f9131772ad3a53ad03aede18d5',
    'https://github.com/NachoSEO/seo-scraper/pull/3',
    '/NachoSEO/seo-scraper/commit/eeb016220dacb9f9131772ad3a53ad03aede18d5',
    '/NachoSEO/seo-scraper/commit/eeb016220dacb9f9131772ad3a53ad03aede18d5',
    '/NachoSEO/seo-scraper/commit/eeb016220dacb9f9131772ad3a53ad03aede18d5',
    '/NachoSEO/seo-scraper/commit/eeb016220dacb9f9131772ad3a53ad03aede18d5',
    'https://github.com/NachoSEO/seo-scraper/pull/3',
    '/NachoSEO/seo-scraper/commit/eeb016220dacb9f9131772ad3a53ad03aede18d5',
    '/NachoSEO/seo-scraper/commits/master',
    '/NachoSEO/seo-scraper/tree/eeb016220dacb9f9131772ad3a53ad03aede18d5',
    '/NachoSEO/seo-scraper/tree/master/config',
    '/NachoSEO/seo-scraper/tree/master/fetch',
    '/NachoSEO/seo-scraper/tree/master/parse',
    '/NachoSEO/seo-scraper/tree/master/transformers',
    '/NachoSEO/seo-scraper/tree/master/utils',
    '/NachoSEO/seo-scraper/blob/master/.gitignore',
    '/NachoSEO/seo-scraper/blob/master/README.md',
    '/NachoSEO/seo-scraper/blob/master/index.js',
    '/NachoSEO/seo-scraper/blob/master/package.json',
    '/NachoSEO/seo-scraper/blob/master/yarn.lock',
    'about:blank#nodejs-seo-scraper',
    'about:blank#installing',
    ... 52 more items
  ],
  canonical: [ 'https://github.com/NachoSEO/seo-scraper' ],
  alternateMobile: [],
  prevPagination: [],
  nextPagination: [],
  amp: [],
  hreflang: []
}
`
```


## Custom Configuration
In order to work properly the SEO Scraper uses several files of configuration, although not all of them are necessary I recommend to use them all.


### Fetch
The fetch function uses [Axios](https://github.com/axios/axios) in order to perform the requests (only the GET requests for now). You can use any of the customization that axios permits. 

In the default config we use this configuration:
```js
{
  headers: {
    'User-Agent': 'Node SEO Scraper 1.0.0'
  }
}
```


### Parsing
This repo uses [JSDOM](https://github.com/jsdom/jsdom) in order to extract any elements from the DOM. JSDOM is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js.

In order to extract the elements that you need instead of the default config you need to provide an Object with this structure:
```
{
  method1: {
    selectorName1: CSSselector1,
    selectorName2: CSSselector2
  },
  method2: {
    selectorName3: CSSselector3,
    selectorName4: CSSselector4
  }
}
```
If you need to use a custom parsing function please refer to [Transformers section](#Transformers).

IMPORTANT: You need to know the web standard API in order to use the custom selectors as the structure of it depend of the methods to extract each tag. If you, for example, want to extract the Meta Robots value and the Canonical value you will need to use this config in selectors:
```js
{
  content: {
    robots: "meta[name='robots']",
  },
  href: {
    canonical: "link[rel='canonical']",
  }
}
```

That's because as we are using JSDOM/web API, under the hood the `parse` function is running this:
```js

document.querySelector(CSSselector1)[method1]
//document.querySelector("meta[name='robots']").content

document.querySelector(CSSselector2)[method2]
//document.querySelector("link[rel='canonical']").href

```

You can check the default config of selectors as an example:
```js
{
  content: {
    robots: "meta[name='robots']",
    description: "meta[name='description']",
  },
  textContent: {
    title: "title",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
  },
  href: {
    links: "a",
    canonical: "link[rel='canonical']",
    alternateMobile: "link[media='only screen and (max-width: 640px)']",
    prevPagination: "link[rel='prev']",
    nextPagination: "link[rel='next']",
    amp: "link[rel='amphtml']"
  },
  outerHTML: {
    hreflang: "link[hreflang]"
  }
}
```


### Proxies - Optional
In order to use proxies it's required to pass an Object as argument to the main function `scrape()` with the same format as the example below:
```js
const proxies = {
  "credentials": {
    "username": "exampleUser",
    "password": "examplePass"
  },
  "whitelist": [
    // host:port
    "11.11.11.11:21232",
    "3.2.1.114:21290"
  ]
}
```

It's important to add an array in the whitelist property in order to use the utility of the package that selects a random proxy for every request.

Example:
```js
scraper.scrape({ url: 'https://example.com/', proxies })
```


## Custom scraping example
This is an example of a custom scraping.

We can use several variables and pass it to the functions as arguments or just one object with all the custom properties we need.

```js
const scraper = require('seo-scraper');

const options = {
  url: 'https://github.com/NachoSEO',
  selectors: {
    textContent: {
      title:'title',
    },
      content: {
        description: "meta[name='description']",
      }
  },
  config: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    }
  },
  proxies: {
    "credentials": {
      "username": "exampleUser",
      "password": "examplePass"
    },
    "whitelist": [
      "11.11.11.11:21232",
      "3.2.1.114:21290"
    ]
  }
}

scraper.scrape(options)
  .then(elements => console.log(elements))
  .catch(err => console.error(err));

// Output
`
{
  title: [ 'NachoSEO (Nacho Mascort) · GitHub' ],
  description: [
    'SEO Product Owner @ Softonic. NachoSEO has 13 repositories available. Follow their code on GitHub.'
  ]
}
`
```

## Transformers
Maybe the `parse` function doesn't solve all your needs regarding Scraping and that's why exist the Transformer. The Transformer is a function that you could pass as a parameter in order to substitute the logic of the `parse` function.

By default, the Transformer function uses: `document`, `selectors` & `...args` parameters in order to add any logic that you could need.

In order to use the `...args` you will need to pass any extra argument in the `scrape`function (the main one from the examples).

Like this:
```js
scraper.scrape(options, arg1, arg2, arg3);
```

### Example using a Transformer function
Imagine an scenario where you can to extract some SERP data from Google and you need another logic with the `selectors` file and the `parse` function.

DISCLAIMER: You should not scrape companies that don't allow that practice (as Google), this is just an example to ilustrate how works this kind of functionality (I'm using Google because the vast audience of this repo will be SEO and it's a familiar place to all of us ^^).

First, let's define a `selectors.js` file:

```js
module.exports = {
  parent: '#ires .g, #res .g:not(.kno-kp)',
  elements: {
    textContent: {
      title: '.r a h3',
      description: '.s'
    },
    href: {
      url: '.r a',
      sitelinks: 'table a'
    }
  }
}
```
As you see, I'm using a parent selector and the current `parse`function doesn't allow that so we'll need a Transformer in order to use that file.

Let's define the Transformer function in a file called: `parseSERP.js` (you could find the same function in the transformers folders):
```js
module.exports = function parseSERP(document, selectors, ...args) {
  const scrapedArr = []
  const { parent, elements } = selectors;
  
  document
  .querySelectorAll(parent)
  .forEach(node => {
    const scrapedElement = {}
      for (const [method, value] of Object.entries(elements)) {
        for (const [selectorName, selector] of Object.entries(value)) {
          try {
            scrapedElement[selectorName] = node.querySelector(selector)[method];
          } catch (err) {
            console.error(err);
            scrapedElement[selectorName] = '';
          }
        }
      }
      scrapedArr.push(scrapedElement);
    })

  return scrapedArr;
}
```
Finally we need to add those files into our entrypoint and pass them as arguments:

```js
const selectors = require('path/to/selectors');
const parseSERP = require('transformers/parseSERP')

const options = {
  url: 'https://www.google.com/search?q=hello+google',
  selectors,
  transformer: parseSERP
}
  
scraper.scrape(options)
  .then(elements => console.log(elements))
  .catch(err => console.error(err));

//Output
`
[
  {
    title: 'Google Assistant - Get things done, hands-free - Apps on ...',
    description: 'Get the Google Assistant for hands-free help. Your Google Assistant is ready to help when and where you need it. Manage your schedule , get help with ... Rating: 4.1 - ‎257,718 votes - ‎Free - ‎Android - ‎Business/Productivity',
    url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.googleassistant&hl=en_US',
    sitelinks: ''
  },
  {
    title: 'Google – Apps on Google Play',
    description: 'The Google app keeps you in the know about the things that you care about. Find quick answers, explore your interests and get a feed of updates on what ... Rating: 4.2 - ‎16,073,194 votes - ‎Free - ‎Android - ‎Utilities/Tools',
    url: 'https://play.google.com/store/apps/details?id=com.google.android.googlequicksearchbox&hl=en_GB',
    sitelinks: ''
  },
  {
    title: 'Google Assistant, your own personal Google',
    description: "Meet your Google Assistant. Ask it questions. Tell it to do things. It's your own personal Google, always ready to help whenever you need it.‎Get Google Assistant · ‎What it can do · ‎News and resources",
    url: 'https://assistant.google.com/',
    sitelinks: ''
  },
  ...
  ]
`
```
