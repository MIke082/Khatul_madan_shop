import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    return (
        <div className="main-div-header">
            <div className="main-div-link">
                <Link to="/">Главная страница</Link>
                <Link to="/list">Создать акцию</Link>
                <Link to="/list">Мои акции</Link>
                <Link to="/list">Текущии акции</Link>
                {<Link to="/cart">Корзина</Link> ? '' : <Link to="/cart">Корзина</Link>}
            </div>
        </div>
    );
};

export default Header;