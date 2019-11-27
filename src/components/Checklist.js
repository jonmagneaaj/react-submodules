import React,{useState} from 'react'
import ChecklistSubmodule from './ChecklistSubmodule'

const Checklist = () =>{
    const array = ['feed cat', 'eat,drink','sleep','socialize','work','shower','use the bathroom']
    const [todos, setTodos] = useState(array)

    const remove = (i) =>{
        //Er todo annerledels ( != )fra todo[i] så fjern
        setTodos(
            todos.filter( todo => todo !== todos[i])
        )
    }
    //Legger til nye items hver gang det blir trykket Enter
    const addItem = (e) => {
        if(e.keyCode === 13){
            setTodos([...todos, e.target.value])
            e.target.value=''
        }
    }

    return(
        <div className='submodule'>
            <h2>Checklist</h2>
            <input type='text' onKeyDown={addItem} placeholder='Add items'/>
            {
                todos.map(
                   (todo , i) => <ChecklistSubmodule remove={remove} myNumber={i} todo={todo}/>
                )
            }
        </div>
    )
}



export default Checklist