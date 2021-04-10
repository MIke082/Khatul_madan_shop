import React from 'react';

const ItemCard = (props) => {
       const card = props.location.state.card; 
        return (
        <div>
            Item card
            {/* <p>{props.location.state.card.id}</p> */}
            {/* <p>{props.location.state.card.name}</p> */}
            <p>{card.id}</p>
        </div>
    );
};

export default ItemCard;