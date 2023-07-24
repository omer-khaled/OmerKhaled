import { Link } from 'react-router-dom';
import '../sass/style.scss';
import { UilHome } from '@iconscout/react-unicons'
import { UilUserExclamation } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'
import { UilLightbulbAlt } from '@iconscout/react-unicons'
import { UilCommentMedical } from '@iconscout/react-unicons'
function Bar(){
    return(
        <div className="bar">
            <Link title={'Home'} className='link d-flex flex-column align-items-center' to={'/OmerKhaled/'}>
                <UilHome /> 
                <span>Home</span>
            </Link>
            <Link title={'Css'} className='link d-flex flex-column align-items-center' to={'/OmerKhaled/about'}>
                <UilUserExclamation />
                <span>AboutMe</span>
            </Link>
            <Link title={'JS'} className='link d-flex flex-column align-items-center' to={'/OmerKhaled/skills'}>
                <UilSetting />
                <span>Skills</span>
            </Link>
            <Link title={'BootStrap'} className='link d-flex flex-column align-items-center' to={'/OmerKhaled/portfolio'}>
                <UilLightbulbAlt />
                <span>portfolio</span>
            </Link>
            <Link title={'React'} className='link d-flex flex-column align-items-center' to={'/OmerKhaled/Contact'}>
                <UilCommentMedical />
                <span>Contact</span>
            </Link>
        </div>
    );
}
export default Bar;