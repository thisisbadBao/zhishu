import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import * as Api from '../../utils/api'
const columns = [
  { field: 'id', headerName: 'id', align: 'center', width: 20 },
  { field: 'orderUser', headerName: '下单用户', align: 'left', width: 150 },
  { field: 'orderTime', headerName: '下单时间', align: 'left', width: 150 },
  {
    field: 'orderPrice',
    headerName: '总价',
    type: 'number',
    align: 'right',
    width: 100,
  },
  {
    field: 'bookList',
    headerName: '书单',
    width: 350,
  },
  { field: 'orderState', headerName: '状态', align: 'left', width: 90 },
]
let idCounter = 0
const AdminOrder = () => {
  const [rows, setRows] = React.useState([])
  React.useEffect(() => {
    const fetchallbook = async () => {
      let res = await Api.getAllOrder()
      console.log(res)
      let orders = res.data
      let _rows = []
      for (let i = 0; i < orders.length; i++) {
        let booklist = ''
        for (let item of orders[i].bookList) {
          booklist += '《' + item.bookName + '》'
        }
        _rows.push({
          id: idCounter++,
          orderUser: orders[i].orderUser,
          orderTime: orders[i].orderTime,
          orderPrice: orders[i].orderPrice,
          bookList: booklist,
          orderState:
            orders[i].orderState === 0
              ? '未处理'
              : orders[i].orderState === 1
              ? '已处理'
              : '已拒绝',
        })
      }
      setRows(_rows)
    }
    fetchallbook()
  }, [])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <Box sx={{ bgcolor: 'background.paper' }}>
            <DataGrid
              hideFooter
              rows={rows}
              columns={columns}
              disableColumnFilter={false}
              disableColumnMenu={true}
              disableDensitySelector={false}
              density={'comfortable'}
            />
          </Box>
        </div>
      </div>
    </div>
  )
}

export default AdminOrder
