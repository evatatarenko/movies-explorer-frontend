import logoMain from '../../images/logo_main.svg'; 

function Promo() {

    return (
      <main>
      <section className="promo">
         <img src={logoMain} alt="Логотип практикума" className="promo__logo"/>
        <p className="promo__text">Учебный проект студента факультета Веб-разработки.</p>
    </section>
    </main>
    );
  }
  
  export default Promo;