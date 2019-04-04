import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Display from '../../components/Display/Display'
import './Settings.css'
import { Redirect } from 'react-router-dom';

class Settings extends Component{
    state={
        session: localStorage.getItem("session")
    }
    render(){
        const validateSession = () => {
            if(this.state.session !== 'true'){
                return <Redirect to={{pathname: '/login'}} />;
            }
        }
        
        return(
            <div className="Settings">
                {validateSession()}
                <Header session={localStorage.getItem("session")} />
                <div className="containerSettings">
                    <Display />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Settings;