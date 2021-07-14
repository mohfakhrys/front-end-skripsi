import React,{Component} from 'react';
import axios from 'axios';


class ChangeReqeustDetail extends Component{

    constructor(props){
        super(props)
        this.state = {
          tiket:[],
          values: {
              pekerja: '',
              status: '',
              user: ''
            },
            touched: {
              pekerja: false,
              status: false
            },
            submitError: null,
            deskripsi:'',
            pekerja:[],
            isOpen: false
        }
    }

    componentDidMount() {
        const id = this.props.id
        // Simple GET request using axios
        axios.get(`http://localhost:8000/change/id_change=${id}`)
            .then(response => this.setState({ tiket: response.data }));
            
          
    }

    handleApprove = event => {
        event.preventDefault();
        const id =  this.props.id
      
        axios.put(`http://localhost:8000/approve/id_change=${id}` )
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = `/change/id_change=${id}`  //This line of code will redirect you once the submission is succeed
          })
      }

      handleReject = event => {
        event.preventDefault();
        const id =  this.props.id
        // const { history } = this.props;
      
        axios.put(`http://localhost:8000/reject/id_change=${id}` )
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = `/change/id_change=${id}` //This line of code will redirect you once the submission is succeed
          })
      }

    render(){
        const {tiket} = this.state
        console.log(tiket)
        const checkRole = localStorage.getItem('role');
        let button;
            if (checkRole ===  'management' && tiket.status_change === "NEW") {
                button = 
                <div className="card" style={{width: '100%',height:'70%',marginTop:'0px',borderColor:'#004f97'}}>
                    <button className="Approve" style={{marginTop:'15px'}} onClick  = {this.handleApprove}>Approve</button> 
                    <button className="Reject" style={{marginTop:'15px'}} onClick = {this.handleReject}>Reject</button>
                </div>
                
            } else if (checkRole ===  'management' && tiket.status_change === "APPROVE"){
                button = <h4 style={{marginLeft:'350px',marginTop:'10px'}}> Maaf Anda Tidak Sudah di Approve</h4>
            }else if (checkRole ===  'management' && tiket.status_change === "REJECT"){
                button = <h4 style={{marginLeft:'350px',marginTop:'10px'}}> Maaf Anda Tidak Sudah di Reject</h4>
            }else{
                button = <h4 style={{marginLeft:'350px',marginTop:'10px'}}> Maaf Anda Tidak Punya Hak Approve</h4>
            }
        

        return(
            <div className="background" style={{height:'565px',width:'100%' ,paddingTop:'70px',paddingBottom:'80px',backgroundColor:'white'}}>
            <h3 style={{marginLeft:'180px'}}>Change Request Tiket</h3>
            <div className="card" style={{width: '1165px',height:'120%',marginTop:'10px',marginLeft:'180px',borderColor:'#004f97'}}>
                <div className ="id-tiket" style={{marginLeft:'5px',marginTop:'5px'}}>
                    Tiket {tiket.id_change} - {tiket.full_name} 
                </div>
                
            <div className="card" style={{width: '100%',height:'70%',marginTop:'10px',borderColor:'#004f97'}}>
                <div className="desc" >
                    {tiket.keterangan}
                </div>
            </div>
               {button}
            </div>
        </div>
        )
    }
}

export default ChangeReqeustDetail