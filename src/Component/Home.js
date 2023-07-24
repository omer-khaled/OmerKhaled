import image from '../Assets/personalImage.jpg';
import {motion} from "framer-motion"
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilHtml5 } from '@iconscout/react-unicons'
import { UilCss3Simple } from '@iconscout/react-unicons'
import { UilJavaScript } from '@iconscout/react-unicons'
import { UilReact } from '@iconscout/react-unicons'
function Home(){
    return(
        <motion.div className="Home container" 
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.5, ease:"easeOut"}}
        exit={{y:"-100%"}}
        >
            <UilHtml5 className="html"/>
            <UilCss3Simple className="css"/>
            <UilJavaScript className="js"/>
            <i className="bi bi-bootstrap-fill boot"></i>
            <i className="bi bi-filetype-scss scss"></i>
            <UilReact className="react"/>
            <motion.div 
            initial={{x:"-200%"}}
            animate={{x:"0%"}}
            transition={{delay:0.5,duration:0.5, ease:"easeOut"}}
            className="links"data-aos="fade-right" data-aos-duration="1500">
                <a href="https://www.linkedin.com/in/omer-khaled-3b6bab223/" className='mx-0'><UilLinkedinAlt/></a>
                <a href="https://github.com/omer-khaled" className='mx-2'><UilGithubAlt/></a>
                <a href="https://www.facebook.com/profile.php?id=100038961690853&mibextid=ZbWKwL" className='mx-0'><UilFacebookF/></a>
            </motion.div>
            <div className="info" data-aos="flip-down" data-aos-duration="1500">
                <h1>Hi, I'am Omer khaled</h1>
                <h4>Frontend <span className='primary-color'>React</span> Developer</h4>
                <p>
                    I am interested in web development and software engineering and can design and
                    implement user interface components for JavaScript-based web applications.
                </p>
                <a className="primary" href='omer-khaled.pdf' download="Resume.pdf">
                    <button className='btn primary'>
                        Download cv
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