import React,{ useState } from "react";



const AddExpenseForm = ()=>{

    let [inputValue,setInputValue ]= useState('');
    const ChangeValue = (event)=>{
        console.log(event.target.value) //Here value will not update becasue for normal js variable
        setInputValue(event.target.value)
    }

    return (
      <div>
        <form action="">

        <input type="text" onChange={ChangeValue} />
        {inputValue}
        </form>
      </div>
    )
}
export default AddExpenseForm;