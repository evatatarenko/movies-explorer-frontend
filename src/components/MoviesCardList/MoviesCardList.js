import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  return (
    <section className="moviesList">
      <div className="moviesCardList">
        {props.data.map((movie)=><MoviesCard key={movie.id} type={props.type} movie={movie} />)}

        
      </div>
    </section>

  );
}

export default MoviesCardList;