import React from 'react';
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



import Img1 from './images/moviesPhoto.svg';
import Img2 from './images/pic__COLOR_pic.svg';
import Img3 from './images/pic__COLOR_pic(1).svg';
import Img4 from './images/pic__COLOR_pic(2).svg';
import Img5 from './images/pic__COLOR_pic(3).svg';
import Img6 from './images/pic__COLOR_pic(4).svg';
import Img7 from './images/pic__COLOR_pic(5).svg';
import Img8 from './images/pic__COLOR_pic(6).svg';
import Img9 from './images/pic__COLOR_pic(7).svg';
import Img10 from './images/pic__COLOR_pic(8).svg';
import Img11 from './images/pic__COLOR_pic(9).svg';
import Img12 from './images/pic__COLOR_pic(10).svg';
import Img13 from './images/pic__COLOR_pic(11).svg';
import Img14 from './images/pic__COLOR_pic(12).svg';
import Img15 from './images/pic__COLOR_pic(13).svg';
import Img16 from './images/pic__COLOR_pic(14).svg';


const savedData = [
  {
    title: "33 слова о дизайне",
    image: Img1,
  },

  {
    title: "33 слова о дизайне",
    image: Img2,
  },

  {
    title: "33 слова о дизайне",
    image: Img3,
  },
  {
    title: "33 слова о дизайне",
    image: Img4,
  },
  {
    title: "33 слова о дизайне",
    image: Img5,
  },
  {
    title: "33 слова о дизайне",
    image: Img6,
  },
  {
    title: "33 слова о дизайне",
    image: Img7,
  },
  {
    title: "33 слова о дизайне",
    image: Img8,
  },
  {
    title: "33 слова о дизайне",
    image: Img9,
  },
  {
    title: "33 слова о дизайне",
    image: Img10,
  },
  {
    title: "33 слова о дизайне",
    image: Img11,
  },
  {
    title: "33 слова о дизайне",
    image: Img12,
  },
  {
    title: "33 слова о дизайне",
    image: Img13,
  },
  {
    title: "33 слова о дизайне",
    image: Img14,
  },
  {
    title: "33 слова о дизайне",
    image: Img15,
  },
  {
    title: "33 слова о дизайне",
    image: Img16,
  },

  

]


function App() {
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
      <HeaderAuthorised/> 
      <Sidebar />
      <SearchForm />
      <MoviesCardList data={savedData} />
      <More/>
      <Footer />
     </div>} />
     <Route  path="/saved-movies" element={
       <div>
      <HeaderAuthorised/> 
      <SearchForm />
      <MoviesCardList data={savedData} type='saved' />
      <Footer />
     </div>} />
     <Route  path="/profile" element={
      <div>
     <HeaderAuthorised/> 
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
