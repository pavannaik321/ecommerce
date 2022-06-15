
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.options('*',cors());

//env files
require('dotenv/config');
const api = process.env.API_URL;
const connection = process.env.CONNECTION_STRING;

//middleware it will understand the json send by the backend.
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Router
const productsRoutes = require('./routers/products');
const usersRoutes = require('./routers/users');
const orderRoutes = require('./routers/orders');
const categoriesRoutes = require('./routers/categories');

app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`,orderRoutes);
app.use(`${api}/categories`,categoriesRoutes);

//Database Connection
mongoose.connect(connection)
    .then(() => {
        console.log('database connect is ready');
    })
    .catch((err) => {
        console.log(err);
    })

//Server
app.listen(3000, () => {
    console.log("server is running http://localhost:3000");
})