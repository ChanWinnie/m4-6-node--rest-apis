'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getAllClients, getAClient, addNewClient, deleteAClient } = require('./handleClients')
const { getWord, getRandomWord, guessWord } = require('./handleWords')

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // clients endpoints
  .get('/clients', getAllClients)
  .get('/clients/:id', getAClient)
  .post('/clients', addNewClient)
  .delete('/clients/:id', deleteAClient)

  // words endpoints
  .get('/hangman/word/:id', getWord)
  .get('/hangman/word', getRandomWord)
  .get('/hangman/guess/:id/:letter', guessWord)

  .listen(8000, () => console.log(`Listening on port 8000`));
