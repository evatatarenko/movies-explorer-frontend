import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import NavTab from './components/NavTab/NavTab';
import AboutProject from './components/AboutProject/AboutProject';
import Techs from './components/Techs/Techs';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import HeaderAuthorised from './components/HeaderAuthorised/HeaderAuthorised';
import SearchForm from './components/SearchForm/SearchForm';
import MoviesCardList from './components/MoviesCardList/MoviesCardList';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import More from './components/More/More';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Sidebar from './components/Sidebar/Sidebar';



import Img1 from './images/moviesPhoto.png';
import Img2 from './images/pic__COLOR_pic.png';
import Img3 from './images/pic__COLOR_pic(1).png';
import Img4 from './images/pic__COLOR_pic(2).png';
import Img5 from './images/pic__COLOR_pic(3).png';
import Img6 from './images/pic__COLOR_pic(4).png';
import Img7 from './images/pic__COLOR_pic(5).png';
import Img8 from './images/pic__COLOR_pic(6).png';
import Img9 from './images/pic__COLOR_pic(7).png';
import Img10 from './images/pic__COLOR_pic(8).png';
import Img11 from './images/pic__COLOR_pic(9).png';
import Img12 from './images/pic__COLOR_pic(10).png';
import Img13 from './images/pic__COLOR_pic(11).png';
import Img14 from './images/pic__COLOR_pic(12).png';
import Img15 from './images/pic__COLOR_pic(13).png';
import Img16 from './images/pic__COLOR_pic(14).png';


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


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
     
    <div className="app">
      <Routes>
      <Route  path="/" element={
       <div>
       <Header/> 
       <Promo />
       <NavTab/> 
       <AboutProject/>
       <Techs/>
       <AboutMe/>
       <Portfolio/>
       <Footer/>
     </div>} />
     <Route  path="/movies" element={
       <div>
      <HeaderAuthorised setIsMenuOpen={setIsMenuOpen}/> 
      {isMenuOpen && <Sidebar setIsMenuOpen={setIsMenuOpen}/>}
      <SearchForm />
      <MoviesCardList data={savedData} />
      <More/>
      <Footer />
     </div>} />
     <Route  path="/saved-movies" element={
       <div>
      <HeaderAuthorised setIsMenuOpen={setIsMenuOpen}/> 
      <SearchForm />
      <MoviesCardList data={savedData} type='saved' />
      <Footer />
     </div>} />
     <Route  path="/profile" element={
      <div>
     <HeaderAuthorised setIsMenuOpen={setIsMenuOpen}/> 
     <Profile/>
     </div>} />
  
     <Route  path="/signin" element={<Login/>} />
      <Route path="/signup" element={<Register/>}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>

    

  
   
    
  );
}

export default App;
