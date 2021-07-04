import { errors } from '../common/constants'

export default (error) => {
    if (error.response === undefined){
        return errors.internalServerError
    }else {
        const { code, message } = error.response.data.error
        if(code && message) return { status: code, statusText: message}
    }
}