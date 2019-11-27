import React from 'react'

const DefaultPropsModule = (props) => {
    return(
        <div className='submodule'>
            <h2>Default props submodule</h2>
            <p>This is a module that recives a property from its parent (App.js) And the prop is:<b>{props.value}</b> - but wait, there`s no property</p>
            <p>instead we can give the submodule a default props: <b>{props.value || 'i am a default value'}</b></p>
        </div>
    )
}

export default DefaultPropsModule