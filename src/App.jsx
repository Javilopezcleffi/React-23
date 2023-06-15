import './App.css'
import Layout from './components/layout/Layout'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { menuRoutes } from './routes/menuRoutes'
import CartContextProvider from './context/CartContext'

const App = () => {

  return (
   <BrowserRouter>
   <CartContextProvider>
   <Routes>
    <Route element={<Layout/>}>
{menuRoutes.map(({id, path, Element}) => (
    <Route key={id} path={path} element={<Element/>} />
  )
  )
}
    </Route>
   </Routes>
   </CartContextProvider>
   </BrowserRouter>
   

  )
}

export default App
