import { asyncLocalStorage } from '../helpers'

export default async (props) => {
    await asyncLocalStorage.clear();
    props.history.push('/sign-in');
}