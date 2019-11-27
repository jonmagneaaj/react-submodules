import React,{useState} from 'react'
import { MdDeleteForever } from "react-icons/md";
import './ChecklistSubmodule.css'

const ChecklistSubmodule = (props) =>{
   
    const [checked, setChecked] = useState(false)

    const checkMe = () => {
        setChecked(!checked)
    }

    return(
        <div className='submodule checklist-item'>
            {// er on checked? hvis ikke, skriv ingenting
            }
            <li className={ checked ? 'checked' : ''  }>{props.todo}</li>
            <MdDeleteForever onClick={() => props.remove( props.myNumber)}/>
            <input type='checkbox' onClick={checkMe} />
        </div>
    )
}



export default ChecklistSubmodule