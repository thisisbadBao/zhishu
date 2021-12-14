import React from "react";
import OrderItem from "../components/OrderItem/OrderItem";
import "../styles/Cart.css";
import Title from "../components/Title/Title";
import { Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [sum, setSum] = React.useState(0);
  const submitCart = (event) => {
    setAnchorEl(event.currentTarget);
    orders.map((item) => (sum += item.bookPrice * item.bookNum));
    setSum(sum);
    console.log(sum);
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

      <div className="submitCart">
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
          <Typography sx={{ p: 2 }}>
            <h3 className="sumTitle">总价为{sum}元</h3>
            <div className="btnGroup">
              <div className="btn">
                <Button
                  className="btn"
                  variant="contained"
                  color="error"
                  onClick={() => {
                    handleClose();
                    alert("支付失败!");
                  }}
                >
                  取消
                </Button>
              </div>
              <div className="btn">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    handleClose();
                    alert("支付成功" + sum + "元！");
                    setSum(0);
                  }}
                >
                  确认
                </Button>
              </div>
            </div>
          </Typography>
        </Popover>
        <Button
          variant="contained"
          aria-describedby={id}
          style={{ background: `#002329` }}
          onClick={submitCart}
        >
          提交订单
        </Button>
      </div>
    </div>
  );
};

export default Cart;
