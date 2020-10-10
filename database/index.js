const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://twitteruser:beIVyE04gc7clRah@clusterdefault.c31o9.mongodb.net/cat_data?retryWrites=true&w=majority'
);

const catSchema = new mongoose.Schema({
  imageURL: String,
  breed: String,
  name: String,
  age: String,
  location: String,
  status: String,
  information: String,
});

const CatModel = mongoose.model('CatModel', catSchema);

module.exports.CatModel = CatModel;
module.exports.mongoose = mongoose;
