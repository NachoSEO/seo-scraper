const debugParseError = require('debug')('parse:error');

module.exports = function parse(document, selectors, transformer, ...args) {
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
      } catch(err) {
        debugParseError(err);
      }
      elements[selectorName] = newArr;
    }
  }
  return elements;
}