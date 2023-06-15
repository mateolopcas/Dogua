import OrderProduct from "./OrderProduct"

function Order(props) {
  const orderProducts = props.items.map((product) => (
    <OrderProduct
      name={product.name}
      quantity={product.quantity}
    ></OrderProduct>
  ))

  return (
    <div className="pastOrder">
      <div className="pastOrderItems">
        {orderProducts}
      </div>
      <p>Total: {`$${props.total}`}</p>
    </div>
  )
}

export default Order