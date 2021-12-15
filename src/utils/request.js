import server from './server.js'
import * as Error from './error.js'
const regHttp = /^(http[s]{0,1}:\/\/)/

async function request(url, options = {}, others = {}) {
  try {
    // const { header = {}, ...other } = options

    const _url = `${regHttp.test(url) ? '' : server.host}${url}`
    let res = await fetch(_url, options)

    res = await handleResponse(res)
    let code = res.code
    if (code) {
      switch (code) {
        case 200:
          return res
        case Error.INVALID_TOKEN.errCode:
          return Error.INVALID_TOKEN
        case Error.NO_PERMISSION.errCode:
          return Error.NO_PERMISSION
        case Error.NOT_FOUND.errCode:
          return Error.NOT_FOUND
        case Error.TIME_OUT.errCode:
          return Error.TIME_OUT
        case Error.UNKNOWN_FAIL.errCode:
          return Error.UNKNOWN_FAIL
        case Error.UNKNOWN_BOOK.errCode:
          return Error.UNKNOWN_BOOK
        default:
          return res
      }
    }
    return res
  } catch (error) {
    throw error
  }
}

//解析返回的结果
async function handleResponse(response) {
  if (response.status === 200) {
    const contentType = response.headers.get('Content-Type')
    if (contentType != null) {
      if (contentType.indexOf('text') > -1) {
        return await response.text()
      }
      if (contentType.indexOf('form') > -1) {
        return await response.formData()
      }
      if (contentType.indexOf('video') > -1) {
        return await response.blob()
      }
      if (contentType.indexOf('json') > -1) {
        return await response.json()
      }
    }
    return await response.text()
  } else if (response.status === 0) return response
  throw Error.NOT_FOUND
}

async function get(url, options) {
  if (options) {
    const { query } = options
    if (Object.keys(query !== 0)) {
      url += '?'
      for (let key in query) {
        url += `${key}=${query[key]}&`
      }
      url = url.substr(0, url.length - 1)
    }
  }
  return await request(url, {
    method: 'GET',
  })
}

async function post(url, options) {
  return await request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: options,
    // ...options,
  })
}

async function put(url, options) {
  return await request(url, {
    method: 'PUT',
    ...options,
  })
}

async function del(url, options) {
  return await request(url, {
    method: 'DELETE',
    ...options,
  })
}

export default {
  get,
  post,
  put,
  del,
}
