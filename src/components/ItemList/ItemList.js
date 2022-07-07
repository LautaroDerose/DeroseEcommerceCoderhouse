import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({productList}) => {
    
    
    return (
        <div>
            {/* <h3>Lista de produtos</h3> */}
            <div className="gallery">
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap' }}>
                {productList.map((product)=><Item key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    )
}

export default ItemList