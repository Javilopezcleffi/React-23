import styles from "./Navbar.module.css"

import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <><div className= {styles.containerNavbar}>
      <Link to="/"> Galería Virtual</Link>
      <ul className= {styles.categories}>
<Link to="/">Limpiar filtros</Link>
<Link to="/category/pinturas">Pinturas</Link>
<Link to="/category/grabados">Grabados</Link>
 </ul>

<CartWidget/>
    </div>
</> 
 )
}

export default Navbar
