import React, { useState } from "react";
import "./OrderItem.css";
import IconButton from "@mui/material/IconButton";
import { Remove, Add } from "@mui/icons-material";

const OrderItem = ({ bookImg, bookName, bookPrice, bookNum }) => {
  let [orderBookNum, changeNum] = useState(bookNum);

  return (
    <div className="orderItem">
      <img className="bookOrderImg" src={bookImg} alt="" />
      {/* <div style={{backgroundImage:`url( ${ bookImg } )`, backgroundSize: '100% 100%'}}></div> */}
      <div className="bookDetail">
        <h2 className="bookName">《{bookName}》</h2>
        <h4>单价: ￥{bookPrice}</h4>
        <div className="bookNumWiget">
          <IconButton aria-label="remove" color="primary">
            <Remove
              onClick={() => {
                if (orderBookNum > 0) {
                  orderBookNum = orderBookNum - 1;
                } else {
                  alert("你触犯了我的底线啦");
                  orderBookNum = 0;
                }
                changeNum(orderBookNum);
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
        <div className="totalCost">总价： ￥{orderBookNum * bookPrice}</div>
      </div>
    </div>
  );
};

export default OrderItem;
