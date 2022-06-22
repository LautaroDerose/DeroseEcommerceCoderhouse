import React from 'react'
import "./Styles/ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="landing">
            
            <div>
                <h1 className="greeting-title">WELCOME</h1>

            </div>
            <span className="greeting-subtitle">{greeting}</span>
        </div>
    )
}

export default ItemListContainer
