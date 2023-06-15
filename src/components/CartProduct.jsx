import { useDispatch } from "react-redux"
import { deleteItemActionCreator } from '../actions/actions'

function CartProduct(props) {
  const dispatch = useDispatch()
  function handleClick() {
    dispatch(deleteItemActionCreator(props.name))
  }

  return (
    <div className="cartProduct">
      <span>{props.name}</span>
      <span>{props.quantity}</span>
      <button onClick={handleClick}>Remove item</button>
    </div>
  )
}

export default CartProduct