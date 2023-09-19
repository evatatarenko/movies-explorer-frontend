import logoHeader from '../../images/logo_header.png'; 
import { Link } from 'react-router-dom'; 
import iconMenu from '../../images/icon__COLOR_icon-main.svg';



function HeaderAuthorised() {

    return (
      <header className="headerAuthorised headerAuthorised_white">
        <div className="headerAuthorised__container">
          <img src={logoHeader} alt="Логотип" className="headerAuthorised__logo"/>
          <div className="headerAuthorised__container-middle">
          <Link to={'/'} className={'headerAuthorised__link '}>{'Фильмы'}</Link>
          <Link to={'/'} className={'headerAuthorised__link '}>{'Сохранённые фильмы'}</Link>
            <button className="headerAuthorised__button"></button>
          </div>
        <button className="headerAuthorised__nav-mobile">
            <img src={iconMenu} alt="Иконка меню" className="headerAuthorised__icon-menu"/>
          </button>
          </div>
      </header>
    );
  }
  
  export default HeaderAuthorised;