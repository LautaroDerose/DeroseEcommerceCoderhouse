import React, {useState} from 'react'
import { AuthContext } from '../../context/AuthContext';

import { FaRegHeart } from 'react-icons/fa';


const FavButton = ({id}) => {

    const handleFav = () => {
        alert(id);
    }

    return (
        <button onClick={handleFav}>
            <i className="FaRegHeart" role='img'><FaRegHeart/></i>
        </button>
    )
}

export default FavButton
