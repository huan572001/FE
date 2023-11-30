import useTable from "@/hook/useTable";
import { Button, DatePicker, Table } from "antd";
import { useEffect } from "react";

import { columns } from "./columns";

import { ChartAPI } from "@/services/chart";
import Example from "./LineChart";
import Report from "./Report";

const ProductTop = () => {
  const { tableData, loading, fetchRows, onDelete, params } = useTable(
    ChartAPI.TopProduct,
    "data"
  );
  useEffect(() => {
    fetchRows({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });
  }, []);
  const onChange = (values) => {
    const date = new Date(values);

    fetchRows({
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    });
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "30px",
        }}
      >
        Thống kê số lượng sản phẩm bán được theo tháng
      </h1>
      <DatePicker onChange={onChange} picker="month" />
      <Table
        columns={columns()}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {},
        })}
      />
    </div>
  );
};
const Statistical = () => {
  return (
    <>
      <Example />
      <Report />
      <ProductTop />
      {/* <CustomerTop /> */}
    </>
  );
};

export default Statistical;
