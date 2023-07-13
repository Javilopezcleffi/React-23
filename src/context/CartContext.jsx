// creo el contexto
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const agregarAlCarrito = (newProduct, quantity) => {
    //crear un nuevo objeto con los datos que recibimos
    const newObj = {
      ...newProduct,
      quantity,
    };
    // chequear si el producto ya está en el carrito
    if (isInCart(newObj.id)) {
      // si está, vamos a hacer un map y sumar las cantidades, así no duplicamos
      let newArray = cart.map((el) => {
        if (el.id === newObj.id) {
          el.quantity += newObj.quantity;
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(newArray));
      // si es un producto que no está en el carrito, lo va a agregar.
    } else {
      setCart([...cart, newObj]);
    }
  };

  const isInCart = (id) => {
    // 2
    let exist = cart.some((prod) => prod.id === id);
    return exist;
  };
  // limpiar el carrito
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  // borrar un producto
  const removeById = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
  };

  const getTotalQuantityById = (id) => {
    let producto = cart.find((prod) => prod.id === +id);
    return producto?.quantity;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };
  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    removeById,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export default CartContextProvider;
