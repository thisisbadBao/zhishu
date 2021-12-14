import * as React from 'react'
import './BookItem.css'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import bookDetailBg from '../../assets/image/bookDetailBg.svg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const BookItem = ({ bookImg, bookName, bookAuthor, bookNote, bookPrice }) => {
  const [open, setOpen] = useState(false)
  const [addCartOpen, setAddCartOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleAddCartClose = () => {
    setOpen(false)
    setAddCartOpen(true)
  }

  return (
    <div className="bookItem">
      <div className="bookImg" onClick={handleClickOpen}>
        <img src={bookImg} alt="" style={{ width: '100%' }} />
      </div>
      <div className="bookInfo">
        <div>《{bookName}》</div>
        <div>作者：{bookAuthor}</div>
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              书籍详情
            </Typography>
            <Button autoFocus color="inherit" onClick={handleAddCartClose}>
              添加到购物车
            </Button>
          </Toolbar>
        </AppBar>
        <div
          style={{ display: 'flex', width: '100vw', flexDirection: 'column' }}
        >
          <List style={{ width: '100%' }}>
            <ListItem button>
              <ListItemText primary={'书名'} secondary={bookName} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="作者" secondary={bookAuthor} />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="简介"
                secondary={
                  '《局外人》是法国作家加缪的成名作，同时也是存在主义文学的杰出作品之一，该书以一种客观记录式的“零度风格”，粗线条地描述了主人公默尔索在荒谬的世界中经历的种种荒谬的事，以及自身的荒诞体验。从参加母亲的葬礼到偶然成了杀人犯，再到被判处死刑，默尔索似乎对一切都无动于衷，他像一个象征性的符号，代表了一种普遍的存在，又像是一个血红色的灯塔，具有高度的警示性。然而，局外人现象的产生无疑是由这个世界本身所孕育的，默尔索的存在有其深刻的外部原因。'
                }
              />
            </ListItem>
            <ListItem button>
              <ListItemText primary="价格" secondary={'¥RMB: ' + bookPrice} />
            </ListItem>
          </List>
          <div
            className="bookDetailImg"
            style={{
              backgroundImage: `url(${bookDetailBg})`,
              backgroundSize: '100%,100%',
            }}
          >
            <img src={bookImg} alt="" style={{ width: '180px' }} />
          </div>
        </div>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={addCartOpen}
        onClose={() => {
          setAddCartOpen(false)
        }}
        key={'top-right'}
        autoHideDuration={2000}
      >
        <Alert severity="success">添加成功!</Alert>
      </Snackbar>
    </div>
  )
}

export default BookItem
