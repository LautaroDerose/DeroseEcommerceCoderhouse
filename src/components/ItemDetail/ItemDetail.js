import React from 'react'
import './ItemDetail.css'
const ItemDetail = ({data}) => {
    return (
        <div className="detail-container">
            <div className="detail">
                <img className='detail-img' src={data.img} alt=""/>
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
