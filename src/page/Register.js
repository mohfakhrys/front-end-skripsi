import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Register from '../component/Register'
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

class PageRegister extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <Login />
                <Register/>
            </div>
        )
    }
}

export default PageRegister