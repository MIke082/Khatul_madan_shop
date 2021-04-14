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
            dispatch(getAllProduct(response.data.entities))
        })
    }
}

export const searchProduct = (nameOfProduct) => {
    return{
        type: 'SEARCH_PRODUCT',
        payload: nameOfProduct
    }
}

export const searchProductCreator = (nameOfProduct) => {
    return (dispatch) => {
        console.log(nameOfProduct, 'actionFindProduct');
        dispatch(searchProduct(nameOfProduct));
    }
}
