import { Link } from 'react-router-dom';

function Result() {

    return (
      <main>
      <div className='result'>
      <h1 className='result__title'>404</h1>
      <p className='result__subtitle'>Страница не найдена</p>
      <Link to={'/'} className={'common-link common-link_red'}>{'Назад'}</Link>
      </div>
      </main>
    );
  }
    
  export default Result;