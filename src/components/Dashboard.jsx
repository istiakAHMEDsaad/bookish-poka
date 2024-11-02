// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import Graph from './Graph';

const Dashboard = () => {
  const data = useLoaderData();
  /* const [data, setData] = useState();
  useEffect(() => {
    fetch('/booksData.json').then((res) =>
      res
        .json()
        .then((data) => setData(data))
        .catch((err) => console.error(err))
    );
  }, []);
  console.log(data.bookId) */
  console.log(data)

  return (
    <div className='flex items-center justify-center'>
      <div>
        {/* {data.map((para, index) => <Graph key={index} para={para}></Graph>)} */}
      </div>
    </div>
  );
};

export default Dashboard;
