import { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('booksData.json')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className='flex items-center justify-center md:text-4xl text-2xl font-bold  font-playfair mb-8'>
        <h2>Books</h2>
      </div>
      {/* Card */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-8'>
        {books.map((book, idx) => <Book key={idx} book={book}></Book>)}
      </div>
    </div>
  );
};

export default Books;
