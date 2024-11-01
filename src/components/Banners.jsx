import BookImage from '../assets/books.jpg';
const Banners = () => {
  return (
    <div className='hero bg-base-200 lg:p-10 min-h-96 rounded-lg mb-16 mx-auto'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src={BookImage}
          className='lg:max-w-lg md:max-w-sm rounded-lg shadow-2xl'
          alt='Book image'
        />
        <div className='space-y-4 lg:block md:flex md:flex-col items-center justify-center'>
          <h1 className='lg:text-5xl md:text-3xl text-2xl lg:text-start lg:mx-0 md:text-center md:mx-auto font-bold font-playfair w-3/4 lg:leading-[4.5rem]'>
            Books to freshen up your bookshelf
          </h1>
          <button className='primary-btn'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banners;
