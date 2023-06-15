const initialState = {
  items: [],
  total: 0,
}

const cartReducer = (state = initialState, action) => {
  let newItems
  let newTotal

  switch (action.type) {
    case 'ADD_ITEM':
      newItems = [...state.items]
      newItems.push(action.payload)
      newTotal = state.total + action.payload.price

      return {
        ...state,
        items: newItems,
        total: newTotal
      }

    case 'DELETE_ITEM':
      newItems = [...state.items]
      newTotal = state.total
      for (let i = 0; i < newItems.length; i++) {
        if (newItems[i].name === action.payload) {
          newTotal -= newItems[i].price
          newItems.splice(i, 1)
          break
        }
      }
      return {
        ...state,
        items: newItems,
        total: newTotal
      }
    case 'CHECKOUT':
      return {
        ...initialState
      }

    default:
      return state
  }
}

export default cartReducer