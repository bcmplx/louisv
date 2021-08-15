import React from 'react'

const Prestation = props => {

        return (
            <div className="prestation">
                <img src="https://images.pexels.com/photos/5957128/pexels-photo-5957128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt={props.name} id={props.name}/>

                <p>{props.name}</p>
            </div>
        )
}


export default Prestation