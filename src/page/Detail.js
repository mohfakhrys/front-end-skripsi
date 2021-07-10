import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import DetailTiket from '../component/dashboard/DetailTiket'
import { withRouter } from "react-router-dom";

class Detail extends Component{
    render(){
        const { id_tiket } = this.props.match.params;
        // const item = id_tiket.get()
        console.log(id_tiket)
        return(
            <div className="bg-dark">
                <Navbar/>
                 <SideBar />
                 <DetailTiket id={id_tiket}/>
            </div>
        )
    }
}

export default withRouter(Detail)