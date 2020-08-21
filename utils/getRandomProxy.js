module.exports = function getRandomProxy(proxies) {
  const randomNumber = Math.floor(Math.random() * proxies.whitelist.length);
  const [ host, port ] = proxies.whitelist[randomNumber].split(':');
  const { username, password } = proxies.credentials;
  return [ host, port, username, password ];
}