import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({products}) => {
    
    return (
        <div>
            <div className="gallery">
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap' }}>
                {products.map((product)=><Item key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    )
}

export default ItemList