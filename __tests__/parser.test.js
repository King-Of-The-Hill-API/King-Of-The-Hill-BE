const request = require('../lib/request.js');
const parse = require('../lib/parser.js');

describe('parse function', () => {
  it('can parse', async () => {
    const document = await request();
    const element = parse(document);
    console.log(element);
    expect(element).toEqual(expect.arrayContaining([
      { name: '1', photoUrl: 'test.jpg' }     
    ]));

  });
});
