import React from "react";
import Title from "../components/Title/Title";
import "../styles/Help.css";

const Help = () => {
  return (
    <div>
      <div className="help">
        <Title text="HELP"></Title>
      </div>
      <div className="helpDom">
        <li>作为游客，你可以浏览本站内容，但不能执行购买操作</li>
        <li>当你准备购买一本书，请先登陆你的账户</li>
        <li>
          若你没有账户，点击登陆页下新用户标识，将开始注册流程，按要求注册后即可登陆
        </li>
        <li>
          登陆完成后你可以将喜欢的图书放入你的购物车，也可以去首页搜索栏搜索你所需要的图书
        </li>
        <li>
          当你完成这一切过后，恭喜你，点击下单确认后你将可以拥有你所看上的每本书
        </li>
        <li>PS：祝你生活愉快，期末轻松</li>
      </div>
    </div>
  );
};

export default Help;
