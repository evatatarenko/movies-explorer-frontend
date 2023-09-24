import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeaderAuthorised from './components/HeaderAuthorised/HeaderAuthorised';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import More from './components/More/More';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';





function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
     
    <div className="app">
      <Routes>
      <Route  path="/" element={
       <div>
       <Header/> 
       <Main />
       <Footer/>
     </div>} />
     <Route  path="/movies" element={
       <div>
      <HeaderAuthorised setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/> 
      <Movies />
      <More/>
      <Footer />
     </div>} />
     <Route  path="/saved-movies" element={
       <div>
      <HeaderAuthorised setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/> 
      <Movies  />
      <Footer />
     </div>} />
     <Route  path="/profile" element={
      <div>
     <HeaderAuthorised setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/> 
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
