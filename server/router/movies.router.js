const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite movies
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM MOVIES';
  pool.query(queryText)
    .then((result) => { 
      console.log( 'Got Movies on server', result.rows );
      res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT Movies query', err);
      res.sendStatus(500);
    });
});
module.exports = router;