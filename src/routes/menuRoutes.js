import CartContainer from "../components/pages/cart/CartContainer";
import ProductListContainer from "../components/pages/ProductList/ProductListContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import CheckoutContainer from "../components/pages/Checkout/CheckoutContainer";

export const menuRoutes = [

    {
        id: "home",
        path: "/",
        Element: ProductListContainer
    },

    {
        id: "carrito",
        path: "/carrito",
        Element: CartContainer
    },
    {
        id: "categories",
        path: "/category/:categoryName",
        Element: ProductListContainer
    },
    {
        id: "itemDetail",
        path: "/itemDetail/:id",
        Element: ProductDetailContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
]

