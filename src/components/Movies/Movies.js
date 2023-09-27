import React  from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

import Img1 from '../../images/moviesPhoto.png';
import Img2 from '../../images/pic__COLOR_pic.png';
import Img3 from '../../images/pic__COLOR_pic(1).png';
import Img4 from '../../images/pic__COLOR_pic(2).png';
import Img5 from '../../images/pic__COLOR_pic(3).png';
import Img6 from '../../images/pic__COLOR_pic(4).png';
import Img7 from '../../images/pic__COLOR_pic(5).png';
import Img8 from '../../images/pic__COLOR_pic(6).png';
import Img9 from '../../images/pic__COLOR_pic(7).png';
import Img10 from '../../images/pic__COLOR_pic(8).png';
import Img11 from '../../images/pic__COLOR_pic(9).png';
import Img12 from '../../images/pic__COLOR_pic(10).png';
import Img13 from '../../images/pic__COLOR_pic(11).png';
import Img14 from '../../images/pic__COLOR_pic(12).png';
import Img15 from '../../images/pic__COLOR_pic(13).png';
import Img16 from '../../images/pic__COLOR_pic(14).png';

const savedData = [
    {
      title: "33 слова о дизайне",
      image: Img1,
      alt: 'Movie-1',
      id: 1,
    },
  
    {
      title: "33 слова о дизайне",
      image: Img2,
      alt: 'Movie-2',
      id: 2,
    },
  
    {
      title: "33 слова о дизайне",
      image: Img3,
      alt: 'Movie-3',
      id: 3,
    },
    {
      title: "33 слова о дизайне",
      image: Img4,
      alt: 'Movie-4',
      id: 4,
    },
    {
      title: "33 слова о дизайне",
      image: Img5,
      alt: 'Movie-5',
      id: 5,
    },
    {
      title: "33 слова о дизайне",
      image: Img6,
      alt: 'Movie-6',
      id: 6,
    },
    {
      title: "33 слова о дизайне",
      image: Img7,
      alt: 'Movie-7',
      id: 7,
    },
    {
      title: "33 слова о дизайне",
      image: Img8,
      alt: 'Movie-8',
      id: 8,
    },
    {
      title: "33 слова о дизайне",
      image: Img9,
      alt: 'Movie-9',
      id: 9,
    },
    {
      title: "33 слова о дизайне",
      image: Img10,
      alt: 'Movie-10',
      id: 10,
    },
    {
      title: "33 слова о дизайне",
      image: Img11,
      alt: 'Movie-11',
      id: 11,
    },
    {
      title: "33 слова о дизайне",
      image: Img12,
      alt: 'Movie-12',
      id: 12,
    },
    {
      title: "33 слова о дизайне",
      image: Img13,
      alt: 'Movie-13',
      id: 13,
    },
    {
      title: "33 слова о дизайне",
      image: Img14,
      alt: 'Movie-14',
      id: 14,
    },
    {
      title: "33 слова о дизайне",
      image: Img15,
      alt: 'Movie-15',
      id: 15,
    },
    {
      title: "33 слова о дизайне",
      image: Img16,
      alt: 'Movie-16',
      id: 16,
    },
  
    
  
  ]





function Movies() {
    return(
        <main>
      <SearchForm />
      <MoviesCardList data={savedData} />
      </main>
    );
}

export default Movies;