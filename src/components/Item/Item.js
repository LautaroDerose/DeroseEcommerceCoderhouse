import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext';
import {FaRegBookmark, FaRegHeart, FaRegPaperPlane, FaShareAlt, FaTelegramPlane} from "react-icons/fa";
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css"
import {Link} from  'react-router-dom';
import FavButton from '../FavButton/FavButton';


const Item = ({product}) => {

    const [goToCart, setGoToCart] =useState(false);
    const {addProduct} = useCartContext();
    const {id, brand, model, image, price, stock, category} = product 

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product, quantity);

    
    // const onAdd = (quantity) => {
    //     console.log(`compraste ${quantity} unidades`);
    }

    return (
        <div className="body">
            <div className="card" >
                <div className="card-header">
                    <h3>{brand}</h3>
                    <p>{model}</p>
                    <div>
                    <span>{category}</span>
                    </div>

                </div>
                <div className="card-img-container">
                    <div className="card-img">
                        <img src={image} alt={brand}/>
                        <i className="FaRegHeart"><FaRegHeart/></i>
                    </div>
                    <div className="fav-btns">
                        <span className="fav-icons"><FavButton id={id} /></span>
                        <span className="fav-icons"><i><FaShareAlt/></i></span>
                        <span className="fav-icons"><i><FaRegPaperPlane/></i></span>
                        <span className="fav-icons"><i><FaRegBookmark/></i></span>
                    </div>
                </div>
                <div className="card-details">
                    <div className="price">
                        <p>Precio</p>
                        <strong>${price}</strong>
                    </div>
                    <div className="btn-detail">
                        <button>  <Link className="detail" to={`/detail/${id}`}>Ver detalle</Link></button>
                    </div>
                </div>
                <div className="cart-container">
                        {
                            goToCart
                            ? <button className="btn-onAdd"><Link className="finish-buy" to='/cart'>Finalizar compra</Link></button>
                            : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                        }
                    </div>
                {/* <div className="card-count">
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                </div> */}
                {/* <div className="card-footer">
                    <button>Comprar ahora</button>
                </div> */}
            </div>
        </div>
    )
}

export default Item
