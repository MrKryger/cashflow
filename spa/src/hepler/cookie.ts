const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)' // eslint-disable-line
  ))
  return matches ? decodeURIComponent(matches[1]) : ''
}

// enum EOptions {
//   EXPIRES = 'expires',
//   PATH = 'path'
// }
//
// interface IOptions {
//   expires: Date | string,
//   path: string,
// }

const setCookie = (name: string, value: string, options?: any) => {
  options = {
    path: '/',
    ...options
  }
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  for (const optionKey in options) {
    updatedCookie += `; ${optionKey}`
    const optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`
    }
  }

  document.cookie = updatedCookie
}

const deleteCookie = (name: string) => {
  setCookie(name, '', {
    'max-age': -1
  })
}

export { setCookie, getCookie, deleteCookie }
