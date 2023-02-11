import React,{ useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";


const Expenses = ()=>{
    let expnese = [{
        id:'001',
        title:'Shopping',
        amount:100
    }];

    let [addShowState,setShowState] = useState(false);

   const changeState = ()=>{
        setShowState(!addShowState);
    }
    const closeForm = (inputValue)=>{
        console.log('inout value from child',inputValue )
        setShowState(false);
    }
    const onSubmit = (submitResult)=>{
        console.log('inout value from child',submitResult )
    }

    return (
        <div className="container">
            <h1>Expenses loaded</h1>
            <button onClick={changeState} >Show Form</button>
            <div className="row mb-3 mt-2">
                {/* {addShowState?<AddExpenseForm>:null} */}
                {addShowState&& <AddExpenseForm closeForm={closeForm} onSubmit={onSubmit}></AddExpenseForm>}

            </div>
            <div className="row">
            <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            </div>
        </div>
    )
}
export default Expenses;