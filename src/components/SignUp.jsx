import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  updateUsernameActionCreator,
  updatePasswordActioncreator,
  logInActionCreator,
  updateConfirmPasswordActionCreator
} from '../actions/actions'

function SignUp(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useSelector(state => state.user.username)
  const password = useSelector(state => state.user.password)
  const confirmPassword = useSelector(state => state.user.confirmPassword)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3001/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
        confirmPassword: confirmPassword
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const newUser = await response.json()
    dispatch(logInActionCreator(newUser))
    navigate('/')
  }

  const handleChange = (e) => {
    if (e.target.name === "username") {
      dispatch(updateUsernameActionCreator(e.target.value))
    } else if (e.target.name === "password") {
      dispatch(updatePasswordActioncreator(e.target.value))
    } else if (e.target.name === "confirmPassword") {
      dispatch(updateConfirmPasswordActionCreator(e.target.value))
    }
  }

  return (
    <div id="signUpContainer">
      <h3>Create an account</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" value={username} onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Password: <input name="password" value={password} onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Confirm Password: <input name="confirmPassword" value={confirmPassword} onChange={handleChange} />
        </label>
        <br></br>
        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  )
}

export default SignUp