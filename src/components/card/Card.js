import React, { useState } from 'react';
import { history } from '../history';
import img from '../../img/img.jpg';
import './Card.css'
import Modal from '../modal/Modal';
import Header from '../header/Header';

const Card = ({ item, index }) => {
    const [modalActive, setModalActive] = useState(false);

    function handleClickgoBack() {
        setModalActive(false);
    }

    function handleClickToCart() {
        history.push({
            pathname: "/cart",
            state: { cart: item }
        })
    }

    const dateReverse = item.dueDate;
    const newdate = dateReverse.split("-").reverse().join("-");

    return (
        <div className="main-div">
            <button onClick={() => setModalActive(true)} >
                <div key={index} className="card-div">
                    <div className="left-side">
                        <img src={img} alt={"img"} />
                        <p>Цена:{item.price} ₪ за {item.measure}</p>
                    </div>
                    <div className="right-side">
                        <h6>{item.name} </h6>
                        <p id="collection">Сбор участников</p>
                        <p>Не достигнут порог закупки</p>
                        <p>{newdate} - Окончание приема заявок</p>
                    </div>

                    <Modal active={modalActive} setActive={setModalActive}>
                        <p>{item.supplier}</p>
                        <div className="card-div">
                            <div className="left-side">
                                <img src={img} alt={"img"} />
                                <p>Цена:{item.price} ₪ за {item.measure}</p>
                            </div>
                            <div className="right-side">
                                <h4>{item.name}</h4>
                                <p>Не достигнут порог закупки</p>
                                <p>При закупке клубом:</p>
                                <p>{newdate} - Окончание приема заявок</p>
                            </div>
                        </div>
                        <div className="btn">
                            <button onClick={handleClickgoBack}>Назад</button>
                            <button onClick={handleClickToCart}>Заказать</button>
                        </div>
                    </Modal>
                </div>
            </button>
        </div>
    );
};

export default Card;