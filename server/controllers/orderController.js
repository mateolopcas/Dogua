const Order = require('../db/models/Order')

const orderController = {}

orderController.createOrder = async (req, res, next) => {
  const { items, total } = req.body
  if (items.length === 0) {
    return next({
      error: `You didn't order any items, silly!`
    })
  }
  try {
    const newOrder = await Order.create({ items, total })
    res.locals.newOrder = newOrder
    return next()
  }
  catch (err) {
    return next({
      error: err
    })
  }
}

orderController.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({})
    res.locals.orders = orders
    return next()
  }
  catch (err) {
    return next({
      error: err
    })
  }
}


module.exports = orderController