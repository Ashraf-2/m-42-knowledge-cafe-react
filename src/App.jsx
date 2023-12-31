import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    console.log('bm adding soon');
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
        <Bookmarks></Bookmarks>

      </div>
    </>
  )
}

export default App;
