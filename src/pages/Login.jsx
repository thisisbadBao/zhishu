import React, { useState } from "react";
import {Input, Form} from "antd";
import { Button, Switch } from "@mui/material";
// import Input from "@mui/material/Input"

import "../styles/Login.css";
const Login = () => {
  const [isNewUser, changeMod] = useState(false);

  const registerTable = (
    <div>
      <li>
        电话：
        <input />
      </li>
      <li>
        地址：
        <input />
      </li>
    </div>
  );

  return (
    <div className="login">
      <Form
        className="loginForm"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete="off"
      >
        <Form.Item
          className="usernameInput"
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="inputBox" />
        </Form.Item>

        <Form.Item
          label="密码"
          className="passwordInput"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="inputBox" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div className="registerTable">{isNewUser && registerTable}</div>
        </Form.Item>
      </Form>
      <div className="switchMod">
        <Button variant="text">
          {isNewUser ? "register" : "sign in"}
        </Button>
        <div>
        <Switch onChange={() => {
          changeMod(!isNewUser)
        }} />
        新用户

        </div>
      </div>
    </div>
  );
};

export default Login;
