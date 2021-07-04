import React,{Component} from 'react'
import Navbar from '../component/Navbar'
import Login from '../component/Login'
import Gridimage from '../component/Gridimage'
import Footer from '../component/Footer'

class Home extends Component{
    render(){
        return(
            <div className="container-lg" >
                <Navbar/>
                <Login/>
                {/* <Gridimage/> */}
                {/* <JumbotronHero/> */}
                {/* <JumbotronTurney/> */}
                <Footer/>
            </div>
        );
    }
}

export default Home