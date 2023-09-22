function NavTab() {

  return (
    <main>
    <nav className="navTab">
      <ul className={'navTab__menu'}>
        <li><a href='#aboutProject' className="navTab__link">О проекте</a></li>
        <li><a href='#techs' className="navTab__link">Технологии</a></li>
        <li><a href='#aboutMe' className="navTab__link">Студент</a></li>
      </ul>
    </nav>
    </main>
  );
}

export default NavTab;