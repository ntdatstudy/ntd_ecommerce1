const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');

// Create a product
router.post('/', (req, res) => {
  new Product(req.body).save((err, product) => {
    if (err) {
      return res.status(400).json({ message: 'Failed' });
    }

    res.status(200).json({
      data: product,
      message: 'Product created!'
    });
  });
});

// Get all products
router.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      return res.send(200).json({ message: 'Failed' });
    }

    res.status(200).json({
      count: products.length,
      data: products
    });
  })
});

// Edit a product
router.put('/:id', (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(400).json({ message: 'Failed' });
      }

      res.status(200).json({
        data: product,
        message: 'Product updated!'
      });
    }
  );
});

// Deactivate a product
router.delete('/:id', (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(400).json({ message: 'Failed' });
      }

      res.status(200).json({
        data: product,
        message: 'Product deactivated!'
      });
    }
  );
});

// Activate a product
router.patch('/:id', (req, res) => {
  Product.findByIdAndUpdate(
    req.params.id,
    { isActive: true },
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(400).json({ message: 'Failed' });
      }

      res.status(200).json({
        data: product,
        message: 'Product activated!'
      });
    }
  );
});

module.exports = router;