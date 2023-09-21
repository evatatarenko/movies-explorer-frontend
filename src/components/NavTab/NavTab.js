function NavTab() {

  return (
    <main>
    <nav className="navTab">
      <ul className={'navTab__menu'}>
        <li href='#aboutProject' className="navTab__link">О проекте</li>
        <li href='#techs' className="navTab__link">Технологии</li>
        <li href='#aboutMe' className="navTab__link">Студент</li>
      </ul>
    </nav>
    </main>
  );
}

export default NavTab;