import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Box } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

const Navbar = () => {
  return (
    <>
      <Box
        className={styles.containerNavbar}
        sx={{
          width: "100%",
          height: "auto",
          background: "linear-gradient(to right, #430089, #82ffa1)",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: "white",
          borderBottom: 3,
          borderColor: "white",
        }}
      >
        <Box sx={{ fontWeight: "bold" }}>
          <Link to="/"> Galería Virtual</Link>
        </Box>
        <ul className={styles.categories}>
          <Link to="/">Todos</Link>
          <Link to="/category/pinturas">Pinturas</Link>
          <Link to="/category/grabados">Grabados</Link>
        </ul>

        <CartWidget />
      </Box>
    </>
  );
};

export default Navbar;
