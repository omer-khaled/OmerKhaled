import image from '../Assets/about-user.png';
import {motion} from 'framer-motion';
function About(){
    return(
        <motion.div 
        initial={{y:"100%"}}
        animate={{y:"0"}}
        transition={{duration:0.5, ease:"easeOut"}}
        exit={{y:"-100%"}}
        className="About container">
            <h1>AboutMe</h1>
            <div className='info'>
                <motion.div
                initial={{x:"-150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.5,duration:0.5, ease:"easeOut"}} className='left'>
                    <div className='details'>
                        <div>
                            <p>01+</p>
                            <p>years experience</p>
                        </div>
                        <div>
                            <p>15+</p>
                            <p>Completed Projects</p>
                        </div>
                        <div>
                            <p>01+</p>
                            <p>Companies Worked</p>
                        </div>
                    </div>
                    <ul>
                        <li>web developer, with extensive knowledge.</li>
                        <li>less than one year of experience.</li>
                        <li>working in web technologies such bootstrap and react</li>
                        <li>student at cairo univercity in faculty of information technology.</li>
                    </ul>
                </motion.div>
                <div className='right'>
                    <img src={image} alt='personal_image'/>
                </div>
            </div>
        </motion.div>
    );
}
export default About;