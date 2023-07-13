import { useContext, useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseconfig";
import { collection, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelect] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc).then((res) => {
      setProductSelect({ ...res.data(), id: res.id });
    });
  }, [id]);

  return (
    <ProductDetail
      productSelected={productSelected}
    />
  );
};

export default ProductDetailContainer;
