import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  updateUsernameActionCreator,
  updatePasswordActioncreator,
  logInActionCreator
} from '../actions/actions'

function SignIn(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useSelector(state => state.user.username)
  const password = useSelector(state => state.user.password)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const foundUser = await response.json()
    console.log(foundUser)
    dispatch(logInActionCreator(foundUser))
    navigate('/')
  }
  const handleChange = (e) => {
    if (e.target.name === "username") {
      dispatch(updateUsernameActionCreator(e.target.value))
    } else if (e.target.name === "password") {
      dispatch(updatePasswordActioncreator(e.target.value))
    }
  }

  return (
    <div id="signInContainer">
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" value={username} onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Password: <input name="password" value={password} onChange={handleChange} />
        </label>
        <br></br>
        <button type="submit">
          Log in
        </button>
      </form>
      <p>
        Don't have an account? Click <Link to="/sign-up">here</Link> to sign up.
      </p>
    </div>
  )
}

export default SignIn