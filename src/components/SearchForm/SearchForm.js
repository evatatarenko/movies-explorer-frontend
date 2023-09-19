
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm(){
    return(
<main className="searchForm">
      <form className="searchForm__form">
        <input required id="name" name="name" type="text" placeholder="Фильм" className="searchForm__input" />
        <button type="submit" className="searchForm__button-sbt" ></button>
      </form>
      <FilterCheckbox/>
      </main>
    );
}

export default SearchForm;