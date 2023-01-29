import { Link } from 'react-router-dom';
import '../sass/style.scss';
function Bar(){
    return(
        <div className="bar">
            <Link title={'Home'} className='link' to={'/'}>
                <i className="uil uil-home"></i>
                <p className='on-hover'>Home</p>
            </Link>
            <Link title={'Css'} className='link' to={'/about'}>
                <i className="uil uil-user-exclamation"></i>
                <p className='on-hover'>AboutMe</p>
            </Link>
            <Link title={'JS'} className='link' to={'/skills'}>
                <i className="uil uil-setting"></i>
                <p className='on-hover'>Skills</p>
            </Link>
            <Link title={'BootStrap'} className='link' to={'/portfolio'}>
                <i className="uil uil-lightbulb-alt"></i>
                <p className='on-hover'>portfolio</p>
            </Link>
            <Link title={'React'} className='link' to={'/Contact'}>
                <i className="uil uil-comment-medical"></i>
                <p className='on-hover'>Contact</p>
            </Link>
        </div>
    );
}
export default Bar;