const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async () => {
  const response = await fetch('');
  const html = await response.text();
  
  const dom = new JSDOM(html);

  return dom.window.document;
};

module.exports = request;
