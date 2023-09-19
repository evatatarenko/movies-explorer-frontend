import { Link } from 'react-router-dom'; 


function Profile() {

    return (
      <div className="profile" >
        <h1 className="welcome-title">Привет, Виталий!</h1>
        <form className="profile__form">
          <div className="profile__form-input profile__form-input_border">
            <label className="profile__form-text">{"Имя"}</label>
            <input required id="name" name="name" type="text" placeholder="Имя" className="profile__form-text profile__form-text_input"
              value={"Виталий"} />
          </div>
          <div className="profile__form-input">
            <label className="profile__form-text">{"E-mail"}</label>
            <input required id="email" name="email" type="email" placeholder="Email" className="profile__form-text profile__form-text_input"
              value={"pochta@yandex.ru"} />
          </div>
          </form>
          <div className="profile__button-container">
            <button type="submit" className="common-link" >Редактировать</button>
            <Link to={'/'} className={'common-link common-link_red'}>{'Выйти из аккаунта'}</Link>
          </div>
      </div>
    );
  }
    
  export default Profile;