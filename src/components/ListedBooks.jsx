import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/addToDb';
import { FaLocationDot, FaUserGroup, FaBookOpen   } from 'react-icons/fa6';

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
    // console.log(readList)
  }, [allBooks]);

  return (
    <div>
      <h2>Listed Books</h2>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div className='mt-5 space-y-6'>
            {readList.map((book, index) => (
              <div
                key={index}
                className='border flex flex-col md:flex-row md:gap-x-6 md:gap-y-0 md:p-5 md:rounded-lg'
              >
                {/* Image */}
                <div className='md:basis-[15%]'>
                  <img className='p-2 md:p-0 md:h-64' src={book.image} alt={`image ${book.bookId}`} />
                </div>

                <div className='md:basis-[100%] flex flex-col space-y-4'>
                  {/* Bookname */}
                  <h2 className='font-playfair text-3xl md:text-4xl font-bold'>
                    {book.bookName}
                  </h2>

                  {/* author */}
                  <p className='font-bold text-stone-700'>By : {book.author}</p>

                  {/* tag */}
                  <div className='flex flex-col md:flex-row md:items-center gap-x-5 md:gap-y-0 gap-y-2'>
                    <span className='font-extrabold'>Tag</span>
                    {book.tags.map((tag, idx) => (
                      <p
                        key={idx}
                        className='md:px-4 md:py-1 rounded-full md:bg-gray-100 font-semibold text-[#23BE0A]'
                      >{`#${tag}`}</p>
                    ))}
                    <div className='flex items-center gap-x-2'>
                      <FaLocationDot></FaLocationDot>
                      <p>{`Year of Publishing: ${book.yearOfPublishing}`}</p>
                    </div>
                  </div>

                  {/* Publish */}
                  <div className='flex gap-x-4 text-gray-500'>
                    <div className='flex gap-x-2 items-center'>
                      <span className='text-xl'><FaUserGroup></FaUserGroup></span>
                      <p>{`Publisher: ${book.publisher}`}</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                      <span className='text-xl'><FaBookOpen></FaBookOpen></span>
                      <p>{`Page ${book.totalPages}`}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className='border-b' />

                  {/* Category */}
                  <div className='flex flex-col md:flex-row gap-x-4 md:gap-y-0 gap-y-2'> 
                    <p className='text-blue-500 bg-blue-100 font-medium px-5 py-2 rounded-full md:inline-block md:w-auto w-[40%]'>{`Category: ${book.category}`}
                    </p>

                    <p className='text-amber-500 bg-orange-100 font-medium px-5 py-2 rounded-full md:inline-block md:w-auto w-[40%] text-center'>{`Rating: ${book.rating}`}
                    </p>

                    <button className='inline-block px-4 py-2 border rounded-full bg-[#23BE0A] text-white cursor-pointer hover:bg-[#23BE0A]/80 transition-all active:scale-105 md:w-auto w-[40%]'>View Details</button>
                  </div>
                </div>
              </div>
              // flex-col md:
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
