import React,{ useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";


const Expenses = ()=>{
    let INTITAL_VALUE = [{
        id:'001',
        title:'Shopping',
        amount:100
    }];
    const [expnese,setExpnese]= useState(INTITAL_VALUE)

    let [addShowState,setShowState] = useState(false);


   const changeState = ()=>{
        setShowState(!addShowState);
    }
    const closeForm = (inputValue)=>{
        console.log('inout value from child',inputValue )
        setShowState(false);
    }
    const onSubmit = (submitResult)=>{
        console.log('inout value from child',submitResult,expnese )
        setExpnese([submitResult,...expnese])
        console.log('After added expnese value',expnese)
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
                {expnese.map(e=> <ExpenseItem expnese={e} key={e.id}></ExpenseItem>)}
            </div>
        </div>
    )
}
export default Expenses;