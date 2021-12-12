import request from './request'
export const login = async params => await request.get('login')
