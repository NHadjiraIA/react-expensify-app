
export const setTextFilter = (textUpdate = '')=>({
    type:"SET_TEXT_FILTER",
    textUpdate

});
export const sortByAmount = () =>({
    type:"SORT_BY_AMOUNT"
});
export const sortByDate = () =>({
    type:"SORT_BY_DATE"
});

export const setStartDate = (startDateUpdate = ' ') =>({
    type:"SET_START_DATE",
    startDateUpdate
});

export const setEndDate = (endDateUpdate = ' ') =>({
    type:"SET_END_DATE",
    endDateUpdate
})
