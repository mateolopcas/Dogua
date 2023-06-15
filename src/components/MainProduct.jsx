import water from '../constants/bottled-water.jpg'
import { useDispatch } from 'react-redux';
import { addItemActionCreator } from '../actions/actions'

function MainProduct(props) {
  const { name, description, price } = props
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addItemActionCreator(props))
  }

  return (
    <div className="mainProduct">
      <img src={water} style={{ height: '200px', width: '100px' }} />
      <p>{name}</p>
      <p>{description}</p>
      <p>{`$${price}`}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}

export default MainProduct