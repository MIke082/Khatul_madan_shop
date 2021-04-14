import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getProductCreator, searchProductCreator } from '../../store/action';
import './Seach.css';

const Search = (props) => {
    const [find, setFind] = useState({search: ''})

       const searchProduct = (e) => {
            e.preventDefault();
            props.getSearch(find.search)
        }

       function onChabge(e) {
        setFind({ search: e.target.value });
            props.getProduct();
        }

    return (
            <div className="search-main-div">
                <input
                    type='text'
                    placeholder='Поиск'
                    onChange={(e)=> onChabge(e)}
                />
                <div className="">
                    <button onClick={searchProduct}>Поиск</button>
                </div>

            </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSearch: (name) => {
            dispatch(searchProductCreator(name));
        },
        getProduct: () => {
            dispatch(getProductCreator())
        }
    }
}

export default connect(null, mapDispatchToProps)(Search);