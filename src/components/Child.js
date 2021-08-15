import React from 'react';

const Child = (props) => {

    console.log(props.leState.messageOne)
    const buttonResult = props.leState.messageOne !== null ? (<button onClick={props.answerOne}>Reponse</button>) : (<button disabled>Reponse</button>)
    return (
        <div>
            <h2>Kyky {props.name}</h2>
            {buttonResult}
            <p>{props.leState.messageTwo}</p>
        </div>
    )
}

export default Child