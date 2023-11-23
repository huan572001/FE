import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import routerLinks from "@/utils/router-links";
import { SpecialAPI } from "@/services/special";
import { BrandsAPI } from "@/services/brands";
import { SuppliersAPI } from "@/services/suppliers";
import { ActivitiesAPI } from "@/services/activities";
const Brand = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    ActivitiesAPI.getAllActivities,
    "data",
    ActivitiesAPI.deleteActivities
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
        Danh sach activities
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateActivities"))}
      >
        Thêm activities
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
