import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseconfig";
import { collection, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { agregarAlCarrito, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);
  console.log("la cantidad es: ", cantidad);
  
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <ProductDetail
      cantidad={cantidad}
      productSelected={productSelected}
      agregarAlCarrito={agregarAlCarrito}
      onAdd={onAdd}
    />
  );
};

export default ProductDetailContainer;
