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

const BookItem = ({
  bookImg,
  bookName,
  bookAuthor,
  bookNote,
  bookPrice,
  bookRelease,
  bookRemain,
  addToCart,
}) => {
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
    addToCart({
      bookName: bookName,
      bookImg: bookImg,
      bookPrice: bookPrice,
      bookNum: 1,
      bookAuthor: bookAuthor,
    })
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
              <ListItemText primary="简介" secondary={bookNote} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="发布时间" secondary={bookRelease} />
            </ListItem>
            <ListItem button>
              <ListItemText primary="剩余库存" secondary={bookRemain} />
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
