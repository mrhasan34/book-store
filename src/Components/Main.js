import React, { useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);


  const searchBook = (event) => {
    if (event.key==="Enter"){
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDDGex1o2MXnk50tQOY4jOX1fhr5DhrKg0'+'&maxResults=40')
      .then(res => setData(res.data.items))
      .catch(err=>console.log(err))

    }
  }
  return (
    <>
    <div className='header' >
        <div className='row1'>
        <img src="./images/college-library.png" alt=""  />
      
            <h1>A room without books is like <br />a body without a soul. 
            </h1>
        </div>
        <div className='row2'>
            <h2>Find your book</h2>
            <div className='search'>
                <input type="text" placeholder='Enter book name' 
                value={search} onChange={e=>setSearch(e.target.value)} 
                onKeyPress={searchBook}
                />
                <button>search</button>
            </div>
            <img src="./images/book1.png" alt="" />;
        </div>
    </div>
    <div className='container'>
      {
        <Card book={bookData} />
      }

    </div>
    </>
  )
}

export default Main