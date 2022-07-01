import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

    const unProducto = {id:1, img:'fakeProducts/imagen-015.jpg', title: "ElProductoEnDetalle"};

export const ItemDetailContainer = () => {
    const[data,setData] = useState({});

    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(unProducto);
            }, 3000)
        });
        getData.then(res =>setData(res));
    },[])

    return (
        <div>
            <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer
