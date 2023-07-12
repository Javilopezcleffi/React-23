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

    agregarAlCarrito(data);
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
          <h5> {productSelected.description} </h5>
          <h5> Por {productSelected.by} </h5>
        </Card>
        <Box sx={{ maxWidth: 1 / 2 }}>
          {productSelected.stock > 0 ? (
            <ItemCount
              stock={productSelected.stock}
              initial={1}
              onAdd={onAdd}
            />
          ) : (
            <h4>no hay stock</h4>
          )}
        </Box>
      </Container>
    </>
  );
};

export default ProductDetail;
