const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  loggedIn: false,
  loggedInUser: {}
}

const userReducer = (state = initialState, action) => {
  let newLoggedInUser

  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.payload
      }

    case 'UPDATE_PASSWORD':
      return {
        ...state,
        password: action.payload
      }

    case 'UPDATE_CONFIRM_PASSWORD':
      return {
        ...state,
        confirmPassword: action.payload
      }

    case 'ADD_ORDER':
      newLoggedInUser = state.loggedInUser
      newLoggedInUser.orders.push(action.payload)
      return {
        ...state,
        loggedInUser: newLoggedInUser
      }

    case 'LOG_IN':
      return {
        ...initialState,
        loggedIn: true,
        loggedInUser: action.payload
      }
    
    case 'LOG_OUT':
      return {
        ...initialState
      }

    case 'SIGN_UP':
      return {
        ...initialState
      }

    default:
      return state
  }
}

export default userReducer;