// import { react } from "@babel/types";
import React, {Component} from 'react'
// import Keyboard from './Keyboardsvg'

class Form extends Component {
    
    state = {
        color: "",
        colors: ["", "red", "blue", "yellow", "grey"]
    }

    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }
    
    

    render() {
        let colorStyle = {
            background: this.state.color
        }
        return (
            <form action="" method="post" className="form-example" style={colorStyle}>
                {/* <Keyboard /> */}
                <div className="form-example">
                    <label for="color">Enter your favorite color: </label>
                    <select value={this.state.color} onChange={this.handleColor}> 
                        {
                            this.state.colors.map((color, index) => {
                                return <option key={index} value={color}>{color}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-example">
                    <label for="name">Enter your name: </label>
                    <input type="text" name="name" id="name" placeholder="Ada Lovelace" required />
                </div>
                <div className="form-example">
                    <label for="email">Enter your email: </label>
                    <input type="email" name="email" id="email" placeholder="ada@lovelace.uk" required />
                </div>
                <div className="form-example">
                    <label for="email">Enter your message: </label>
                    <textarea type="text" name="input" id="input" required />
                </div>
                <div className="form-example">
                    <input type="submit" value="Subscribe!" disabled/>
                </div>
            </form>
        )
    }
}

export default Form