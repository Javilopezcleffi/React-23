import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Box } from "@mui/material";
import { menuNavigate } from "../../../routes/menuNavigate";

const Navbar = () => {
  return (
    <>
      <Box
        className={styles.containerNavbar}
        sx={{
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
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>

        <CartWidget />
      </Box>
    </>
  );
};

export default Navbar;
