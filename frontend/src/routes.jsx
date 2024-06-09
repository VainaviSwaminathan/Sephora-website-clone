import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/home'
import { Skincare } from './pages/skincare'
import { Haircare } from './pages/haircare'
import { Makeup } from './pages/makeup'
import { Fragrance } from './pages/fragrance'
import { BathAndBody } from './pages/bathAndBody'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/cart'
function AllRoutes() {

    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/makeup" element={<Makeup />} />
            <Route path="/skincare" element={<Skincare />} />
            <Route path="/haircare" element={<Haircare />} />
            <Route path="/fragrance" element={<Fragrance />} />
            <Route path="/bath-and-body" element={<BathAndBody />} />
            <Route path="/:category/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />

        </Routes>
    )


}

export { AllRoutes }