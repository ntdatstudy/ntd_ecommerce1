require('dotenv').config();
require('./prototypes');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

const cateogiesRoutes = require('./routes/api/categories');
const productsRoutes = require('./routes/api/products');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) return console.log(err);
  console.log('MongoDB connected!');
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Hello from the others side');
});

app.use('/api/categories', cateogiesRoutes);
app.use('/api/products', productsRoutes);