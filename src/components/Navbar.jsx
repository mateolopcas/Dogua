import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logOutActionCreator } from '../actions/actions'


function NavBar(props) {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.user.loggedIn)

  const logout = () => {
    dispatch(logOutActionCreator())
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/reviews">Reviews</Link>
      <Link to="/cart">My Cart</Link>
      <Link to="/my-profile">My Profile</Link>
      {loggedIn ?
        <a onClick={logout}>Sign Out</a> :
        <Link to="/sign-in">Sign In</Link>
      }
    </nav>
  )
}

export default NavBar