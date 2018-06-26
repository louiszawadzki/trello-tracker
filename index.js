const express = require('express')
const app = express()
const Trello = require('./services/Trello');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/collect', function(req, res) {
  Trello.fetchListsWithCards('toto')
    .then()
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

