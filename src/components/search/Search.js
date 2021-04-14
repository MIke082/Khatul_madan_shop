import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getProductCreator, searchProductCreator } from '../../store/action';

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
        <div>
            <div className="search">
                <input
                    type='text'
                    placeholder='Search'
                    onChange={(e)=> onChabge(e)}
                />
                <div className="btn">
                    <button onClick={searchProduct}>Search</button>
                </div>

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