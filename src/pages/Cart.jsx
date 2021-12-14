import React from "react";
import OrderItem from "../components/OrderItem/OrderItem";
import "../styles/Cart.css";
import Title from "../components/Title/Title";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
          bookImg="https://th.bing.com/th/id/OIP.A6Hk-aQbwvDcdU9w2TE7CwHaJ2?w=199&h=265&c=7&r=0&o=5&pid=1.7"
          bookPrice={item.bookPrice}
          bookNum={item.bookNum}
        />
      ))}

      {/* <IconButton
        className="submitCart"
        color="primary"
        aria-label="add to shopping cart"
        onClick={submitCart}
      >
        <AddShoppingCartIcon /> 提交订单
      </IconButton> */}
      <div className="submitCart">
        <Button
          variant="contained"
          style={{ background: `#002329` }}
          onClick={submitCart}
        >
          提交订单
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>

      <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
        </Button>
      </div>
    </div>
  );
};

export default Cart;
