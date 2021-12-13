import React from "react";
import OrderItem from "../components/OrderItem/OrderItem";
import "../styles/Cart.css"

const Cart = () => {
  const orders = [
    {
      bookName: "The Great Gatisby",
      bookPrice: 20,
      bookNum: 4,
    },
    {
      bookName: "The Great Gatisby",
      bookPrice: 20,
      bookNum: 4,
    },
    {
      bookName: "The Great Gatisby",
      bookPrice: 20,
      bookNum: 4,
    },
    {
      bookName: "The Great Gatisby",
      bookPrice: 20,
      bookNum: 4,
    },
    {
      bookName: "The holder of field",
      bookPrice: 40,
      bookNum: 2,
    },
    {
      bookName: "The holder of field",
      bookPrice: 40,
      bookNum: 2,
    },
    {
      bookName: "The holder of field",
      bookPrice: 40,
      bookNum: 2,
    },
    {
      bookName: "The holder of field",
      bookPrice: 40,
      bookNum: 2,
    },
    {
      bookName: "The holder of field",
      bookPrice: 40,
      bookNum: 2,
    },
    {
      bookName: "The holder of field",
      bookPrice: 40,
      bookNum: 2,
    },
  ];

  return (
    <div  className="orderList">
      {orders.map((item) => (
        <OrderItem
          bookName={item.bookName}
          bookImg="../assets/image/book.svg"
          bookPrice={item.bookPrice}
          bookNum={item.bookNum}
        />
      ))}
    </div>
  );
};

export default Cart;
