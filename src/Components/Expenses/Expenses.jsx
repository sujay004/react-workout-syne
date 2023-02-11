

const Expenses = ()=>{
    let expnese = {
        id:'001',
        title:'Shopping',
        amount:100
    }
    return (
        <div className="container">
            <h1>Expenses loaded</h1>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="text-header">{expnese.title}</h6>
                        </div>
                        <div className="card-body">
                        <h6>Card Example</h6>
                        <p>Id : {expnese.id}</p>
                        <p> Amount : {expnese.amount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Expenses;