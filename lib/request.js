const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const request = async () => {
  const response = await fetch('https://kingofthehill.fandom.com/wiki/Category:Characters');
  //   console.log(response);
  // we don't get json back, we get a string, which is why we do .text() to parse
  //   this is a promise, so you have to await it 
  const html = await response.text();
  //   parse into the dom using this library 
  //   return html;
  const dom = new JSDOM(html);

  return dom.window.document;
};

module.exports = request;
