import ProductListContainer from "../components/pages/ProductList/ProductListContainer";

export const menuRoutes = [

    {
        id: "home",
        path: "/",
        Element: ProductListContainer
    },

    {
        id: "carrito",
        path: "/carrito",
        Element: ProductListContainer
    },
    {
        id: "home",
        path: "/category/:id",
        Element: ProductListContainer
    }

]
