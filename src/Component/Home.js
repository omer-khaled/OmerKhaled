import image from '../Assets/personalImage.png';
import {motion} from "framer-motion"
function Home(){
    return(
        <motion.div className="Home container" 
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.5, ease:"easeOut"}}
        exit={{y:"-100%"}}
        >
            <i className="uil uil-html5 html"></i>
            <i className="uil uil-css3-simple css"></i>
            <i className="uil uil-java-script js"></i>
            <i className="bi bi-bootstrap-fill boot"></i>
            <i className="bi bi-filetype-scss scss"></i>
            <i className="uil uil-react react"></i>
            <motion.div
            initial={{x:"-200%"}}
            animate={{x:"0%"}}
            transition={{delay:0.5,duration:0.5, ease:"easeOut"}}
            className="links"data-aos="fade-right" data-aos-duration="1500">
                <a href="https://www.linkedin.com/in/omer-khaled-3b6bab223/"><i className="uil uil-linkedin-alt"></i></a>
                <a href="https://github.com/omer-khaled"><i className="uil uil-github-alt"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100038961690853&mibextid=ZbWKwL"><i className="uil uil-facebook-f"></i></a>
            </motion.div>
            <div className="info" data-aos="flip-down" data-aos-duration="1500">
                <h1>Hi, I'am Omer khaled</h1>
                <h4>Frontend react dev</h4>
                <p>High level experience in web design and developmetn knowledge, producing quality work</p>
                <a className="primary" href='omer-khaled.pdf' download="Resume.pdf">
                    <button className='btn primary'>
                        Download c.v
                    </button>
                </a>
            </div>
            <motion.div
            initial={{x:"200%"}}
            animate={{x:"0%"}}
            transition={{delay:0.5,duration:0.5, ease:"easeOut"}} 
            className="personal-image" data-aos="fade-left" data-aos-duration="1500">    
                <div>
                    <img className='front' src={image} alt="personal" />
                </div>
            </motion.div>
        </motion.div>
    );
}
export default Home;