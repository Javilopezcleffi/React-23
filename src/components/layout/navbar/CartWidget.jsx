import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  return (
    <div>
     <Link to="/carrito">
      <ShoppingCartIcon color="red" size="30px"/>
<h6>3</h6>
    </Link>
    </div>
  )
}

export default CartWidget


