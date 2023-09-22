import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo__header.svg';

function Register() {

  return (
    <main>
    <section className='login'>
    <div className='login__header'>
      <Link to={'/'}><img src={logoHeader} alt="Логотип пользователя" className="login__logo"/></Link>
      <h1 className="welcome-title welcome-title_login">Добро пожаловать!</h1>
      </div>
      <form className="login__form">
        <div className="login__form-input">
          <label className="login__label-text">{"Имя"}</label>
          <input required id="name" name="name" type="text" placeholder="Имя" className="login__input-text"
            value={"Виталий"} minLength="2" maxLength="30" />
        </div>
        <div className="login__form-input">
          <label className="login__label-text">{"Email"}</label>
          <input required id="email" name="email" type="email" placeholder="Email" className="login__input-text"
            value={"pochta@yandex.ru"} minLength="2" maxLength="30" />
        </div>
        <div className="login__form-input">
          <label className="login__label-text">{"Пароль"}</label>
          <input required id="password" name="password" type="password" placeholder="Пароль" className="login__input-text"
            value={"Виталий"} minLength="2" maxLength="30" />
        </div>
        <button type="submit" className="login__button" >Зарегистрироваться</button>
      </form>
      <div className="login__link-container">
        <p className="common-link common-link_grey">Уже зарегистрированы?</p>
        <Link to={'/signin'} className={'common-link common-link_orange'}>{'Войти'}</Link>
      </div>
      </section>
      </main>
  );
}
  
export default Register;