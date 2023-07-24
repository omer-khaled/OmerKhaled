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
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <p>15+</p>
                            <p>Completed Projects</p>
                        </div>
                        <div>
                            <p>01+</p>
                            <p>Companies Worked in</p>
                        </div>
                    </div>
                    <ul>
                        <li><p>Web developer, with extensive knowledge.</p></li>
                        <li><p>Having 1+ year of experience of developing end to end projects.</p></li>
                        <li><p>Working in web technologies such bootstrap and react</p></li>
                        <li><p>I am a computer science student at Cairo University.</p></li>
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