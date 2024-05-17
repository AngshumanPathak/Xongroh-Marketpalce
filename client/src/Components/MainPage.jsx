import NavBar from "./NavBar"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Merchandise from "./pages/Merchandise"

export default function MainPage() {
    return (
        <div>
            <NavBar/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/merchandise" element={<Merchandise />} />
                </Routes>
           
        </div>
    )
}