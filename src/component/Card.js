import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo_bri.png'
import background from '../images/logo_ceria.png'

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: 'fakhryafa@gmail.com',
      password: 'Fakhry123',
      emailSalah: 'salah',
      passwordSalah : 'salah',
      emailBenar: 'benar',
      passwordBenar : 'benar'
    };
  } 
   
  render(){
    const {email,password,inpunEmail,inpuntPassword} = this.state

    const onChangeEmail = (e) => {
      const value = e.target.value
      if (e !== email){

      }
      this.setState(value)
    }

  const onChangePassword = (e) => {
      const value = e.target.value
      this.setState(value)
  }
        return(
          <div className="background" style={{height:'565px',width:'1280px' ,paddingTop:'110px',paddingBottom:'80px',backgroundColor:'white'}}>
            <div className="card" style={{width: '236px',height:'100%',margin:'0 auto',borderColor:'#004f97'}}>
              <img src={logo} className="card-img-top" alt="logo" style={{maxHeight:'100px',maxWidth:'100px',marginLeft:'65px'}}/>
            <div class="card-body" style={{backgroundColor:'#004f97'}}>
              <form>
              <div class="mb-3">
                <label for="Email" className="form-label" style={{color:'white'}}>Email</label>
                <input type="email" className="form-control" id={inpunEmail} aria-describedby="email"/>
                <label for="Password" className="form-label" style={{color:'white'}}>Password</label>
                <input type="password" className="form-control" id={inpuntPassword} aria-describedby="password"/>
                <Link to='Hero'>
                  <button type="button" className="btn btn-primary" style={{marginTop:'10px',backgroundColor:'white',color:'#004f97'}}>Login</button>
                </Link>
                <Link to='Update'>
                  <div style={{color:'white',marginTop:'10px'}}>Request Ticket</div>
                </Link>
              </div>
              </form>
            </div>
          </div>
          </div>
        );
    }
}

export default Card