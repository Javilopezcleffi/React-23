import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { Box, Grid } from "@mui/material";
import { BorderColor, BorderColorRounded } from "@mui/icons-material";

const Cart = ({ cart, limpiar, removeById, total }) => {
  return (
    <div>
      <Grid container spacing={6} p={2} mt={0}>
        <Grid item md={12} lg={6}>
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <Grid container spacing={3} sx={{ color: "gray" }}>
                  <Grid item lg={5}>
                    <img src={item.img} alt={item.title} />
                  </Grid>

                  <Grid item lg={5} mt={3} className="cart-item-info">
                    <h3>{item.title} </h3>
                    <h5>de {item.by} </h5>
                    <h4>{item.price}</h4>
                    <h4>Unidades: {item.quantity}</h4> <br />
                    <Button
                      sx={{
                        color: "#8b00ff",
                        border: 1,
                        borderColor: "#8b00ff",
                      }}
                      onClick={() => removeById(item.id)}
                    >
                      Eliminar
                    </Button>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
        <Grid
          item
          md={12}
          lg={4}
          sx={{ borderLeft: 1, borderColor: "#82ffa1" }}
          className="cart-info"
        >
          <h2>Tu carrito:</h2>
          <h3>Cantidad de productos: </h3>
          <h3>Precio total: {total}</h3>
          {cart.length > 0 ? (
            <div>
              <br />
              <Grid display={"flex"} gap={3}>
                <Link to="/checkout">
                  <Button
                    sx={{
                      my: "9px",
                      color: "#8b00ff",
                      border: 1,
                      borderColor: "#8b00ff",
                    }}
                    variant="contained, outlined"
                  >
                    Finalizar compra
                  </Button>
                </Link>
                <Button
                  onClick={limpiar}
                  sx={{
                    my: "9px",
                    color: "#8b00ff",
                    border: 1,
                    borderColor: "#8b00ff",
                  }}
                >
                  Vaciar carrito
                </Button>
              </Grid>
            </div>
          ) : (
            <Link to="/">
              <Button
                sx={{
                  my: "9px",
                  color: "#8b00ff",
                  border: 1,
                  borderColor: "#8b00ff",
                }}
              >
                Agrega productos
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
