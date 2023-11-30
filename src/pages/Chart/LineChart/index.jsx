import { ChartAPI } from "@/services/chart";
import { DatePicker } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 0,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 0,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 0,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 0,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 0,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 0,
  },
];

const Example = () => {
  const [dataC, setDataC] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());

  const getData = async () => {
    try {
      const rq = await ChartAPI.getProductByDate(year);
      const newData = rq?.data?.map((e, index) => {
        return {
          name: `Tháng ${index + 1}`,
          count: e,
        };
      });
      setDataC(newData);
    } catch (error) {}
  };
  const onChange = (values) => {
    setYear(new Date(values).getFullYear());
  };
  useEffect(() => {
    getData();
  }, [year]);
  return (
    <>
      <h1
        style={{
          fontSize: "30px",
        }}
      >
        Thống kê số lượng bán được theo tháng trong năm
      </h1>
      <DatePicker onChange={onChange} picker="year" />
      <ResponsiveContainer width={700} height={300}>
        <LineChart
          width={500}
          height={300}
          data={dataC}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export default Example;
