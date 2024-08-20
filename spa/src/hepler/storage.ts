// localStorage
const local: any = localStorage
const session: any = sessionStorage
export const localGet = (key: string) => {
  try {
    return JSON.parse(local.getItem(key))
  } catch (e) {
    return null
  }
}
export const localSet = (key: any, val: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(val))
  } catch (e) {
  }
}
export const localRemove = (key: any) => {
  try {
    localStorage.removeItem(key)
  } catch (e) {
  }
}
export const localClear = () => {
  try {
    localStorage.clear()
  } catch (e) {
  }
}

// sessionStorage
export const sessionGet = (key: any) => {
  try {
    return JSON.parse(session.getItem(key))
  } catch (e) {
    return null
  }
}
export const sessionSet = (key: any, val: any) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(val))
  } catch (e) {
  }
}
export const sessionRemove = (key: any) => {
  try {
    sessionStorage.removeItem(key)
  } catch (e) {
  }
}
export const sessionClear = () => {
  try {
    sessionStorage.clear()
  } catch (e) {
  }
}
