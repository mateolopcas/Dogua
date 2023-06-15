import { Routes, Route } from "react-router-dom"
import MainContainer from "./containers/MainContainer"
import CartContainer from "./containers/CartContainer"
import ProfileContainer from "./containers/ProfileContainer"
import SignInContainer from "./containers/SignInContainer"
import NavBar from "./components/Navbar"
import SignUp from "./components/SignUp"
import ReviewsContainer from "./containers/ReviewsContainer"
import './style.scss'


function App() {
  return (
    <div id="appContainer">
      <NavBar></NavBar>
      <div id="contentContainer">
        <Routes>
          <Route exact path="/" element={<MainContainer></MainContainer>}></Route>
          <Route path="/reviews" element={<ReviewsContainer></ReviewsContainer>}></Route>
          <Route path="/cart" element={<CartContainer></CartContainer>}></Route>
          <Route path="/my-profile" element={<ProfileContainer></ProfileContainer>}></Route>
          <Route path="/sign-in" element={<SignInContainer></SignInContainer>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App