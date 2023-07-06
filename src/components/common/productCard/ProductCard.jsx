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
        width: 1 / 4,
        height: 550,
        backgroundColor: "white",
        justifyContent: "center",
      }}
    >
      <CardMedia
        sx={{ height: 300, mt: 2 }}
        image={elemento.img}
        title={elemento.title}
      />
      <CardContent sx={{ height: 150 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {elemento.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {elemento.description}
        </Typography>
        <Typography variant="subtitle1" textAlign={"center"}>
          ${elemento.price}.-
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/itemDetail/${elemento.id}`}>
          <Button
            variant="contained, outlined"
            size="small"
            sx={{ textTransform: "none", width: "50%" }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
