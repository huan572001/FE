import useTable from "@/hook/useTable";
import { CategoryAPI } from "@/services/category";
import routerLinks from "@/utils/router-links";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "antd";
import { columns } from "./columns";
const Category = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    CategoryAPI.getAllCategory,
    "data"
  );
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows();
  }, []);
  console.log(tableData);
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Danh sách khuyến mãi
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateCategory"))}
      >
        Tạo khuyến mãi
      </Button>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        // onRow={(record) => ({
        //   onClick: () => {
        //     detailproduct(record);
        //   },
        // })}
      />
    </div>
  );
};

export default Category;
