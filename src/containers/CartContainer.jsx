import { useDispatch, useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct.jsx';
import { checkoutActionCreator, addOrderActionCreator } from '../actions/actions';

function CartContainer(props) {
  const dispatch = useDispatch()
  const itemsArray = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const loggedIn = useSelector(state => state.user.loggedIn)
  const currentUser = useSelector(state => state.user.loggedInUser)


  const itemsCount = {}
  itemsArray.forEach(item => {
    if (!itemsCount[item.name]) {
      itemsCount[item.name] = 0
    }
    itemsCount[item.name]++
  })

  const itemsCountList = []
  for (const item in itemsCount) {
    itemsCountList.push({
      name: item,
      quantity: itemsCount[item]
    })
  }

  const itemComponentsList = itemsCountList.map(item => (
    <CartProduct
      key={item.name}
      name={item.name}
      quantity={item.quantity}
    ></CartProduct>
  ))

  async function handleClick() {
    if (itemsArray.length > 0) {
      const orderResponse = await fetch('http://localhost:3001/api/orders', {
        method: 'POST',
        body: JSON.stringify({
          items: itemsCountList,
          total: total
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const newOrder = await orderResponse.json()
      console.log(newOrder)

      //TODO: check if user is logged in, make an add order route, associate new order with user

      if (loggedIn) {
        await fetch('http://localhost:3001/api/users/add-order', {
          method: 'PATCH',
          body: JSON.stringify({
            username: currentUser.username,
            newOrderID: newOrder._id
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        dispatch(addOrderActionCreator(newOrder))
      }
      dispatch(checkoutActionCreator())
    }
  }

  return (
    <div>
      <h3>My Cart</h3>
      <div id='cartProductContainer'>
        {itemComponentsList}
      </div>
      <p>Total: ${total}</p>
      <button onClick={handleClick}>Check Out</button>
    </div>
  )
}

export default CartContainer