import React, { useState } from "react";
import { Button, Switch, Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, TextField } from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material"
import SendIcon from '@mui/icons-material/Send';
import "../styles/Login.css";
import Title from "../components/Title/Title";

const Login = () => {
  const [isNewUser, changeMod] = useState(false);

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registerTable = (
    <div>
          <TextField
            label="Phone"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          <TextField
            label="Address"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
    </div>
  );

  return (
    <div className="login">
      <Title text="Login" />
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            label="Username"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
          />
          
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          
        </div>
        
        
      </Box>

          <div className="registerTable">{isNewUser && registerTable}</div>

      <div className="switchMod">
        <Button variant="contained" endIcon={<SendIcon />}>{isNewUser ? "register" : "sign in"}</Button>
        <div className="modSwitch">
          <Switch
            onChange={() => {
              changeMod(!isNewUser);
            }}
          />
          新用户
        </div>
      </div>
    </div>
  );
};

export default Login;
