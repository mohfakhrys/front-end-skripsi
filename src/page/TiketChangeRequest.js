import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import TiketChangeRequest from '../component/dashboard/ListChangeRequest'

class TiketCR extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <TiketChangeRequest/>
            </div>
        )
    }
}

export default TiketCR