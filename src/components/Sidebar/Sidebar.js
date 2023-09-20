import profileButton from '../../images/profile.svg'
import { Link } from 'react-router-dom'; 

function Sidebar (){
    return(
<section className='sidebar'>
<div className='sidenav'>
<button className='sidebar__button-close'></button>
<div class="sidenav__links">
<Link to={'/'} className={'sidebar__link'}>{'Главная'}</Link>
<Link to={'/movies'} className={'sidebar__link'}>{'Фильмы'}</Link>
<Link to={'/saved-movies'} className={'sidebar__link'}>{'Сохранённые фильмы'}</Link>
</div>
<Link to={'/profile'}><img src={profileButton} alt="Аккаунт" className="headerAuthorised__button sidebar__button"/></Link>
</div>
</section>
    );
}

export default Sidebar;