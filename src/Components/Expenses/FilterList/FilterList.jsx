
const FilterList =()=>{
    const amountChange =(e)=>{
        console.log('amount chnaged value  ',e)
    }
    return (
        <div>
             <select className="form-control" name="filter" id="filter">
                    { filterAmountList.map(e=> <option onChange={amountChange({e})}>{e}</option>)}
                </select>
        </div>
    )
}
export default FilterList;