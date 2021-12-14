import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
const columns = [
  { field: 'id', headerName: 'id', align: 'center', width: 20 },
  { field: 'bookName', headerName: '书名', align: 'left', width: 150 },
  { field: 'bookAuthor', headerName: '作者', align: 'left', width: 120 },
  {
    field: 'bookPrice',
    headerName: '价格',
    type: 'number',
    align: 'right',
    width: 100,
  },
  {
    field: 'bookRemain',
    headerName: '剩余数量',
    type: 'number',
    align: 'right',
    width: 150,
  },
  { field: 'bookState', headerName: '状态', align: 'left', width: 90 },
]
let idCounter = 0
const createRandomRow = () => {
  idCounter += 1
  return {
    id: idCounter,
    bookName: '局外人',
    bookAuthor: '加缪',
    bookPrice: 77,
    bookRemain: 16,
    bookState: '正在销售',
  }
}
const AdminBook = () => {
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

export default AdminBook
