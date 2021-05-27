const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/characters', async (req, res, next) => {
    const characters = await Character.find()
      .then(characters => res.send(characters))
      .catch(next);
  });
