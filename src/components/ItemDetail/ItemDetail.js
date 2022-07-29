import React, {useState} from 'react';
import {useCartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {

    const [goToCart, setGoToCart] =useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product, quantity);
    }

    return (
            <div className="detail-container">
                <div className="detail-img-container">
                <img className='detail-img' src={product.img} alt={product.marca}/>
                </div>
                <div>
                    <div>
                        <div className="detail-info">
                            <div>
                            <h1>{product.marca}</h1>
                            <h2>{product.modelo}</h2>
                            </div>
                            <div>
                                <h3>${product.price}</h3>
                        </div>
                    </div>
                    <div>
                        <h4>Talles</h4>
                        <div className="detail-talles">
                            <span>31</span>
                            <span>32</span>
                            <span className="selected">33</span>
                            <span>34</span>
                            <span>35</span>
                            <span>36</span>
                        </div>
                    </div>
                    <div className="count-container">
                        {
                            goToCart
                            ? <Link className="finish-buy" to='/cart'>Finalizar compra</Link>
                            : <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                        }
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail