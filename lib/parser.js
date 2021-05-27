const parser = document => {
  const characters = document.querySelectorAll('.category-page__member');
  
  return [...characters].map(character => ({
    name: character.textContent.replace(/(\n|\t)/gm, ''),
    photoUrl: document.querySelector('.category-page__member-thumbnail').src,
  }));

};
  
module.exports = parser;
