var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const getCollection = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(Object.keys(mongoose.connection.collections));
  console.log(mongoose.connections);
  res.render('index', { title: 'Express' });
});

router.get('/db1', async function(req, res, next) {
  const collection = getCollection('database1', 'schema');

  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  for await (const i of list) {
    setTimeout(async function () {
      await collection.create({data: 'db1:' + i});
    }, 5000);
  }
  res.render('index', { title: 'Express' });
});

router.get('/db2', async function(req, res, next) {
  const collection = getCollection('database2', 'schema');

  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for await (const i of list) {
    setTimeout(async function () {
      await collection.create({data: 'db2:' + i});
    }, 5000);
  }

  res.render('index', { title: 'Express' });
});



module.exports = router;
