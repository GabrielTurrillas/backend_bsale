const { Router } = require('express');
const db = require('../database');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const results = await db.promise().query(`SELECT * FROM product;`)
    res.status(200).send(results[0])
  } catch (e) {
    res.send(e)
  }
})

router.get('/:product', async (req, res) => {
  try {
    const results = await db.promise().query(`SELECT * FROM product WHERE name LIKE '%${req.params.product}%';`)
    if (results[0].length) {
      console.log('found')
      res.status(200).send(results[0])
    } else {
      console.log('not found')
      res.status(404).send('No se encontraron productos')
    }
  } catch (e) {
    res.send(e)
  }
})

router.get('/category/:id', async (req, res) => {
  try {
    const results = await db.promise().query(`SELECT * FROM product WHERE category=${req.params.id};`)
    res.status(200).send(results[0])
  } catch (e) {
    res.send(e)
  }
})

module.exports = router