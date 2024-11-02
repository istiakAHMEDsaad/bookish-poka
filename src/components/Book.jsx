import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const [isBookMark, setIsBookMarked] = useState(false);
  const handleBookMark = () => {
    setIsBookMarked(!isBookMark);
  }

  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`./books/${bookId}`}>
      <div className='card card-compact bg-base-100 shadow-xl pb-4 border space-y-6 flex flex-col justify-between md:hover:scale-105 transition-all cursor-pointer '>
        <figure className='bg-slate-200 py-3'>
          <img src={image} alt={`image ${bookId}`} className='md:h-96' />
        </figure>
        <div className='px-5 space-y-2'>
          {/* Tag */}
          <div className='flex space-x-4'>
            {tags.map((tag, idx) => (
              <p
                className='text-[#23BE0A] font-medium py-1 px-3 rounded-md bg-slate-100'
                key={idx}
              >
                {tag}
              </p>
            ))}
          </div>
          {/* Book Name */}
          <h2 className='font-playfair text-2xl font-bold'>{bookName}</h2>
          {/* Writer */}
          <p className='text-base font-semibold text-gray-500'>{`By : ${author}`}</p>
          {/* Divider */}
          <hr className='border  border-dashed border-gray-300' />
          {/* Category text-base  */}
          <div className='flex flex-row items-center justify-between font-semibold text-stone-600'>
            <p>{category}</p>
            <div className='flex items-center text-lg justify-center gap-x-1'>
              {rating}{' '}
              <button onClick={handleBookMark} className=''>
                {/* <FaRegStar></FaRegStar> */}
                {isBookMark === true ? <FaStar></FaStar> : <FaRegStar></FaRegStar>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
