import moment from "moment";

// get visible expenses
export default (expenses, {text, sortBy,startDate,endDate}) =>{
    return expenses.filter((expense) => {
        const createDateAtMoment = moment(expense.createdAt);
        const startDateMatch =  startDate ? startDate.isSameOrBefore(createDateAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createDateAtMoment,'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) =>{
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if (sortBy = 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}