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