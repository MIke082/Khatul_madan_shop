import React, { useState } from 'react';
import { history } from '../history';
import img from '../../img/img.jpg';
import './Card.css'
const Card = ({ item, index }) => {

    function handleClick() {
        history.push({
            pathname: '/itemCard',
            state: { card: item }
        });
    }
    return (
        <div className="main-div"> 
        <button onClick={handleClick} >
       
            <div key={index} className="card-div">
                <div className="left-side">
                    <img src={img} alt={"img"} />
                    <p>{item.price} за кг</p>
                </div>
                <div className="right-side">
                    <h6>{item.name} </h6>
                    <p id="collection">Сбор участников</p>
                    <p>Не достигнут порог закупки</p>
                    <p>{item.dueDate}</p>
                </div>
                {/* <p>{item.id} </p> */}


                {/* <button onClick={handleClick} >Open card</button> */}
            </div>
        </button>
        </div> 

    );
};

export default Card;