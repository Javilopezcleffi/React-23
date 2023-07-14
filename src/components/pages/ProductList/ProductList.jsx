import ProductCard from "../../common/productCard/comp2pc";
import "./ProductList.css";

const ProductList = ({ items }) => {
  return (
    <div className="cards-container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ProductList;
ser