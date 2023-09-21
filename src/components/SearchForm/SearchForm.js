
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm(){
    return(
<main>
<section className="searchForm">
      <form className="searchForm__form">
        <input required id="name" name="name" type="text" placeholder="Фильм" className="searchForm__input" />
        <button type="submit" className="searchForm__button-sbt" ></button>
        <FilterCheckbox/>
      </form>
      </section>
      </main>
    );
}

export default SearchForm;