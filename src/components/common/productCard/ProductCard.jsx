import { Rowing } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card
      sx={{
        height: 550,
        backgroundColor: "white",
        justifyContent: "center",
        display: "row",
        flex: {
          xs: "100%",
          sm: "calc(50% - 50px)",
          md: "calc(33% - 50px)",
          lg: "calc(25% - 50px)",
        },
      }}
    >
      <CardMedia
        sx={{ height: 300, mt: 0 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {elemento.title}
        </Typography>
        <Typography
          sx={{
            variant: "body1",
            color: "text.secondary",
            textAlign: "center",
            height: "70px",
            mx: -2,
          }}
        >
          {elemento.description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${elemento.price}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          direction: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button
            variant="contained, outlined"
            size="small"
            sx={{
              textTransform: "none",
              width: "50%",
              color: "#430089",
              position: "bottom",
            }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
