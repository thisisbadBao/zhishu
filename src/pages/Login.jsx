import React, { useState } from 'react'
import {
  Button,
  Switch,
  Box,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send'
import '../styles/Login.css'
import Title from '../components/Title/Title'
import * as Api from '../utils/api'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import loginBg from '../assets/image/loginBg.svg'

const Login = ({ getLogin }) => {
  let navigate = useNavigate()
  const [isNewUser, changeMod] = useState(false)
  const [userName, setUserName] = useState('')
  const [tel, setTel] = useState('')
  const [addr, setAddr] = useState('')
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  //登录加载
  const [waitLoginOpen, setwaitLoginOpen] = React.useState(false)
  const handleLoginClose = () => {
    setwaitLoginOpen(false)
  }
  const handleLoginToggle = () => {
    setwaitLoginOpen(!waitLoginOpen)
  }

  //login
  const userlogin = async () => {
    if (userName === '' || values.password === '') {
      message.error('账号或密码不为空！')
      return
    }
    handleLoginToggle()
    console.log(userName, values.password)
    let data = {
      userName: userName.toString(),
      userPassword: values.password.toString(),
    }
    let res = await Api.login(JSON.stringify(data))
    console.log(res)
    if (res.code === 200) {
      message.success('登录成功，欢迎 ' + res.data.username)
      getLogin({
        userName: res.data.username,
        userAuth: res.data.userjuris ? 'admin' : 'user',
      })
      localStorage.setItem('userName', res.data.username)
      localStorage.setItem('userAuth', res.data.userjuris ? 'admin' : 'user')
      navigate('/')
    } else {
      message.error(res.errMsg)
    }
  }
  //register
  const userRegister = async () => {
    if (userName === '') {
      message.warning('用户名不能为空！')
    } else if (values.password === '') {
      message.warning('密码不能为空！')
    } else if (addr === '') {
      message.warning('地址不能为空！')
    } else if (tel === '') {
      message.warning('手机号不能为空！')
    }
    handleLoginToggle()
    let data = {
      userName: userName,
      userPassword: values.password,
      userAddr: addr,
      userTel: tel,
    }
    let res = await Api.register(JSON.stringify(data))
    if (res.code === 200) {
      message.success('注册成功')
      await userlogin()
    }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <div
      className="login"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: '100%,100%',
      }}
    >
      <Title text="Login" />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <div>
          <TextField
            label="Username"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            value={userName}
            onChange={e => {
              setUserName(e.target.value)
            }}
          />

          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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

      <div className="registerTable">
        {isNewUser && (
          <div>
            <TextField
              label="Phone"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              value={tel}
              onChange={e => {
                setTel(e.target.value)
              }}
            />
            <TextField
              label="Address"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              value={addr}
              onChange={e => {
                setAddr(e.target.value)
              }}
            />
          </div>
        )}
      </div>

      <div className="switchMod">
        {isNewUser ? (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={userRegister}
          >
            register
          </Button>
        ) : (
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={userlogin}
          >
            sign in
          </Button>
        )}

        <div className="modSwitch">
          <Switch
            onChange={() => {
              changeMod(!isNewUser)
            }}
          />
          新用户
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={waitLoginOpen}
        onClick={handleLoginClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Login
