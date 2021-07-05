import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Login from '../component/Login'
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

class PageLogin extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <Login />
                <Footer/>
            </div>
        )
    }
}

export default PageLogin