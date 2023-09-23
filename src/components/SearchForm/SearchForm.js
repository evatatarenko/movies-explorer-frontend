
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
function SearchForm(){
    return(
<section className="searchForm">
      <form className="searchForm__form">
        <div className="searchForm__input-form">
        <input required id="name" name="name" type="text"  placeholder='Фильм' onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Фильм"} className="searchForm__input" />
        <button type="submit" className="searchForm__button-sbt" ></button>
        </div>
        <FilterCheckbox/>
      </form>
      </section>
    );
}

export default SearchForm;