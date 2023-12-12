import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import routerLinks from "@/utils/router-links";
import { SpecialAPI } from "@/services/special";
import { BrandsAPI } from "@/services/brands";
import { StaffAPI } from "@/services/staff";
const Brand = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    StaffAPI.getAllStaff,
    "data",
    StaffAPI.deleteStaff
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
        Danh sach nhân viên
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateStaff"))}
      >
        Thêm nhân viên
      </Button>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
};
export default Brand;
