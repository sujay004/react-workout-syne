import React from "react";


const ExpenseItem = (props)=>{
    return (
        <div className="col-4">
        <div className="card">
            <div className="card-header">
                <h6 className="text-header text-center">{props.expnese.title.toUpperCase()}</h6>
            </div>
            <div className="card-body">
            <h6>Card Example</h6>
            <p>Id : {props.expnese.id}</p>
            <p> Amount : {props.expnese.amount}</p>
            </div>
        </div>
    </div>
    )
}
export default ExpenseItem;