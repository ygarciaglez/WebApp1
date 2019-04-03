import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form'
import './Login.css'

class Login extends Component{
    
    render(){
        return(
            <div className="Login">
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