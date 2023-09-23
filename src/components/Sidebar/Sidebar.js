import profileButton from '../../images/profile.svg'
import { Link } from 'react-router-dom'; 

function Sidebar ({setIsMenuOpen}){
    return(
<section className='sidebar'>
<div className='sidenav'>
<button type='button' className='sidebar__button-close' onClick={()=> setIsMenuOpen(false)}></button>
<nav className="sidenav__links">
<Link to={'/'} className={'sidebar__link'}>{'Главная'}</Link>
<Link to={'/movies'} className={'sidebar__link'}>{'Фильмы'}</Link>
<Link to={'/saved-movies'} className={'sidebar__link'}>{'Сохранённые фильмы'}</Link>
</nav>
<Link to={'/profile'}><img src={profileButton} alt="Аккаунт" className="headerAuthorised__button sidebar__button"/></Link>
</div>
</section>
    );
}

export default Sidebar;