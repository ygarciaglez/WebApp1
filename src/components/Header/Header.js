import React,{Component} from 'react';
import './Header.css'
import { Redirect } from 'react-router-dom';
import imageLogo from '../../assets/images/userLogo.png'

class Header extends Component{
    state={
        opc: ' ',
        labelLogInOut: 'log in'
    }
    render(){
        const labelOpc=()=>{
            if(this.props.session === 'true'){
                return "log out"
            }else{
                return "log in"
            }
        }

        let handelClick = (opc) =>{
                this.setState({opc})
        }

        const toRender=()=>{
            switch(this.state.opc){
                case "main":
                    this.setState({
                        opc:' '
                    })
                    return <Redirect to={{pathname: '/'}} />;
                case "login":
                    if(this.props.session === 'true'){
                        localStorage.setItem("session", false)
                    }
                    this.setState({
                        opc:' '
                    })
                    return <Redirect to={{pathname: '/login'}} />;
                case "settings":
                    this.setState({
                        opc:' '
                    })
                return <Redirect to={{pathname: '/settings'}} />;
                default:
                break;
            }
        }
        
        return(
            <div className="Header">
                <div className="HeaderP1">
                    <div >
                        <img className={["Click", "Logo"].join(' ')} alt='LOGO' src={imageLogo} onClick={()=>handelClick("main")} />
                    </div>
                    <div className="ContainerItems">
                        <p className={["Click", "ChildItem"].join(' ')} onClick={()=>handelClick("settings")}>My Information</p>
                    </div>
                    
                </div>
                <p className="Click" onClick={()=>handelClick("login")}>{labelOpc()}</p>
                {toRender()}
            </div>
        )
    }
}
export default Header;




