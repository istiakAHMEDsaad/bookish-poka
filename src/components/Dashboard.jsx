import { useLoaderData } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const Dashboard = () => {
  const data = useLoaderData();
  const colors = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    'red',
    'pink',
    '#8a2be2',
    '#420420',
    '#00ff7f',
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />;
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-4xl'>
        <ResponsiveContainer width='100%' height={500}>
          <BarChart
            height={500}
            width={800}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
            <XAxis dataKey='bookName' />
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar
              dataKey='totalPages'
              fill='#8884d8'
              shape={<TriangleBar />}
              label={{ position: 'top' }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
