import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã",
      key: "1",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      key: "6",
      render: (_, info) => (
        <>
          <img className="w-8 " src={info?.url_banner} alt="anh" />
        </>
      ),
    },
    {
      title: "Tên sản phẩm",
      key: "6",
      render: (_, info) => <>{info?.product?.productName}</>,
    },

    {
      title: "Hoạt động",
      key: "8",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              onDelete(info?.id, "Bạn có chắc muốn xóa loại hàng này không!");
              e.stopPropagation();
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              // navigate(routerLinks("EditStaff"), { state: { ...info } });
            }}
          />
        </>
      ),
    },
  ];
};
