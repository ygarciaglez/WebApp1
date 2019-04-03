import React,{useState} from 'react';
import './Form.css'
import EnterImg from '../../assets/images/password.png'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

const form = (props) => {
    let [requiredPas,requiredPasUS]=useState({
        showErrorPass:false,
    })
    let [sts,Usts]=useState({
        userName:' ',
    })
    let [Psts,PUsts]=useState({
        pass:'',
    })
    let [session, sessionSetState]=useState({
        tokenSession: ' '
    })
    let [btnCancel,btnCancelState]=useState({
        btnCan : false,
    })
    let [showError, showErrorState] = useState({
        message: false
    })
    const handleOnChangeName=(event)=>{
        Usts({
            userName : event.target.value
        })
    }
    const handleOnChangePass=(event)=>{
        PUsts({
            pass : event.target.value
        })
    }
    const handleClick = () =>{
        if(sts.userName === 'yordy@ibm.com' && Psts.pass === 'IBM123'){
            localStorage.setItem("session", true)
            sessionSetState({
                tokenSession:true
            })
        
        }else{
            if(Psts.pass.length<=0){
                requiredPasUS({
                    showErrorPass:true
                })
            }else{
                requiredPasUS({
                    showErrorPass:false
                })
            }
            sessionSetState({
                tokenSession:false
            })
            showErrorState({
                message:true
            })
        }   
    }

    const handleCancel =()=>{
        btnCancelState({
            btnCan: true
        })
    }

    const backHome = () =>{
        if(btnCancel.btnCan === true){
            return <Redirect to={{pathname: '/'}} />;
        }
        if(session.tokenSession === true){
            return <Redirect to={{  pathname: '/settings'}}/>;
        }
    }

    const closeError = () => {
        showErrorState({
            message:false
        })
    }

    return(
        <div className="MainContainer">
           
            {<Alert show={(showError.message && Psts.pass.length >0 && requiredPas.showErrorPass === false)}  
                    variant="danger"  dismissible onClose={()=>closeError()}>
                        Your credentials are incorrect, please try again!
            </Alert>}
            {<Alert show={requiredPas.showErrorPass}  variant="danger"  dismissible onClose={()=>closeError()}>
                        Password is required
            </Alert>}
            <div className="Form">
                <div className="headerBox">
                    <img className="IconEnter" src={EnterImg} alt="Login"/>
                </div>

                <div className="formBox">
                    <TextField
                        onChange={(event)=> handleOnChangeName(event)}
                        id="standard-password-input"
                        label="User"
                        placeholder="aaa@aaa.com"
                        InputProps={{
                            style: {
                                color: "white"
                            }
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    <TextField
                        required
                        onChange={(event)=> handleOnChangePass(event)}
                        className="inpu"
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        placeholder="********"
                        margin="dense"
                        InputProps={{
                            style: {
                                color: "white"
                            }
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />

                    <div className="ButtonsContainer">
                        <Button size="sm" variant="outline-primary" onClick={()=>handleClick()}>Login</Button>
                        <Button size="sm" variant="outline-primary" onClick={()=>handleCancel()} >Cancel</Button>
                    </div>
                    {backHome()}
                    
                </div>
            </div>
        </div>
    );

}
export default form;