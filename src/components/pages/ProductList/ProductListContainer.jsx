import { useEffect, useState } from 'react';
import ProductList from './ProductList'
import { useParams } from 'react-router';
import {products} from "../../../productsMock"

const ProductListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryName} = useParams();

useEffect(() => {
    let productosFiltrados = products.filter(
        (product) => product.category ===categoryName
    );

    const tarea = new Promise ((res) => {
        res (categoryName ? productosFiltrados : products);
    }) 
        tarea
        .then((respuesta) => setItems (respuesta))
        .catch((rechazo) => {
            console.log(rechazo);
        });
    

}, [categoryName]);




return <ProductList items={items} />;
};

export default ProductListContainer
