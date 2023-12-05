import useTable from "@/hook/useTable";
import { Button, DatePicker, Table } from "antd";
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
import moment from "moment";
const { RangePicker } = DatePicker;
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
    fetchRows({
      date_start: "2000-01-01",
      date_end: moment(new Date()).format("YYYY-MM-DD"),
    });
  }, []);
  const onChange = (values) => {
    fetchRows({
      date_start: moment(values[0]).format("YYYY-MM-DD"),
      date_end: moment(values[1]).format("YYYY-MM-DD"),
    })
   };
 
   const disabledDate = (current) => {
     // Cho phép chọn các ngày trong quá khứ
     return current && current >= new Date();
   };  
  return (
    <div>
      <h1
        style={{
          fontSize: "40px",
        }}
      >
        Quản lý đơn hàng
      </h1>
      <RangePicker onChange={onChange}  disabledDate={disabledDate}/>
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
