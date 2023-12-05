import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
import { formatMonney } from "@/utils/fomatMoney";
export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã thương hiệu",
      key: "0",
      dataIndex: "id",
    },
    {
      title: "Ảnh sản phẩm ",
      key: "1",
      render: (_, info) => (
        <>
          <img src={info?.imageUrl} className="w-10 " />
        </>
      ),
    },
    {
      title: "Tên sản phẩm ",
      key: "1",
      dataIndex: "productName",
    },
    {
      title: "Giá sản phẩm ",
      key: "1",
      dataIndex: "price",
      render: (_, info) => (<> {formatMonney(Number(info?.price))}</>)
    },
    {
      title: "Giá gốc",
      key: "1",
      dataIndex: "priceCapital",
      render: (_, info) => (<> {formatMonney(Number(info?.priceCapital))}</>)
    },
    {
      title: "Số lượng tồn",
      key: "1",
      dataIndex: "stockQuantity",
    },
    {
      title: "Hoạt động",
      key: "3",
      render: (_, info) => (
        <>
          <EyeOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("ViewProducts"), {
                state: { ...info, view: true },
              });
            }}
          />
          <DeleteOutlined
            onClick={(e) => {
              e.stopPropagation();
              onDelete(info?.id);
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditProducts"), { state: { ...info } });
            }}
          />
        </>
      ),
    },
  ];
};
