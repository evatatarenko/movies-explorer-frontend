function Techs() {

    return (
      <main>
      <section className='techs' id='techs'>
        <h2 className={'section__header'}>Технологии</h2>
        <h3 className={'techs__header'}>7 технологий</h3>
        <p className={'techs__description'}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className={'techs__table'}>
      <article className={'techs__table_article'}>
        <p className={'techs__table_text'}>HTML</p>
      </article>
      <article className={'techs__table_article'}>
        <p className={'techs__table_text'}>CSS</p>
      </article>
      <article className={'techs__table_article'}>
        <p className={'techs__table_text'}>JS</p>
      </article>
      <article className={'techs__table_article'}>
        <p className={'techs__table_text'}>React</p>
      </article>
      <article className={'techs__table_article'}>
        <p className={'techs__table_text'}>Git</p>
      </article>
      <article className={'techs__table_article'}>
        <p className={'techs__table_text'}>Express.js</p>
      </article>
      <article className={'techs__table_article'}>
        <p className={'techs__table_text'}>mongoDB</p>
      </article>
    </div>
      </section>
      </main>
);
  }
  
  export default Techs;