import { ItemCount } from "../../common/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const ProductDetail = ({productSelected}) => {
  
    const { agregarAlCarrito, } = useContext(CartContext);
  
    const onAdd = (cantidad) => {

let data = {
...productSelected,
quantity: cantidad,
};

agregarAlCarrito();
  };
  
    return (
    <><div>
      <h2>
        {productSelected.title}
      </h2>
      <img src={productSelected.img} alt="" />
    </div>
    {productSelected.stock > 0 ? (
       <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
    ) : (
        <h3>No hay stock</h3>
    )}
    </>
  )
}

export default ProductDetail
