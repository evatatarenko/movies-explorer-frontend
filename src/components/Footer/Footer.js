

function Footer(){
    return(
        <footer className='footer'>
            <h3 className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__info">
    <p className="footer__copyright">&copy; 2023</p>
    <ul className="footer__nav">
      <li className="footer__nav-item"><a href="https://practicum.yandex.ru/" rel="noopener noreferrer" target="_blank" className="footer__link">Яндекс.Практикум</a></li>
      <li className="footer__nav-item"><a href="https://github.com/" rel="noopener noreferrer" target="_blank" className="footer__link">Github</a></li>
    </ul>
    </div>

        </footer>
    );
}
export default Footer;