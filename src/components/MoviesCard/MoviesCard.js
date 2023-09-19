

function MoviesCard(props) {


  return(
    <article className="moviesCard">
      <img src={props.movie.image} alt={'Постер'} className="moviesCard__image"  />
      <div className="moviesCard__title-block">
        <div className="moviesCard__likes">
          <p className="moviesCard__title">{props.movie.title}</p>
          <button className={`${props.type==='saved'? "moviesCard__close-button":'moviesCard__saved'} `} type="button" ></button>
        </div>
        <p className="moviesCard__subtitle">{"1ч42м"}</p>
      </div>
    </article>
  );
}

export default MoviesCard; 