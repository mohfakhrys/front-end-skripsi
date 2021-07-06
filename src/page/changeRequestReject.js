import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import TiketReject from '../component/dashboard/ListRejectCR'

class RejectCR extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar />
                 <TiketReject/>
            </div>
        )
    }
}

export default RejectCR