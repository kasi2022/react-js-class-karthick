import { Route, Routes } from "react-router-dom";
import Dashbord from "./compnets/pages/dashbord";
import Product from "./compnets/pages/product";
import Home from "./compnets/pages/home";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashbord />} />
                <Route path="/product" element={<Product />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    )
}

export default Routing;