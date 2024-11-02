import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/addToDb';
import { FaLocationDot } from "react-icons/fa6";

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
          <div className='mt-5'>
            {readList.map((book, index) => (
              <div key={index} className='border flex flex-col md:flex-row md:gap-x-6 md:gap-y-0 gap-y-5'>
                {/* Image */}
                <div className='md:basis-[30%]'>
                  <img src={book.image} alt={`image ${book.bookId}`} />
                </div>
                <div className='md:basis-[70%] flex flex-col space-y-4'>
                  {/* Bookname */}
                  <h2 className='font-playfair text-3xl md:text-4xl font-bold'>{book.bookName}</h2>
                  {/* author */}
                  <p className='font-bold text-stone-700'>By : {book.author}</p>
                  {/* tag */}
                  <div className='flex flex-col md:flex-row md:items-center gap-x-5 md:gap-y-0 gap-y-2'>
                    <span className='font-extrabold'>Tag</span>
                    {book.tags.map((tag, idx) => <p key={idx} className='md:px-4 md:py-1 rounded-full md:bg-gray-100 font-semibold text-[#23BE0A]'>{`#${tag}`}</p>)}
                    <div className='flex items-center gap-x-2'>
                      <FaLocationDot></FaLocationDot>
                      <p>{`Year of Publishing: ${book.yearOfPublishing}`}</p>
                      </div>
                  </div>
                </div>
              </div>
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
