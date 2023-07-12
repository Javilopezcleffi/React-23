import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <div>
      <Link to="/carrito">
        <Badge
          badgeContent={totalItems}
          color="secondary"
          showZero
          sx={{
            width: "auto",
          }}
        >
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
