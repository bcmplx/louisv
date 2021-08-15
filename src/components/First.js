import React, {Component, Fragment} from 'react'
import Header from './header/Header'
import Prestation from './Prestation'
import Form from './Form'
// import Test from './Test'

class FirstPage extends Component {

    render() {
        return (
            <Fragment>
                <Header />
                <div className="contentpageone" id="prestations">
                    <h1>Développeur Web Fullstack - Javascript / NodeJS / React</h1>

                    <h2>Prestations</h2>
                    <div className="prestations">                       
                        <Prestation name="presta 1" />
                        <Prestation name="presta 2" />
                        <Prestation name="presta 3" />
                        <Prestation name="presta 4" />  
                        
                    </div>
                    <div id="formation"></div>
                    <h2>Formation</h2>
                    <div className="prestations">                       
                        <Prestation name="presta 1" />
                        <Prestation name="presta 2" />
                        <Prestation name="presta 3" />
                        <Prestation name="presta 4" />  
                        
                        <div id="contact"></div>
                    </div>
                    
                    <h2>Contact</h2>
                    <div className="prestations">                       
                        <Form />
                    </div>


                </div>
                
                
            </Fragment>
        )
    }
}


export default FirstPage