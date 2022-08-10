import React, {useState} from 'react';
import {useCartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {

    const [goToCart, setGoToCart] =useState(false);
    const {addProduct} = useCartContext();
    const {id, brand, image, price, stock, model, category, description} = product 

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product, quantity);
    }

    return (
            <div className="detail-container">
                <div className="detail-img-container">
                <img className='detail-img' src={image} alt={brand}/>
                </div>
                
                    <div className="detail-info-container">
                        <div className="detail-info">
                            <div>
                            <h1>{brand}</h1>
                            <h2>{model}</h2>
                            {/* <h3>{category}</h3> */}
                            <p>{description}</p>
                            <h3>${price}</h3>
                            </div>
                            
                                
                            
                        </div>
                    <div>
                        {/* <h4>Talles</h4>
                        <div className="detail-talles">
                            <span>31</span>
                            <span>32</span>
                            <span className="selected">33</span>
                            <span>34</span>
                            <span>35</span>
                            <span>36</span>
                        </div> */}
                    </div>
                    <div className="count-container">
                        {
                            goToCart
                            ? <button className="btn-onAdd"><Link className="finish-buy" to='/cart'>Finalizar compra</Link></button>
                            : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                        }
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail