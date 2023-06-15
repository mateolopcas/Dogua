const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const userController = require('./controllers/userController')
const orderController = require('./controllers/orderController')

const PORT = 3001

const app = express()

app.use(cors())

const MONGO_URI = 'mongodb://localhost/dogua'
mongoose.connect(MONGO_URI)

app.use(express.json())

app.post('/api/users/login',
  userController.getUser,
  (req, res) => {
    res.status(200).json(res.locals.foundUser)
  }
)

app.post('/api/users/signup',
  userController.createUser,
  (req, res) => {
    res.status(200).json(res.locals.newUser)
  })

app.patch('/api/users/add-order',
  userController.addOrder,
  (req, res) => {
    res.status(200).json('Updated successfully')
  })

app.get('/api/orders',
  orderController.getOrders,
  (req, res) => {
    res.status(200).json(res.locals.orders)
  }
)

app.post('/api/orders',
  orderController.createOrder,
  (req, res) => {
    res.status(200).send(res.locals.newOrder)
  }
)




app.use('*', (req, res) => {
  res.status(404).send('Not found')
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


module.exports = app