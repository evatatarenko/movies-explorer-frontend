import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

  return (
    <section className="moviesList">
      <div className="moviesCardList">
        {props.data.map((movie)=><MoviesCard type={props.type} movie={movie}/>)}

        
      </div>
    </section>

  );
}

export default MoviesCardList;