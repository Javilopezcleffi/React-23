import { createContext, useState } from "react";

export const CartContext = createContext()

const cartContextProvider = ({ children }) => {

const [cart, setCart]= useState ([])

const agregarAlCarrito = ( newProduct )=>{
    
    let exist = (newProduct.id);
    if (exist) {
        let newArray = cart.map(product => {})
     if(product.id === newProduct.id){
    return { ...product, quantity: product.quantity + newProduct.quantity}
    }
    }else {
        setCart([...cart, newProduct])
    }
}
const isInCart = (id)=> {
   let exist =  cart.some(prod => prod.id ===id)
return exist
};

const clearCart =()=>{
    setCart([])
}

const getTotalQuantityById = (id)=>{
    let producto = cart.find( prod => prod.id ===id)
    return producto?.quantity 
}

const removeById =(id)=>{
    let newArray = cart.filter ((product)=> product.id !== id)
    setCart( newArray)
}
let data = {
   cart: cart,
   agregarAlCarrito,
   clearCart,
   removeById,
   getTotalQuantityById
}

    return <CartContext.Provider value= {{data}}> {children}

    </CartContext.Provider>
};
export default cartContextProvider;