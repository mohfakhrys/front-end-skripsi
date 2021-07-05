import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import TiketPending from '../component/dashboard/ListTiketPending'

class PagePending extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <TiketPending/>
            </div>
        )
    }
}

export default PagePending