import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Ảnh",
      key: "5",
      render: (_, info) => (
        <>
          <img
            src={info?.image_url}
            style={{
              width: 80,
            }}
          />
        </>
      ),
    },
    {
      title: "Tên sản phẩm",
      key: "1",
      dataIndex: "product_name",
    },

    {
      title: "Số lượng bán được",
      key: "4",
      dataIndex: "total_quantity",
    },
  ];
};
