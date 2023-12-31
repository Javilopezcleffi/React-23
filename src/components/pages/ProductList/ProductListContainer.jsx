import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { GridLoader } from "react-spinners";

const ProductListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
      // productos filtrados
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
      // todos
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          margin: 3,
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GridLoader color="gray" />
      </div>
    );
  }

  return (
    <div>
      <ProductList items={items} />
    </div>
  );
};

export default ProductListContainer;
