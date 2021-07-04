import { errors } from '../common/constants'

export default (error) => {
    if (error.response === undefined){
        return errors.internalServerError
    }else {
        const { code, msg } = error.response.data.error
        if(code && msg) return { status: code, statusText: msg}
    }
}