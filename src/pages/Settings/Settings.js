import React, {Component} from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Display from '../../components/Display/Display'
import './Settings.css'
import { Redirect } from 'react-router-dom';

class Settings extends Component{
   
    render(){
        let session = localStorage.getItem("session")
       
        const validateSession = () => {
           
            if(session !== 'true'){
               
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