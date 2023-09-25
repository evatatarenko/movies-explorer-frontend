import imgUser from '../../images/user_img.svg'; 
import { Link } from 'react-router-dom'; 

function AboutMe() {

    return (
      <section className="section aboutMe" id='aboutMe'>
          <h2 className={'section__header'}>Студент</h2>
          <div className={'aboutMe__container-info'}>
          <div className={'aboutMe__container'}>
          <div className={'aboutMe__description'}>
          <h3 className={'aboutMe__header'}>Виталий</h3>
          <h4 className={'aboutMe__subtitle'}>Фронтенд-разработчик, 30 лет</h4>
          <p className={'aboutMe__text'}>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
         <Link to="https://github.com/evatatarenko" rel="noopener noreferrer" target="_blank" className="aboutMe__link">Github</Link>

</div>
</div>
      <img src={imgUser} alt="Портрет пользователя" className="aboutMe__img"/>
      </div> 
      </section>
    );
  }
  
  export default AboutMe;