import axios from "axios";

const url = `https://sclub.in.ua/actions/all/page/0/100`;

export const getAllProduct = (product) =>{
    return{
        type: 'GET_PRODUCT',
        payload: product
    }
}

export const getProductCreator = () => {
    return (dispatch) => {
     return axios.get(`${url}`) 
        .then((response) => {
            console.log(response.data.entities,'uuu');
            dispatch(getAllProduct(response.data.entities))
        })
    }
}