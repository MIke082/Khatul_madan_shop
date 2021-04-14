import React, { useEffect } from 'react';
import Card from '../card/Card';
import { connect } from 'react-redux';
import { getProductCreator } from '../../store/action';

const List = (props) => {

    useEffect(() => {
        props.getProduct()
    }, [])

    return (
        <>
        <div className="main-div">
            {props.product && props.product.length
                && props.product.map((item, index) => <Card item={item} key={index} />)}
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        product: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProduct: () => {
            dispatch(getProductCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);