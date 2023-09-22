import logoHeader from '../../images/logo__header.svg'; 
import { Link } from 'react-router-dom'; 

function Header() {

    return (
      <header className="header">
        <div className="header__container">
          <img src={logoHeader} alt="Логотип" className="header__logo"/>
          <nav className="header__container-right">
          <Link to={'/signup'} className={'header__link header__link_reg'}>{'Регистрация'}</Link>
            <button type="button" className="header__button"><Link to={'/signin'} className='header__link'>Войти</Link></button>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;