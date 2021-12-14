import React from "react";
import OrderItem from "../components/OrderItem/OrderItem";
import "../styles/Cart.css";
import Title from "../components/Title/Title";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

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

  const submitCart = () => {
    let sum = 0;
    orders.map((item) => (sum += item.bookPrice * item.bookNum));

    console.log(sum);
  };

  return (
    <div className="orderList">
      <Title text="Cart" />
      {orders.map((item) => (
        <OrderItem
          bookName={item.bookName}
          bookImg="../assets/image/book.svg"
          bookPrice={item.bookPrice}
          bookNum={item.bookNum}
        />
      ))}

      <IconButton
        className="submitCart"
        color="primary"
        aria-label="add to shopping cart"
        onClick={submitCart}
      >
        <AddShoppingCartIcon /> 提交订单
      </IconButton>
    </div>
  );
};

export default Cart;
