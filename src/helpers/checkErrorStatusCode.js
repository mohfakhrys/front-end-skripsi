import asyncLocalStorage from './asyncLocalStorage'

export default async (props, statusCode) => {
  switch(statusCode) {
    case 401: 
      props.history.replace('', null)
      props.history.push('/sign-in')
      await asyncLocalStorage.clear()
      break
    default: 
      break
  }
}