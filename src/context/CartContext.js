import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    
    console.log('carrito:', cart);  

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity } : product
            }));
        }else {
            setCart([...cart, {...item, quantity}]);
        }
    }

    const clearCart = () => setCart([]);
    const isInCart = (id) => { return cart.find(product => product.id === id) ? true : false ; 
    const deleteProduct = (id) => setCart(cart.filter(product => product.id !== id));
}        
    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            // removeProduct,
            //Si no comento la linea de arriba la pagina sale en blanco, y me arroja el error: "Line 31:13:  'removeProduct' is not defined  no-undef  |  Search for the keywords to learn more about each error."
            addProduct,
            totalPrice,
            totalProducts,
            deleteProduct, 

            cart
        }}>    
            {children}
        </CartContext.Provider>    
    )
}

export default CartProvider
