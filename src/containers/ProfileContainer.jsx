import { useSelector } from "react-redux"
import Order from "../components/Order"

function ProfileContainer(props) {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const currentUser = useSelector(state => state.user.loggedInUser)

  return (
    <div id="profileContainer">
      {loggedIn &&
        <div>
          <h3>Logged in as:</h3>
          <p>{currentUser.username}</p>
        </div>
      }
      <h3>Past Orders:</h3>
      <div id="pastOrders">
        {
          loggedIn ?
            currentUser.orders.map(order => (
              <Order
                items={order.items}
                total={order.total}
              ></Order>
            )) :
            <p>Log in to see your past orders.</p>
        }
      </div>
    </div>
  )
}

export default ProfileContainer