import smalltumb from '../../images/smalltumb.svg'; 

function FilterCheckbox() {

  return (
    <main>
    <div className="filterCheckbox">
      <img src={smalltumb} alt="Тумблер" className="filterCheckbox__tumbler"/>
      <p className="filterCheckbox__title">{'Короткометражки'}</p>
    </div>
    </main>
  );
}

export default FilterCheckbox;