import React from 'react';

const Basket = (props) => {
    const basket = props.location.state.basket;

    return (
        <div>
            Basket
            <p>{basket.id}</p>
        </div>
    );
};

export default Basket;