const { Router } = require('express');
const db = require('../database');

const router = Router();

router.get('/', async (req, res) => {
  const results = await db.promise().query(`SELECT * FROM category;`)
  res.status(200).send(results[0])
});

module.exports = router