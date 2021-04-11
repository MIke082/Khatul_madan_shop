import React, { useState } from 'react';
import './Cart.css';
import img from '../../img/img.jpg';
import Header from '../header/Header';


const Basket = (props) => {
    const [count, setCount] = useState(0);

    const basket = props.location.state.basket;
    const price = count * basket.price;

    function handleClickgoBack() {
        window.history.back();
    }

    return (
        <div className="header-basket">
            <Header />
            <h5>Корзина(1)</h5>
            <div className="main-div-basket" >
                <img src={img} alt={"img"} />
                <div className="product-div">
                    <h6>Наименование: {basket.name}</h6>
                    <p>Стоимость товара: {basket.price} ₪</p>
                    <input
                        placeholder='Введите количество товара:'
                        type="text"
                        name='count'
                        onChange={(e) => setCount(parseInt(e.target.value) ? parseInt(e.target.value) : alert('Введите число'))}
                    />
                    <div className="btn-counter">
                        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                        <button onClick={() => setCount(count + 1)}>+</button>
                        <p>Количесвто продукта: {count}</p>
                    </div>
                    <div>
                        <p>Сумма: {price ? price : 0} ₪</p>
                    </div>
                </div>
                <div className="btn-counter" >
                    <button style={{ color: "white", backgroundColor: "red" }} onClick={handleClickgoBack}>Отменить</button>
                    <button style={{ color: "white", backgroundColor: "green" }} onClick={() => alert('Спасибо за покупку')}>Оплатить</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;