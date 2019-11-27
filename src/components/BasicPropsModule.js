import React from 'react'

const BasicPropsModule = (props) =>{
    return(
        <div className='submodule'>
            <h2>Basic Props module</h2>
            <p>This is a module that recives a property from its parent (App.jS) And the prop is:<b> {props.value}</b></p>
        </div>
    )
}


export default BasicPropsModule