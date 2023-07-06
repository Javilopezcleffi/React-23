import { ItemCount } from "../../common/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Box, Card, CardMedia } from "@mui/material";
import { Container } from "@mui/system";

const ProductDetail = ({ productSelected }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito();
  };

  return (
    <>
      <Container sx={{ flexDirection: "row", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 1 / 2 }}>
          <CardMedia
            component="img"
            height="50%"
            image={productSelected.img}
            alt={productSelected.title}
          />
          <h2>{productSelected.title}</h2>
        </Card>
        <Box sx={{ maxWidth: 1 / 2 }}>
          {productSelected.stock > 0 ? (
            <ItemCount
              stock={productSelected.stock}
              initial={1}
              onAdd={onAdd}
            />
          ) : (
            <h3>No hay stock</h3>
          )}
        </Box>
      </Container>
    </>
  );
};

export default ProductDetail;
