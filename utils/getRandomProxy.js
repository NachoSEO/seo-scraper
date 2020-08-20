module.exports = function getRandomProxy(proxies) {
  const randomNumber = Math.floor(Math.random() * (999 - 1 + 1) + 1);
  const [host, port] = proxies.whitelist[randomNumber].split(':');
  const { username, password } = proxies.credentials;
  return [host, port, username, password];
}