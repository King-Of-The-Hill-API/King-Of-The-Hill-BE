const Character = require('./models/Character');

const store = async (characters) => {
  
  return await Promise.all(characters.map(character => Character.insert(character)));

};

module.exports = store;
