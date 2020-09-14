const express = require('express');
const path = require('path');
const app = express();
const model = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '..', 'src')));
app.use(bodyParser.json());

app.get('/cats', (req, res) => {
  model.CatModel.find({})
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/catSearch', (req, res) => {
  model.CatModel.find({
    $or: [
      { breed: { $regex: req.query.searchInfo, $options: 'i' } },
      { name: { $regex: req.query.searchInfo, $options: 'i' } },
      { age: { $regex: req.query.searchInfo, $options: 'i' } },
      { location: { $regex: req.query.searchInfo, $options: 'i' } },
      { status: { $regex: req.query.searchInfo, $options: 'i' } },
      { information: { $regex: req.query.searchInfo, $options: 'i' } },
    ],
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
// app.post();

let port = 2000;
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
