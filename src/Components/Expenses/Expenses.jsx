import React,{ useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";


const Expenses = ()=>{
    let INTITAL_VALUE = [{
        id:'001',
        title:'Shopping',
        amount:100
    }];
    let [filterAmountList,setFilterAmountList] = useState(['All',INTITAL_VALUE[0].amount.toString()])
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
        setFilterAmountList(prevValue=>[...prevValue,submitResult.amount])
    }
    const deleteExpense = (idValue)=>{
        console.log('card id value  ',idValue )
        // setExpnese(expnese.filter(e=>e.id!=idValue))
        setExpnese(prevExpense=>prevExpense.filter(e=>e.id!=idValue))
    }
    const amountChange =(e)=>{
        console.log('amount chnaged value  ',e.target.value)
        let selectedAmount =e.target.value;
        setExpnese(prevExpense=>prevExpense.filter(e=>{
                console.log(e)
                if(e.amount=='All'){
                 return setExpnese([...INTITAL_VALUE])
                }
            return e.amount==selectedAmount.toString()}))
    }

    return (
        <div className="container">
            <h1>Expenses App</h1>
            <div className="col-4">
            <button className="btn btn-primary" onClick={changeState} >Show Form</button>
            </div>

            <br />
            <div className="col-4">
                <select className="form-control" name="filter" id="filter" onChange={amountChange}>
                    { filterAmountList.map(e=> <option key={e.id} value={e}>{e}</option>)}
                </select>
            </div>
            <div className="row mb-3 mt-2">
                {/* {addShowState?<AddExpenseForm>:null} */}
                {addShowState&& <AddExpenseForm closeForm={closeForm} onSubmit={onSubmit}></AddExpenseForm>}

            </div>
            <div className="row">
                {expnese.map(e=> <ExpenseItem expnese={e} key={e.id} deleteExpense={deleteExpense}></ExpenseItem>)}
            </div>

        </div>
    )
}
export default Expenses;