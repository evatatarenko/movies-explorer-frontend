

function Portfolio() {

    return (
      <section className="portfolio">
        <h3 className={'portfolio__header'}>Портфолио</h3>
        <div className={'portfolio__nav'}>
          <li className={'portfolio__nav-element portfolio__link-line'}>
            <h4 className={'portfolio__link'}>Статичный сайт</h4>
            <a href="https://github.com/evatatarenko/how-to-learn" rel="noopener noreferrer" target="_blank" className="portfolio__link">{'↗'}</a>
          </li>
          <li className={'portfolio__nav-element portfolio__link-line'}>
            <h4 className={'portfolio__link'}>Адаптивный сайт</h4>
            <a href=" https://evatatarenko.github.io/great-russia" rel="noopener noreferrer" target="_blank" className="portfolio__link">{'↗'}</a>
          </li>
          <li className={'portfolio__nav-element'}>
            <h4 className={'portfolio__link'}>Одностраничное приложение</h4>
            <a href="https://github.com/evatatarenko/react-mesto-api-full-gha" rel="noopener noreferrer" target="_blank" className="portfolio__link">{'↗'}</a>
          </li>
        </div>
      </section>
    );
  }
    
  export default Portfolio;