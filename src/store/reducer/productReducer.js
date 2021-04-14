export default function productReducer(state = [], action){
    if(action.type === 'GET_PRODUCT'){
        return action.payload;
    }else if(action.type === 'SEARCH_PRODUCT'){
        return state.filter(product => product.name === action.payload)
    }
    return state;
}