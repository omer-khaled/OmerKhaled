import { useState } from 'react';
import concate from '../Assets/Contact us-amico.png';
import {motion} from 'framer-motion';
import emailjs from 'emailjs-com';
function Contact(){
    let [name,Setname] = useState('');
    let [email,Setemail] = useState('');
    let [phone,Setphone] = useState('');
    let [massage,Setmassage] = useState('');
    const sendmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_b5donvn','template_6kb7jpo',e.target,'PxgxJdodGl9U7Rjac').then(res=>{
            Setname('');
            Setemail('');
            Setphone('');
            Setmassage('');
        }).catch(error=>console.log(error));
    }
    return(
    <motion.div 
    initial={{y:"100%"}}
    animate={{y:"0"}}
    transition={{duration:0.5, ease:"easeOut"}}
    exit={{y:"-100%"}}
    className="contact container">
        <h1>Contact</h1>
        <div className='info'>
            <motion.div
                initial={{x:"-150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.4,duration:0.5, ease:"easeOut"}}
                className="right">
                <form onSubmit={(e)=>{
                        sendmail(e);
                    }}>
                    <input type={'text'} value={name} name="name" className='form-control' placeholder='Your Name' onInput={(e)=>{
                            Setname(e.target.value);
                    }}></input>
                    <input type={'email'} value={email} name="user_email" className='form-control' placeholder='Your Email' onInput={(e)=>{
                            Setemail(e.target.value);
                    }}></input>
                    <input type={'phone'} value={phone} name="phone" className='form-control' placeholder='Your PhoneNumber' onInput={(e)=>{
                            Setphone(e.target.value);
                    }}></input>
                    <textarea type={'text'} value={massage} name="message" className='form-control' placeholder='Your Massage' onInput={(e)=>{
                            Setmassage(e.target.value);
                    }}></textarea>
                    <button type={'submit'} className='btn btn-primary' >Send</button>
                </form>
            </motion.div>
            <motion.div
                initial={{x:"150%"}}
                animate={{x:"0%"}}
                transition={{delay:0.4,duration:0.5, ease:"easeOut"}} className="left">
                <img src={concate} alt='contact'/>
            </motion.div>
        </div>
    </motion.div>
    );
}
export default Contact;