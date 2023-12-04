import useTable from "@/hook/useTable";
import { Button, DatePicker, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import routerLinks from "@/utils/router-links";
import { OrderAPI } from "@/services/order";
import moment from "moment";
import { OrderProductAPI } from "@/services/orderProduct";
import { detailOrderProduct } from "./detail_Ingredient_Order";

const { RangePicker } = DatePicker;
const Brand = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    OrderProductAPI.getAll,
    "data",
  );
  // const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchRows({  
      start:"2000-01-01",
      end:moment(new Date()).format("YYYY-MM-DD")
    });
  }, []);
  const onChange = (values) => {
   fetchRows({
      start: moment(values[0]).format("YYYY-MM-DD"),
      end: moment(values[1]).format("YYYY-MM-DD"),
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
        Hóa đơn sản phẩm
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateOrderProduct"))}
      >
        Tạo hóa đơn sản phẩm
      </Button>
      <div>
        <RangePicker onChange={onChange}  disabledDate={disabledDate}/>
      </div>
      <Table
        columns={columns(onDelete)}
        dataSource={tableData?.data}
        rowKey="id"
        loading={loading}
        onRow={(record) => ({
          onClick: () => {
            detailOrderProduct(record)
          },
        })}
      />
    </div>
  );
};
export default Brand;
