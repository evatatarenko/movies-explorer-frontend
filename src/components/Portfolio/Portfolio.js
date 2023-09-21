import { Link } from 'react-router-dom'; 

function Portfolio() {

    return (
      <main>
      <section className="portfolio">
        <h3 className={'portfolio__header'}>Портфолио</h3>
        <div className={'portfolio__nav'}>
          <li className={'portfolio__nav-element portfolio__link-line'}>
            <h4 className={'portfolio__link'}>Статичный сайт</h4>
            <Link to={'https://github.com/evatatarenko/how-to-learn'} className={'portfolio__link'}>{'↗'}</Link>
          </li>
          <li className={'portfolio__nav-element portfolio__link-line'}>
            <h4 className={'portfolio__link'}>Адаптивный сайт</h4>
            <Link to={'https://evatatarenko.github.io/great-russia'} className={'portfolio__link'}>{'↗'}</Link>
          </li>
          <li className={'portfolio__nav-element'}>
            <h4 className={'portfolio__link'}>Одностраничное приложение</h4>
            <Link to={'https://github.com/evatatarenko/react-mesto-api-full-gha'} className={'portfolio__link'}>{'↗'}</Link>
          </li>
        </div>
      </section>
      </main>
    );
  }
  <Link to={'/signup'} className={'header__link header__link_reg'}>{'Регистрация'}</Link>
    
  export default Portfolio;