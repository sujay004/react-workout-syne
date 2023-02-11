import React,{ useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const AddExpenseForm = (props)=>{

    let [inputValue,setInputValue ]= useState('');
    const ChangeValue = (event)=>{
        console.log(event.target.value) //Here value will not update becasue for normal js variable
        setInputValue(event.target.value)
    }
    const onClose =()=>{
        props.closeForm(inputValue);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        props.onSubmit({
            id:uuidv4(),
            amount: inputValue,
            title:'Shopping',
        })
    }

    return (
      <div className="card">
         <div className="card-body">
        <form action="">
        <label >Amount</label>
        <input type="text" onChange={ChangeValue} />
        <p>Result of inpout Value: {inputValue}</p>

        <button onClick={onSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>

        </form>
        </div>
      </div>
    )
}
export default AddExpenseForm;