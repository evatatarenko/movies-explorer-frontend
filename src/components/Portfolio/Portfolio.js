import { Link } from 'react-router-dom'; 

function Portfolio() {

    return (
      <section className="portfolio">
        <h3 className={'portfolio__header'}>Портфолио</h3>
        <ul className={'portfolio__nav'}>
          <li className={'portfolio__nav-element portfolio__link-line'}>
          <Link to={'https://evatatarenko.github.io/great-russia'} className={'portfolio__link'}><h4 className={'portfolio__link-item'}>Статичный сайт</h4><p className={'portfolio__link-item'}>{'↗'}</p></Link>
          </li>
          <li className={'portfolio__nav-element portfolio__link-line'}>
          <Link to={'https://evatatarenko.github.io/great-russia'} className={'portfolio__link'}><h4 className={'portfolio__link-item'}>Адаптивный сайт</h4><p className={'portfolio__link-item'}>{'↗'}</p></Link>
          </li>
          <li className={'portfolio__nav-element'}>
          <Link to={'https://evatatarenko.github.io/great-russia'} className={'portfolio__link'}><h4 className={'portfolio__link-item'}>Одностраничное приложение</h4><p className={'portfolio__link-item'}>{'↗'}</p></Link>
          </li>
        </ul>
      </section>
    );
  }
  <Link to={'/signup'} className={'header__link header__link_reg'}>{'Регистрация'}</Link>
    
  export default Portfolio;