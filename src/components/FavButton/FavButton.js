import React, {useState} from 'react'
import { AuthContext } from '../../context/AuthContext';

import { FaRegHeart } from 'react-icons/fa';


const FavButton = ({id}) => {

    // const [mostrar, setMostrar] = useState(false);
    // if (!mostrar) return <Home/>
    // alert (id)

    const handleFav = () => {
        alert(id);
    }

    // const addFav = useCallback(({id}) => {
    //         favService({id, mostrar})
    //         .then(favs => setFavs(favs))
    //     },[])



    return (
        <button onClick={handleFav}>
            <i className="FaRegHeart" role='img'><FaRegHeart/></i>
        </button>
    )
}

export default FavButton
