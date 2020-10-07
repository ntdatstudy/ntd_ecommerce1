const express = require('express');
const router = express.Router();
const Category = require('../../models/Category');

// Create a category
router.post('/', (req, res) => {
  new Category(req.body).save((err, category) => {
    if (err) {
      return res.status(400).json({ message: 'Failed' });
    }

    res.status(200).json({
      data: category,
      message: 'Category created!'
    });
  });
});

// Get all categories
router.get('/', (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      return res.send(200).json({ message: 'Failed' });
    }

    res.status(200).json({
      count: categories.length,
      data: categories
    });
  })
});

// Edit a category
router.put('/:id', (req, res) => {
  Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, category) => {
      if (err) {
        return res.status(400).json({ message: 'Failed' });
      }

      res.status(200).json({
        data: category,
        message: 'Category updated!'
      });
    }
  );
});

// Deactivate a category
router.delete('/:id', (req, res) => {
  Category.findByIdAndUpdate(
    req.params.id,
    { isActive: false },
    { new: true },
    (err, category) => {
      if (err) {
        return res.status(400).json({ message: 'Failed' });
      }

      res.status(200).json({
        data: category,
        message: 'Category deactivated!'
      });
    }
  );
});

// Activate a category
router.patch('/:id', (req, res) => {
  Category.findByIdAndUpdate(
    req.params.id,
    { isActive: true },
    { new: true },
    (err, category) => {
      if (err) {
        return res.status(400).json({ message: 'Failed' });
      }

      res.status(200).json({
        data: category,
        message: 'Category activated!'
      });
    }
  );
});

module.exports = router;