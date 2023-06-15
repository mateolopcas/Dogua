export const updateUsernameActionCreator = (username) => ({
  type: 'UPDATE_USERNAME',
  payload: username
})

export const updatePasswordActioncreator = (password) => ({
  type: 'UPDATE_PASSWORD',
  payload: password
})

export const updateConfirmPasswordActionCreator = (password) => ({
  type: 'UPDATE_CONFIRM_PASSWORD',
  payload: password
})

export const logInActionCreator = (user) => ({
  type: 'LOG_IN',
  payload: user
})

export const logOutActionCreator = () => ({
  type: 'LOG_OUT'
})

export const addOrderActionCreator = (order) => ({
  type: 'ADD_ORDER',
  payload: order
})

export const addItemActionCreator = (itemObj) => ({
  type: 'ADD_ITEM',
  payload: itemObj
})

export const deleteItemActionCreator = (itemName) => ({
  type: 'DELETE_ITEM',
  payload: itemName
})

export const checkoutActionCreator = () => ({
  type: 'CHECKOUT'
})