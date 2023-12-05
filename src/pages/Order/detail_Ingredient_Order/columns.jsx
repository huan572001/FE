
import { formatMonney } from "@/utils/fomatMoney";
export const columns = (onDelete) => {
  return [
    {
      title: "Mã sản phẩm",
      key: "0",
      dataIndex: "id",
    },
    {
      title: "Ảnh sản phẩm ",
      key: "1",
      render: (_, info) => (
        <>
          <img src={info?.image_url} className="w-10 " />
        </>
      ),
    },
    {
      title: "Tên sản phẩm ",
      key: "1",
      dataIndex: "product_name",
    },
    {
      title: "Giá sản phẩm ",
      key: "1",
      dataIndex: "price",
      render: (_, info) => (<> {formatMonney(Number(info?.price))}</>)
    },
    {
      title: "Số lượng sản phẩm ",
      key: "1",
      dataIndex: "quantity",
    },
  ];
};
