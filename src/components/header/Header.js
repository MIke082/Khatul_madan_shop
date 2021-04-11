import React from 'react';
import { Link } from 'react-router-dom';
// import { history } from '../history';

const Header = (props) => {
    // const propsFromCard = props.location.state.card;

    // function handleClick() {
    //     history.push({
    //         pathname: "/itemCard",
    //         state: { card: propsFromCard }
    //     });
    // }
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                {/* <Link to="/">Carts</Link> */}
                {/* <Link to= "/basket"  onClick={()=> handleClick}  >Basket</Link> */}
            </div>
        </div>
    );
};

export default Header;