//state declare

const initialNumberCounters={
    count : 0,
}
const initialUsersCounters={
    users : [{name:'Md Masum Rana'}],
}

//Action declare

const incrementCounters=()=>{
    return{
        type:'INCREMENT',
    }
}
const decrementCounters=()=>{
    return{
        type:'DECREMENT',
    }
}
const addUsers=()=>{
    return{
        type:'ADD_USER',
        payload: {name:'Akash'}
    }
}