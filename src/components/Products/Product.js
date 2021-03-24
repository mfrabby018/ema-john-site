import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Product = (props) => {
    // console.log(props)
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="single_product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product_name c_l">{name}</h4>
                <p className="c_l"><small>by: {seller}</small></p>
                <p className="c_l">${price}</p>
                <p className="c_l"><small>only {stock} left in stock</small></p>
                <button className="c_l btn" 
                    onClick={() => props.handleAddProduct (props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;