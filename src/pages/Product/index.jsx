import useTable from "@/hook/useTable";
import { Button, Table } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { columns } from "./columns";
import routerLinks from "@/utils/router-links";
import { ProductAPI } from "@/services/product";
const Product = () => {
  const { tableData, loading, fetchRows, onDelete } = useTable(
    ProductAPI.getAllProductAdmin,
    "data",
    ProductAPI.deleteProduct
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
        Danh sách sản phẩm
      </h1>
      <Button
        className="btn"
        onClick={() => navigate(routerLinks("CreateProduct"))}
      >
        Thêm nhà sản phẩm
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
export default Product;
