import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form'
import './Login.css'
import { Redirect } from 'react-router-dom';

class Login extends Component{
    state={
        session: localStorage.getItem("session")
    }
    render(){
        const validateSession = () => {
            if(this.state.session === 'true'){
                return <Redirect to={{pathname: '/'}} />;
            }
        }

        return(
            <div className="Login">
                {validateSession()}
                <Header session={false} />
                <div className="FormSpace">
                    <Form />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Login;