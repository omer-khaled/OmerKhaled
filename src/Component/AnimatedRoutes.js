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
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />}/>
                <Route path="/portfolio" element={<Protofolio />}/>
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
}
export default AnimatedRoutes;