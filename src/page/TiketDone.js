import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import TiketDone from '../component/dashboard/ListTiketDone'

class PageDone extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <TiketDone/>
            </div>
        )
    }
}

export default PageDone