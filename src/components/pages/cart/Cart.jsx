import { Button } from "@mui/base";
import { Link } from "react-router-dom";
import React from "react";

const Cart = ({ cart, limpiar, removeById, total }) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h4>{item.price}</h4>
                  <h4>Unidades: {item.quantity}</h4>
                </div>
                <Button variant="contained" onClick={() => removeById(item.id)}>
                  Eliminar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: </h3>
          <h3>Precio total: {total}</h3>
          <h3>Descuento: </h3>
          <h3>Precio final: </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiar} variant="contained">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained">Finalizar compra</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained">Agrega productos</Button>
            </Link>
          )}

          <h1>El total del carrito es ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
