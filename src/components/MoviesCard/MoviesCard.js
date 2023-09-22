

function MoviesCard(props) {


  return(
    <main>
    <article className="moviesCard">
      <img src={props.movie.image} alt={props.movie.alt} className="moviesCard__image"  />
      <div className="moviesCard__title-block">
        <div className="moviesCard__likes">
          <h2 className="moviesCard__title">{props.movie.title}</h2>
          <button className={`${props.type==='saved'? "moviesCard__close-button":'moviesCard__saved'} `} type="button" ></button>
        </div>
        <p className="moviesCard__subtitle">{"1ч42м"}</p>
      </div>
    </article>
    </main>
  );
}

export default MoviesCard; 