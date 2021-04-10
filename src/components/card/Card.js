import React from 'react';
import { history } from '../history';
import img from '../../img/img.jpg';
import './Card.css'

const Card = ({ item, index }) => {

    function handleClick() {
        history.push({
            pathname: "/itemCard",
            state: { card: item}
        });
    }
    return (
        
        <div className="main-div">
            <button onClick={handleClick} >
                <div key={index} className="card-div">
                    <div className="left-side">
                        <img src={img} alt={"img"} />
                        <p>{item.price} за {item.measure}</p>
                    </div>
                    <div className="right-side">
                        <h6>{item.name} </h6>
                        <p id="collection">Сбор участников</p>
                        <p>Не достигнут порог закупки</p>
                        <p>{item.dueDate} - Окончание приема заявок</p>
                    </div>
                </div>
            </button>
        </div>
        
    );
};

export default Card;