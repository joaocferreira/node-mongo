const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: Number,
  name: String,
  attack: Number,
  defense: Number,
  type: String,
  moves: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Move' }],
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
