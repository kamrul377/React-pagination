import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Contact from './components/Contact'
import SingleBlog from './components/SingleBlog'
import Person from './components/Person'
import Swiper from './components/Swiper/Swiper'
import Pagination from './components/pagination/Pagination'


// import Student from './components/StudentProfile/Student';
// import Teacher from './components/Teacher/Teacher';
// import Food from './components/FoodTemplate/Food';
function App() {
  return (


    <BrowserRouter className="App">
      {/* <Student /> */}
      {/* <Teacher /> */}
      {/* <Food /> */}

      <div className="nav bg-indigo-950 text-white py-5">
        <ul className='flex justify-center'>
          <li><a className='p-4 hover:text-orange-600' href="/">Home</a></li>
          <li><a className='p-4 hover:text-orange-600' href="/blog">blog</a></li>
          <li><a className='p-4 hover:text-orange-600' href="/contact">contact</a></li>
          <li><a className='p-4 hover:text-orange-600' href="/person">person</a></li>
          <li><a className='p-4 hover:text-orange-600' href="/slider">slider</a></li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:title' element={<SingleBlog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/person' element={<Person />} />
        <Route path='slider' element={<Swiper />} />
        <Route path='pagination' element={<Pagination />} />

      </Routes>

    </BrowserRouter>


  );
}

export default App;
