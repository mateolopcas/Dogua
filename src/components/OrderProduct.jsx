function OrderProduct(props) {
  return (
    <div className="orderProduct">
      <span>{props.name}</span>
      <span>{props.quantity}</span>
    </div>
  )
}

export default OrderProduct