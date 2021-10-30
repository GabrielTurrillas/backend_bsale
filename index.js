const express = require('express');

//Import Routes
const productRoute = require('./routes/product');
const categoryRoute = require('./routes/category');

//App Init
const app = express();

//Routes
app.use('/api/category', categoryRoute)
app.use('/api/product', productRoute)

//Listen
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
