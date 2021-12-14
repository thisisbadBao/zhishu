import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
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
    width: 150,
  },
  { field: 'orderState', headerName: '状态', align: 'left', width: 90 },
]
let idCounter = 0
const createRandomRow = () => {
  idCounter += 1
  return {
    id: idCounter,
    orderUser: 'badbao',
    orderTime: '2021 12.14 16:33',
    orderPrice: 77,
    bookList: '《局外人》',
    orderState: '未处理',
  }
}
const AdminOrder = () => {
  const [rows, setRows] = React.useState(() => [
    createRandomRow(),
    createRandomRow(),
    createRandomRow(),
    createRandomRow(),
  ])
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
