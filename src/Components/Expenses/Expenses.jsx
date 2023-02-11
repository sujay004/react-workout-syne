import ExpenseItem from "./ExpenseItem/ExpenseItem";


const Expenses = ()=>{
    let expnese = [{
        id:'001',
        title:'Shopping',
        amount:100
    }];


    return (
        <div className="container">
            <h1>Expenses loaded</h1>
            <div className="row">
            <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            <ExpenseItem expnese={expnese[0]}></ExpenseItem>
            </div>
        </div>
    )
}
export default Expenses;