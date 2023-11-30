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
import { BannerAPI } from "@/services/banner";
import { OrderAPI } from "@/services/order";
import {
  showConfirmSuccess,
  showError,
  showSuccess,
} from "@/components/AccountModal/Modal";
const Brand = () => {
  const { params, tableData, loading, fetchRows, onDelete } = useTable(
    OrderAPI.getAll,
    "data"
  );
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const confirm = async (id, data) => {
    try {
      const rq = await OrderAPI.confirm(id, { id_order_status: data });
      if (rq) {
        fetchRows();
        showSuccess();
      }
    } catch (error) {
      showError();
    }
  };
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
        Quản lý đơn hàng
      </h1>
      <Table
        columns={columns(confirm)}
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
