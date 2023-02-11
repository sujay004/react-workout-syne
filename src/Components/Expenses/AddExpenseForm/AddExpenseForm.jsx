import React,{ useState } from "react";



const AddExpenseForm = (props)=>{

    let [inputValue,setInputValue ]= useState('');
    const ChangeValue = (event)=>{
        console.log(event.target.value) //Here value will not update becasue for normal js variable
        setInputValue(event.target.value)
    }
    const onClose =()=>{
        props.closeForm(inputValue);
    }

    return (
      <div className="card">
         <div className="card-body">
        <form action="">

        <input type="text" onChange={ChangeValue} />
        <p>Result of inpout Value: {inputValue}</p>

        <button>Submit</button>
        <button onClick={onClose}>Close</button>

        </form>
        </div>
      </div>
    )
}
export default AddExpenseForm;