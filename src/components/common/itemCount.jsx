import { Button, Container, Typography } from "@mui/material";
import { useCount } from "../hooks/useCount";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <Container
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "flex-start",
          width: "50%",
        }}
      >
        <Button
          sx={{ width: 1 / 3 }}
          variant="contained, outlined"
          onClick={decrement}
        >
          -
        </Button>

        <Typography variant="h6" sx={{ width: 1 / 3 }}>
          {count}
        </Typography>

        <Button
          sx={{ width: 1 / 3 }}
          variant="contained, outlined"
          onClick={increment}
        >
          +
        </Button>
      </Container>

      <Button
        sx={{ justifyContent: "center" }}
        variant="contained"
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </Button>
    </>
  );
};
