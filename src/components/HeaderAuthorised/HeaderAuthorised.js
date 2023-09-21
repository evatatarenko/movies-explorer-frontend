import logoHeader from '../../images/logo_header.png'; 
import { Link } from 'react-router-dom'; 
import iconMenu from '../../images/icon__COLOR_icon-main.svg';
import profileButton from '../../images/profile.svg'






function HeaderAuthorised() {

    return (
      <header className="headerAuthorised headerAuthorised_white">
        <div className="headerAuthorised__container">
        <Link to={'/'}><img src={logoHeader} alt="Логотип" className="headerAuthorised__logo"/></Link>
          <nav className="headerAuthorised__container-middle">
          <Link to={'/movies'} className={'headerAuthorised__link '}>{'Фильмы'}</Link>
          <Link to={'/saved-movies'} className={'headerAuthorised__link '}>{'Сохранённые фильмы'}</Link>
          <Link to={'/profile'}><img src={profileButton} alt="Аккаунт" className="headerAuthorised__button"/></Link>
          </nav>
        <button type="button" className="headerAuthorised__nav-mobile">
            <img src={iconMenu} alt="Иконка меню" className="headerAuthorised__icon-menu"/>
          </button>
          </div>
      </header>
    );
  }
  
  export default HeaderAuthorised;