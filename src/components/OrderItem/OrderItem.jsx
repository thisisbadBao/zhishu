import "./OrderItem.css"

const OrderItem = ({bookImg, bookName, bookPrice, bookNum}) => {
  return (
    <div className="orderItem">
      <img src={bookImg} alt="" />
      <div>{ bookName }</div>
      <div>{ bookPrice }</div>
      <div>{ bookNum }</div>
    </div>
  )
}

export default OrderItem
