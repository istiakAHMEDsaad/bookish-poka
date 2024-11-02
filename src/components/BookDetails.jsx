import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../utility/addToDb';

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const bookID = parseInt(bookId);

  const book = data.find((bookid) => bookid.bookId === bookID);
  // console.log(book);
  // console.log(bookID);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleMarkAsWishList = (id) => {
    addToStoredWishList(id);
  }
  
  const handleMarkedAsRead = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div className='my-10 flex flex-col md:flex-row'>
      {/* 1 */}
      <div className='lg:basis-1/3 md:basis-1/2 p-4 bg-gray-100'>
        <img
          className='mx-auto rounded-sm'
          src={image}
          alt={`image ${bookId}`}
        />
      </div>
      {/* 2 */}
      <div className='lg:basis-2/3 md:basis-1/2 md:pl-8 md:mt-0 mt-5 px-3 space-y-4'>
        {/* ---------- Book Name ---------- */}
        <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold font-playfair'>
          {bookName}
        </h2>

        {/* ---------- Author Name ---------- */}
        <p className='font-bold text-stone-700'>{author}</p>

        {/* ---------- Divider ---------- */}
        <hr className='border-b border-gray-200  ' />

        {/* ---------- Category ---------- */}
        <p className='font-bold text-stone-700'>{category}</p>

        {/* ---------- Divider ---------- */}
        <hr className='border-b border-gray-200  ' />

        {/* ---------- Review ---------- */}
        <p className='text-black font-bold'>
          Review: <span className='font-light text-gray-500'>{review}</span>
        </p>

        {/* ---------- Tag ---------- */}
        <div className='flex gap-x-5'>
          <p className='font-bold text-black'>Tag</p>
          {tags.map((tag) => (
            <p key={bookID} className='font-semibold text-[#23BE0A]'>
              #{tag}
            </p>
          ))}
        </div>

        {/* ---------- Divider ---------- */}
        <hr className='border-b border-gray-200  ' />

        {/* ---------- Book Description ---------- */}
        <div className='flex md:gap-x-0 gap-x-3'>
          <div className='md:basis-1/4 text-gray-500 space-y-3'>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className='md:basis-3/4 font-semibold text-black space-y-3'>
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        {/* ---------- Button ---------- */}
        <div className='flex gap-x-4'>
          <button
            onClick={() => handleMarkedAsRead(bookId)}
            className='border border-gray-400 px-5 py-2 rounded-md hover:bg-black hover:text-white transition-all text-lg font-bold'
          >
            Read
          </button>

          <button
            onClick={() => handleMarkAsWishList(bookId)}
            className='text-lg font-bold px-5 py-2 rounded-md bg-[#50B1C9] hover:bg-[#50B1C9]/80 text-white/90 active:scale-95 transition-all'
          >
            Wishlist
          </button>
          <Link
            to={`https://www.amazon.com/s?k=${encodeURIComponent(bookName)}`}
            rel='noopener noreferrer'
          >
            <button className='text-lg font-bold px-5 py-2 rounded-md bg-[#fdfe03] hover:bg-[#fdfe03]/70 active:scale-105 transition-all'>
              Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
