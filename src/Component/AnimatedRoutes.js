import { Route, Routes,useLocation } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Protofolio from "./Protofolio";
import Skills from "./Skills";
import About from "./About";
import {AnimatePresence} from 'framer-motion';
function AnimatedRoutes(){
    const location = useLocation();
    return(
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/OmerKhaled/" element={<Home />}/>
                <Route path="/OmerKhaled/about" element={<About />} />
                <Route path="/OmerKhaled/skills" element={<Skills />}/>
                <Route path="/OmerKhaled/portfolio" element={<Protofolio />}/>
                <Route path="/OmerKhaled/Contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}
export default AnimatedRoutes;