import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { getProd } from '../../mocks/fakeApi';
import ItemDetail from '../ItemDetail/ItemDetail'

    // const unProducto = {id:1, img:'fakeProducts/imagen-015.jpg', title: "ElProductoEnDetalle"};

export const ItemDetailContainer = () => {
    const[product,setProduct] = useState({});    
    const[loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        getProd(id)
            .then((res) =>{
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(()=> {
                setLoading(false);
            });
        }, [id]);            


    // useEffect(()=>{
    //     const getData = new Promise(resolve => {
    //         setTimeout(()=>{
    //             resolve(unProducto);
    //         }, 3000)
    //     });
    //     getData.then(res =>setData(res));
    // },[])

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                <ItemDetail product={product}/>
                </>
            )}
        </div>
    )
}

export default ItemDetailContainer
