import { Badge } from "@mui/icons-material"
import {BsFillCartCheckFill} from "react-icons/bs"
import styles from "./Navbar.module.css"

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <><div className= {styles.containerNavbar}>
      <Link to="/"> Galería Virtual</Link>
      <ul className= {styles.categories}>
<Link to="/">Limpiar filtros</Link>
<Link to="/category/pinturas">Pinturas</Link>
<Link to="/category/grabados">Grabados</Link>
 </ul>

<Link to="/carrito">
  <Badge badgeContent={3} color="secondary">
    <BsFillCartCheckFill size="30px" />
  </Badge>
</Link>
    </div>
</> 
 )
}

export default Navbar
