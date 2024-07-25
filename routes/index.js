var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Essai requête avec thunderclient
router.get('/read', function(req, res, next) {
  res.json({ message: 'Reponse de la route GET' });
});

// Mettre toute les routes pour requete la base de données par la suite

module.exports = router;
