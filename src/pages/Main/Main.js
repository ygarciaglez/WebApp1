import React, {Component} from 'react';
import './Main.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';

class Main extends Component{
    state={
        session: localStorage.getItem("session")
    }
    render(){
        return(
            <div className="Main">
                <Header  session={this.state.session}  />
                <Carousel />
                <Footer />
            </div>
        );
    }
}
export default Main;