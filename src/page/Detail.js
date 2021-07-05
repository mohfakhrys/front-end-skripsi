import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import DetailTiket from '../component/dashboard/DetailTiket'

class Detail extends Component{
    render(){
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar/>
                 <DetailTiket/>
            </div>
        )
    }
}

export default Detail