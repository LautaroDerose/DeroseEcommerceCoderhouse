import React, {useReducer, useState, useEffect} from 'react'
import './FavButton.css'
import { FaRegHeart } from 'react-icons/fa';

const initialState = {
    favorites:[]
}

const favoriteReducer = (state, action) => {
    switch(action.type) {
        case 'add_to_favorite':
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state
    }
}

const FavButton = ({id}) => {

    const [favorites, dispatch] = useReducer (favoriteReducer, initialState);

    const handleFav = favorite => {
        dispatch({type: 'add_to_favorite', payload: favorite })
    }

    return (
        <div>
            <div>
                {favorites.favorites.map(favorites=> (
                    <li key={favorites.id}>
                        {favorites.model}
                    </li>
                ))}
            </div>
            <div className="item--fav" key={favorites.id}>
            <button onClick={handleFav} className="btn-FavButton">
                <FaRegHeart className="FaRegHeart"/>
            </button>
        </div>
        </div>
    )
}

export default FavButton
