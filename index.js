const {createStore, combineReducers} =require('redux')

const INCREMENT="INCREMENT"
const DECREMENT="DECREMENT"
const ADD_USER="ADD_USER"
const RESET ="RESET"
const INCREMENT_BY_VALUE ="INCREMENT_BY_VALUE"

//state declare

const initialCounters={
    count : 1,
    users:['masum']
  
}


//Action declare

const incrementCounters=()=>{
    return{
        type:INCREMENT,
    }
}
const addUserCounters=(value)=>{
    return{
        type:ADD_USER,
        payload:value
    }
}
const decrementCounters=()=>{
    return{
        type:DECREMENT,
    }
}
const resetCounters=()=>{
    return{
        type:RESET,
    }
}
const incrementPayloadCounters=(value)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:value
    }
}

// Reducer
const reduceCounters=(state=initialCounters, action,payload)=>{
    switch (action.type) {
        case INCREMENT:
            
            return{
                ...state,
                count:state.count + 1,
            }


        case DECREMENT:
            return{
                ...state,
                count:state.count - 1,
            }
        case RESET:
            return{
                ...state,
                count:0,
            }
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count:state.count + action.payload,
            }
            case ADD_USER:
                return{
                    users:[...state.users, action.payload],
                    count:state.count + 1
                }
            
    
        default:
            state;
    }

}

//createStore


store.subscribe(()=>{
    console.log(store.getState())
})
// store.dispatch(incrementCounters())
// store.dispatch(incrementCounters())
// store.dispatch(incrementCounters())
// store.dispatch(incrementCounters())
// store.dispatch(resetCounters())
// store.dispatch(incrementPayloadCounters(5))
store.dispatch(addUserCounters('rana'))
const GET_PRODUCT='GET_PRODUCT'
const ADD_PRODUCT='ADD_PRODUCT'
const GET_CART='GET_CART'
const ADD_CART='ADD_CART'

const initialProducts={
    products:["Laptop"],
    countProduct:1
}
const initialCart={
    cart:["Keyboard"],
    countCart:1
}
//product
const getProduct=()=>{
        return{
            type:GET_PRODUCT
        }
}
const addProduct=(value)=>{
    return{
        type:ADD_PRODUCT,
        payload:value
    }
}
//cart
const getCart=()=>{
    return{
        type:GET_CART
    }
}
const addCart=(value)=>{
return{
    type:ADD_CART,
    payload:value
}
}
//product Reducer
const reducerProduct=(state=initialProducts,action)=>{
    switch (action.type) {
        case GET_PRODUCT:
            return{
                ...state,
            }
        case ADD_PRODUCT:
            return{
                product:[...state.products, action.payload],
                countProduct:state.countProduct + 1
            }
           
    
        default:
           return state;
    }
}
//Cart Reducer
const reducerCart=(state=initialCart,action)=>{
    switch (action.type) {
        case GET_CART:
            return{
                ...state,
            }
        case ADD_CART:
            return{
                Cart:[...state.cart, action.payload],
                countCart:state.countCart + 1
            }
           
    
        default:
          return  state;
    }
}
const rootReducer =combineReducers({
    productR:reducerProduct,
    cartR:reducerCart

})

const store =createStore(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProduct())
store.dispatch(addProduct('mobile','mouse'))
store.dispatch(getCart())
store.dispatch(addCart('mobile','mouse'))