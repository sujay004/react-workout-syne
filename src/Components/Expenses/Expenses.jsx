import React,{ useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";


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

    return (
        <div className="container">
            <h1>Expenses loaded</h1>
            <button onClick={changeState()}>Show State</button>
            <div className="row mb-3 mt-2">
                {addShowState?'Show state working':null}
            </div>
            <div className="row">
            <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            {/* <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            <ExpenseItem expnese={expnese[0]}></ExpenseItem> */}
            </div>
        </div>
    )
}
export default Expenses;