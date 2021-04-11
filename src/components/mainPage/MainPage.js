import React from 'react';
import './MainPage.css';
import imgSale from '../../img/sale.png';
import newSale from '../../img/new-sale.png';
import buyers from '../../img/buyers.png';
import currentSale from '../../img/current-sale.png';
import newSalsettingsPaterne from '../../img/settings-patern.png';
import settingUser from '../../img/setting-user.png';
import { history } from '../history';

const MainPage = () => {


    return (
        <div className="main-div-mainPage">
            <div className="img-div">
               <button onClick={()=> alert('Временно не доступно')}><img src={newSale} alt={"newSale"}/></button> 

                <button onClick={()=> history.push('/list')}><img src={imgSale} alt={"sale"} /></button>

                <button onClick={()=> alert('Временно не доступно')}><img src={buyers} alt={"buyers"} /></button>
            </div>
            <div className="img-div text">
                <p>Создать акцию</p>
                <p className="text-my-sale">Мои акции</p>
                <p className="text-sale">Текущие акции</p>
            </div>
            <div className="img-div">
            <button onClick={()=> alert('Временно не доступно')}><img src={currentSale} alt={"currentSale"} /></button>

            <button onClick={()=> alert('Временно не доступно')}><img src={newSalsettingsPaterne} alt={"newSalsettingsPaterne"} /></button>

            <button onClick={()=> alert('Временно не доступно')}><img src={settingUser} alt={"settingUser"} /></button>
            </div>
            <div className="img-div text text-down">
                <p>Покупатели</p>
                <p className="text-settings">Настройка партнера</p>
                <p>Личная настройка</p>
            </div>
        </div>
    );
};

export default MainPage;