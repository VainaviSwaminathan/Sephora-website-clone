import { Routes, Route } from 'react-router-dom'
import { Home } from './components/home/home'
import { Skincare } from './components/skincare'
import { Haircare } from './components/haircare'
import { Fragrance } from './components/fragrance'
import { BathAndBody } from './components/bathAndBody'
import { Makeup } from './components/makeup'
function AllRoutes() {
    <Routes>
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/haircare" element={<Haircare />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/bath-and-body" element={<BathAndBody />} />

    </Routes>

}

export { AllRoutes }