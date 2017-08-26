const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017');

app.get('/pokemon', (req, res) => {
  Pokemon.find({})
    .exec((err, pokemons) => {
      if (err) {
        res.send(err);
      } else {
        res.json(pokemons);
      }
    });
});

app.get('/pokemon/:id', (req, res) => {
  Pokemon.findOne({
    id: req.params.id,
  })
    .exec((err, pokemon) => {
      if (err) {
        res.send(err);
      } else {
        res.json(pokemon);
      }
    });
});

app.post('/pokemon', (req, res) => {
  console.log('body ', req);
  new Pokemon({
    id: req.body.id,
    name: req.body.name,
    attack: req.body.attack,
    defense: req.body.defense,
    type: req.body.type,
  }).save((err, pokemon) => {
    console.log('pokemon, ', pokemon);
    if (err) {
      res.send(err);
    } else {
      res.json(pokemon);
    }
  });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
