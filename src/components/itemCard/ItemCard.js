import React from 'react';
import img from '../../img/img.jpg';
import { history } from '../history';
import './ItemCard.css';

const ItemCard = (props) => {
    const card = props.location.state.card;

    function goBack() {
        window.history.back();
    }

    function handleClickToBasket() {
        history.push({
            pathname: "/basket",
            state: { basket: card }
        });
    }

    return (
            <div className="main-div-item">
                <p>{card.supplier}</p>
                <div className="card-div-item">
                    <div className="left-side-item">
                        <img src={img} alt={"img"} />
                        <p>{card.price} за {card.measure}</p>
                    </div>
                    <div className="right-side-item">
                        <h4>{card.name}</h4>
                        <p>Не достигнут порог закупки</p>
                        <p>При закупке клубом:</p>
                        <p>{card.price} {card.measure} </p>
                        <p>{card.dueDate}</p>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={goBack}>Назад</button>
                    <button onClick={handleClickToBasket}>Заказать</button>
                </div>
            </div>
    );
};

export default ItemCard;