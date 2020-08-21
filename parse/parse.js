const debugParseError = require('debug')('parse:error');

module.exports = function parse(document, selectors) {
  const elements = {};
  for (const [key, value] of Object.entries(selectors)) {
    for (const [selectorName, selector] of Object.entries(value)){
      const newArr = [];
      try {
        const nodeElements = document.querySelectorAll(`${selector}`);
        nodeElements.forEach(node => {
          newArr.push(node[key]);
        })
      } catch(err) {
        debugParseError(err);
      }
      elements[selectorName] = newArr;
    }
  }
  return elements;
}