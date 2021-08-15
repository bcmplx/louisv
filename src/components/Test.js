import React, {Component, Fragment} from 'react';
import Child from './Child'


class Test extends Component {

    state = {
        messageOne: null,
        messageTwo: null
    }

    ordreOne = () => {
        this.setState ({
            messageOne: 'On test ca'
        })
    }

    answerOne = () => {
        this.setState ({
            messageTwo: 'kwoukwou'
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Mon site</h1>

                <button onClick={this.ordreOne}>Ordre</button>
                <p>{this.state.messageOne}</p>
                <hr />
                <Child name='Veronika' answerOne={this.answerOne} leState={this.state}/>
                
            </Fragment>
        )
    }
}

export default Test