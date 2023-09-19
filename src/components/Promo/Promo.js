import logoMain from '../../images/logo_main.svg'; 

function Promo() {

    return (
      <div className="promo">
         <img src={logoMain} alt="Логотип практикума" className="promo__logo"/>
        <p className="promo__text">Учебный проект студента факультета Веб-разработки.</p>
    </div>
    );
  }
  
  export default Promo;