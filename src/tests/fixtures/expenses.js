import moment from "moment"
export  default [{
    id:'1',
    description:'Gaz',
    amount:123,
    createdAt: 0,
    note:'this is  1st note'
},
{
    id:'2',
    description:'Rent',
    amount:300,
    createdAt: moment(0).subtract(4, 'day').valueOf(),
    note:'this is  2nd note'
},
{
    id:'3',
    description:'Credit card',
    amount:500,
    createdAt: moment(0).add(4, 'day').valueOf(),
    note:'this is  3rd note'
}
]