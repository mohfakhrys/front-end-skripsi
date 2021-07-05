import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import TiketInProgress from '../component/dashboard/ListTiketInProgress'

class PageInProgress extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <TiketInProgress/>
            </div>
        )
    }
}

export default PageInProgress