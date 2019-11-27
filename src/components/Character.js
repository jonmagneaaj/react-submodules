import React from 'react'
import './Character.css'


const Character = (props) =>{
    return(
    <div className='character'>
        <img src={props.image} alt={'The character: ' + props.name} />
        <h3>{props.name}</h3>
        <hr />
        <p>
            {props.gender}<br />
            {props.status}<br />
            {props.origin}<br />
        </p>
    </div>
    )
}

export default Character