const { Router } = require('express');
const db = require('../database');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const results = await db.promise().query(`SELECT * FROM category;`)
    res.status(200).send(results[0])
  } catch (e) {
    res.send(e)
  }
});

module.exports = router