const User = require('../db/models/User')

const userController = {}

userController.createUser = async (req, res, next) => {
  const { username, password, confirmPassword } = req.body
  if (!username || (password !== confirmPassword)) {
    return next({
      error: 'Missing username or passwords did not match.'
    })
  }
  try {
    const newUser = await User.create({ username, password, orders: [] })
    res.locals.newUser = newUser
    return next()
  }
  catch (err) {
    return next({
      error: err
    })
  }
}

userController.getUser = async (req, res, next) => {
  const { username, password } = req.body
  if (!(username && password)) {
    return next({
      error: 'Missing username or password'
    })
  }
  try {
    const foundUser = await User.findOne({ username, password }).populate('orders')
    if (!foundUser) {
      throw new Error('Wrong username or password')
    }
    res.locals.foundUser = foundUser
    return next()
  }
  catch (err) {
    return next(err)
  }
}

userController.addOrder = async (req, res, next) => {
  const { username, newOrderID } = req.body
  try {
    await User.findOneAndUpdate(
      { username: username },
      { "$push": { orders: newOrderID } },
      { new: true }
    )
    return next()
  }
  catch (err) {
    return next({
      error: err
    })
  }
}

module.exports = userController