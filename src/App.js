import React from 'react'
import './App.css'
import BasicModule from './components/BasicModule'
import BasicPropsModule from './components/BasicPropsModule'
import DefaultPropsModule from './components/DefaultPropsModule'
import BasicStateModule from './components/BasicStateModule'
import StateArrayModule from './components/StateArrayModule'
import LocalJSONModule from './components/LocalJSONModule'
import Checklist from './components/Checklist'
import Characters from './components/Characters'

const App = () =>{
  return(
    <div className='App'>
      <Characters />
      <Checklist />
      <LocalJSONModule />
      <StateArrayModule />
      <BasicStateModule />
      <DefaultPropsModule />
      <BasicPropsModule value='pink'/>
      <BasicModule />
    </div>
  )
}
export default App
