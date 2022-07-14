import React, {useContext} from 'react'
import {FaRegHeart, FaCheck} from "react-icons/fa";
import CartWidget from '../CartWidget/CartWidget';
import ItemCount2 from '../ItemCount2/ItemCount2';
import "./Item.css"
import {Link} from  'react-router-dom';


const Item = ({product}) => {


    const {id, marca, modelo, img, price, stock, category, description} = product 

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`);
    }

    return (
        <div className="body">
            <div className="card" >
                <div className="card-header">
                    <h3>{marca}</h3>
                    <p>{modelo}</p>
                    <span>{category}</span>
                </div>
                <div className="card-img">
                    <img src={img} alt={marca + modelo}/>
                    <i className="FaRegHeart"><FaRegHeart/></i>
                </div>
                <div className="card-details">
                    <div className="price">
                        <p>Precio</p>
                        <strong>${price}</strong>
                    </div>
                    <div className="btn-detail">
                        <button>  <Link className="detail" to={`/detail/${id}`}>Ver detalle</Link></button>
                        {/* to={`/detail/${id}`} */}
                    </div>
                </div>
                <div className="card-count">
                    <ItemCount2 initial={1} stock={stock} onAdd={onAdd} />
                </div>
                <div className="card-footer">
                    <button>Comprar ahora</button>
                </div>

                {/* <img src={img} className="" alt={product.name}></img>
                <div>
                    <p className="card-text">{name}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-stock">{stock}</p>
                </div> 
                <button>Ver mas</button> */}
            </div>
        </div>
    )
}

export default Item
