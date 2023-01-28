import {motion} from 'framer-motion';
function Skills(){
    return(        
        <motion.div 
        initial={{y:"100%"}}
        animate={{y:"0"}}
        transition={{duration:0.5, ease:"easeOut"}}
        exit={{y:"-100%"}}
        className="skills container">
            <h1>Skills</h1>
            <div className='info'>
                <motion.div
                initial={{x:"-150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.1,duration:0.5, ease:"easeOut"}}>
                    {/* <div className='icon'> */}
                        <i className="uil uil-html5"></i>
                        {/* <p className='html'>HTML</p> */}
                    {/* </div> */}
                    <div className="progress">
                        <div className="progress-bar progress-bar-animated progress-bar-striped bg-primary" role="progressbar" style={{'width':'85%',}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.1,duration:0.5, ease:"easeOut"}}>
                    {/* <div className='icon'> */}
                        <i className="uil uil-css3-simple css"></i>
                        {/* <p className='css'>Css</p> */}
                    {/* </div> */}
                    <div className="progress">
                        <div className="css progress-bar-animated progress-bar progress-bar-striped bg-info" role="progressbar" style={{'width':'80%',}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"-150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.1,duration:0.5, ease:"easeOut"}}>
                    {/* <div className='icon'> */}
                        <i className="uil uil-java-script js"></i>
                        {/* <p className='js'>JS</p> */}
                    {/* </div> */}
                    <div className="progress">
                        <div className="js progress-bar-animated progress-bar progress-bar-striped bg-info" role="progressbar" style={{'width':'70%',}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.1,duration:0.5, ease:"easeOut"}}>
                    {/* <div className='icon'> */}
                        <i className="bi bi-bootstrap-fill boot"></i>
                        {/* <p className='boot'>bootstrap</p> */}
                    {/* </div> */}
                    <div className="progress">
                        <div className="boot progress-bar-animated progress-bar progress-bar-striped bg-info" role="progressbar" style={{'width':'75%',}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"-150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.1,duration:0.5, ease:"easeOut"}}>
                    {/* <div className='icon'> */}
                        <i className="bi bi-filetype-scss scss"></i>
                        {/* <p className='scss'>Scss</p> */}
                    {/* </div> */}
                    <div className="progress">
                        <div className="scss progress-bar-animated progress-bar progress-bar-striped bg-info" role="progressbar" style={{'width':'80%',}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </motion.div>
                <motion.div
                initial={{x:"150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.1,duration:0.5, ease:"easeOut"}}>
                    {/* <div className='icon'> */}
                        <i className="uil uil-react react"></i>
                        {/* <p className='react'>React</p> */}
                    {/* </div> */}
                    <div className="progress">
                        <div className="react progress-bar-animated progress-bar progress-bar-striped bg-info" role="progressbar" style={{'width':'65%',}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
export default Skills;