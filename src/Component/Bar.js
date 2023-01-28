import { Link } from 'react-router-dom';
import '../sass/style.scss';
function Bar(){
    return(
        <div className="bar">
            <Link className='link' to={'/'}><i className="uil uil-home"></i></Link>
            <Link className='link' to={'/about'}><i className="uil uil-user-exclamation"></i></Link>
            <Link className='link' to={'/skills'}><i className="uil uil-setting"></i></Link>
            <Link className='link' to={'/portfolio'}><i className="uil uil-lightbulb-alt"></i></Link>
            <Link className='link' to={'/Contact'}><i className="uil uil-comment-medical"></i></Link>
        </div>
    );
}
export default Bar;