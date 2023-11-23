import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import routerLinks from "@/utils/router-links";

import { EnvironmentsAPI } from "@/services/environments";
const Brand = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    EnvironmentsAPI.getAllEnvironments,
    "data",
    EnvironmentsAPI.deleteEnvironments
  );
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows();
  }, []);
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Danh sach Environments
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateEnvironments"))}
      >
        Thêm Environments
      </Button>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        // onRow={(record) => ({
        //   onClick: () => {
        //     navigate(routerLinks("AddIngredient"), { state: { ...record } });
        //   },
        // })}
      />
    </div>
  );
};
export default Brand;
