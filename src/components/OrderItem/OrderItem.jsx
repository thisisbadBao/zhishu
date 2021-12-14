import React, { useState } from "react";
import "./OrderItem.css";
import IconButton from "@mui/material/IconButton";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Remove, Add } from "@mui/icons-material";

const OrderItem = ({ bookImg, bookName, bookPrice, bookNum }) => {
  let [orderBookNum, changeNum] = useState(bookNum);

  return (
    <div className="orderItem">
      <img src={bookImg} alt="" />
      <h3 className="bookName">《{bookName}》</h3>
      <div>￥{bookPrice}</div>
      <div className="bookNumWiget">
        <IconButton aria-label="remove" color="primary">
          <Remove
            onClick={() => {
              changeNum((orderBookNum = orderBookNum - 1));
            }}
          />
        </IconButton>
        <div className="bookNum">{orderBookNum}</div>
        <IconButton aria-label="add" color="primary">
          <Add
            onClick={() => {
              changeNum((orderBookNum = orderBookNum + 1));
            }}
          />
        </IconButton>
      </div>
      <div className="totalCost"><MonetizationOnIcon /> ￥{orderBookNum * bookPrice}</div>
    </div>
  );
};

export default OrderItem;
