import comerce from '../Assets/E-comerce.png';
import noteapp from '../Assets/NoteApp.png';
import movie from '../Assets/movies.png';
import social from '../Assets/socialmedia.png';
import pralineco from '../Assets/pralineco.png';
import newlyweds from '../Assets/newlyweds.png';
import AJIL from '../Assets/AJIL.png';
import Crud from '../Assets/Crud.png';
import Smart_manager from '../Assets/Smart_manager.png';
import OMCoding from '../Assets/OMCoding.png';
import delivery_sass from '../Assets/delivery_sass.png';
import food from '../Assets/food.png';
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from 'framer-motion';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination,EffectCoverflow } from "swiper";
function Protofolio(){
    return(
            <motion.div 
            initial={{y:"100%"}}
            animate={{y:"0"}}
            transition={{duration:0.3, ease:"easeOut"}}
            exit={{y:"-100%"}}
            className="Protofolio container">
            <h1>Protofolio</h1>
            <div className='info'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card">
                            <img src={comerce} alt='card_image'/>
                            <h3 className='c'>E-commerce</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/E-commerec">
                                    <button className="btn btn-c">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/E-commerec/">
                                    <button className="btn btn-c">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={social} alt='card_image'/>
                            <h3 className='soc'>Social Media</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/social">
                                    <button className="btn btn-soc">
                                        GitHub
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={movie} alt='card_image'/>
                            <h3 className='mov'>Movies</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/movies">
                                    <button className="btn btn-mov">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/movies/">
                                    <button className="btn btn-mov">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={noteapp} alt='card_image'/>
                            <h3 className='not'>NoteApp</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/NoteApp">
                                    <button className="btn btn-not">
                                        GitHub
                                    </button>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={pralineco} alt='card_image'/>
                            <h3 className='p'>pralineco</h3>
                            <div className="links">
                                <a target="_blank" href="https://pralineco.com/">
                                    <button className="btn btn-p">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://pralineco.com/">
                                    <button className="btn btn-p">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                                <img src={newlyweds} alt='card_image'/>
                                <h3 className='n'>newlyweds</h3>
                                <div className="links">
                                    <a target="_blank" href="https://newlyweds-jewelry.com/">
                                        <button className="btn btn-n">
                                            GitHub
                                        </button>
                                    </a>
                                    <a target="_blank" href="https://newlyweds-jewelry.com/">
                                        <button className="btn btn-n">
                                            Demo
                                        </button>
                                    </a>
                                </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={AJIL} alt='card_image'/>
                            <h3 className='a'>AJIL</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/AJIL">
                                    <button className="btn btn-a">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/AJIL/">
                                    <button className="btn btn-a">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={Crud} alt='card_image'/>
                            <h3 className='cu'>Crud</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/Crud">
                                    <button className="btn btn-cu">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/Crud/">
                                    <button className="btn btn-cu">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={Smart_manager} alt='card_image'/>
                            <h3 className='s'>Smart_manager</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/Smart_manager">
                                    <button className="btn btn-s">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/Smart_manager/">
                                    <button className="btn btn-s">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={OMCoding} alt='card_image'/>
                            <h3 className='a'>OMCoding</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/OMCoding">
                                    <button className="btn btn-primary">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/OMCoding/">
                                    <button className="btn btn-primary">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={delivery_sass} alt='card_image'/>
                            <h3 className='sa'>delivery_sass</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/delivery_sass">
                                    <button className="btn btn-sa">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/delivery_sass/">
                                    <button className="btn btn-sa">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <img src={food} alt='card_image'/>
                            <h3 className='f'>food</h3>
                            <div className="links">
                                <a target="_blank" href="https://github.com/omer-khaled/food">
                                    <button className="btn btn-f">
                                        GitHub
                                    </button>
                                </a>
                                <a target="_blank" href="https://omer-khaled.github.io/food/">
                                    <button className="btn btn-f">
                                        Demo
                                    </button>
                                </a>
                            </div>
                        </div> 
                    </SwiperSlide>
                </Swiper>
            </div>
        </motion.div>
    );
}
export default Protofolio;