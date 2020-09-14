const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catData');

let catSchema = new mongoose.Schema({
  imageURL: String,
  breed: String,
  name: String,
  age: String,
  location: String,
  status: String,
  information: String,
});

let CatModel = mongoose.model('CatModel', catSchema);

module.exports.CatModel = CatModel;
module.exports.mongoose = mongoose;
