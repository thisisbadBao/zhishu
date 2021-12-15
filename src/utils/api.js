import request from './request'

export const login = async params => await request.post('/login', params)

export const register = async params => await request.post('/register', params)

export const getAllBook = async params => await request.get('/allBook', params)

export const getAllOrder = async params =>
  await request.get('/allOrder', params)

export const searchBook = async bookName =>
  await request.get(`/search/${bookName}`)

export const addOrder = async params => await request.post('/order', params)
