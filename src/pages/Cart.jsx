import React from 'react'
import OrderItem from '../components/OrderItem/OrderItem'
import '../styles/Cart.css'
import Title from '../components/Title/Title'
import { Button } from '@mui/material'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { message } from 'antd'
import * as Api from '../utils/api'

const Cart = ({ cartItem, setCartEmpty }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  let [sum, setSum] = React.useState(0)
  const submitCart = event => {
    setAnchorEl(event.currentTarget)
    // var _sum = 0
    // cartItem.map(item => {
    //   _sum += item.bookPrice * item.bookNum
    // })

    // setSum(_sum)
  }
  React.useEffect(() => {
    var _sum = 0
    cartItem.map(item => {
      _sum += item.bookPrice * item.bookNum
    })

    setSum(_sum)
  }, [cartItem])
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined
  const orders = [
    {
      bookName: 'The Great Gatisby',
      bookPrice: 20,
      bookNum: 4,
    },
  ]
  const changePrice = price => {
    var _sum = sum
    _sum += price
    console.log(_sum)
    setSum(_sum)
  }
  return (
    <div className="orderList">
      <Title text="Cart" />
      {cartItem.map((item, index) => (
        <OrderItem
          bookName={item.bookName}
          bookImg={item.bookImg}
          bookPrice={item.bookPrice}
          bookNum={item.bookNum}
          changePrice={changePrice}
          key={index}
        />
      ))}
      <div>总价为{sum}元</div>
      <div className="submitCart">
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>
            <div className="btnGroup">
              <div className="btn">
                <Button
                  className="btn"
                  variant="contained"
                  color="error"
                  onClick={() => {
                    handleClose()
                    message.success('取消支付！')
                  }}
                >
                  取消
                </Button>
              </div>
              <div className="btn">
                <Button
                  variant="contained"
                  color="success"
                  onClick={async () => {
                    handleClose()
                    let data = {
                      orderUser: 'badbao',
                      orderTime: new Date(),
                      orderPrice: sum,
                      bookList: cartItem.map(item => {
                        return {
                          bookName: item.bookName,
                          bookAuthor: item.bookAuthor,
                          bookNum: parseInt(item.bookNum),
                          bookPrice: parseFloat(item.bookPrice),
                        }
                      }),
                    }
                    console.log(data)
                    let res = await Api.addOrder(JSON.stringify(data))
                    if (res.code === 200) {
                      message.success('支付成功' + sum + '元！')
                    } else {
                      message.error('出现未知错误！')
                    }

                    setSum(0)
                    setCartEmpty()
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
  )
}

export default Cart
