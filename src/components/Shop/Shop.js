import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setproducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('Add product', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop_container">
            <div className="products_container">
                {
                    products.map(pd => <Product
                        handleAddProduct ={handleAddProduct}
                        product={pd}
                        ></Product>)
                }
            </div>
            <div className="cart_container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;