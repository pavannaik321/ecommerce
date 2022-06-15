const {Product} = require('../models/product');
const express = require('express');
const router = express.Router();

//requesting data from backend to frontend
router.get(`/`, async (req, res) => { //await is like a promise.
    const productList = await Product.find();
    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);
})

//passing data from frontend to backend.
router.post(`/`, (req, res) => {
    const product = new Product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })

    product.save().then((createdProduct => {
        res.status(201).json(createdProduct)
    })).catch((err) => {
        res.status(500).json({
            error: err,
            success: false
        })
    })

})

module.exports = router;