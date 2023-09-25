function AboutProject() {

    return (
      <section className="section aboutProject" id='aboutProject'>
          <h2 className={'section__header'}>О проекте</h2>
          <ul className={'aboutProject__table'}>
              <li className={'aboutProject__table-items'}>
                  <h3 className={'aboutProject__table-title'}>Дипломный проект включал 5 этапов</h3>
                  <p className={'aboutProject__table-text'}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
              </li>
              <li className={'aboutProject__table-items'}>
                  <h3 className={'aboutProject__table-title'}>На выполнение диплома ушло 5 недель</h3>
                  <p className={'aboutProject__table-text'}> У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
              </li>
          </ul>
          <ul className={'aboutProject__table-progress'}>
                  <li className={'aboutProject__table-text-progress aboutProject__table-text-progress_green'}>1 неделя</li>
                  <li className={'aboutProject__table-text-progress aboutProject__table-text-progress_white'}>4 недели</li>
                  <li className={'aboutProject__table-text-progress'}>Back-end</li>
                  <li className={'aboutProject__table-text-progress'}> Front-end</li>
          </ul>
      </section>
    );
  }
  
  export default AboutProject;