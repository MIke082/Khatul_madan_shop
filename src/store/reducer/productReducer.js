export default function productReducer(state = [], action){
    if(action.type === 'GET_PRODUCT'){
        return action.payload;
    }
    return state;
}