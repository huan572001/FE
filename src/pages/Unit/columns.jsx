import { showDeleteOderModal } from "@/components/AccountModal/Modal";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routerLinks from "@/utils/router-links";
export const columns = (onDelete) => {
  const navigate = useNavigate();
  return [
    {
      title: "Mã Unit",
      key: "0",
      dataIndex: "id",
    },
    {
      title: "Tên Unit ",
      key: "1",
      dataIndex: "unitName",
    },
    {
      title: "Hoạt động",
      key: "3",
      render: (_, info) => (
        <>
          <DeleteOutlined
            onClick={(e) => {
              e.stopPropagation();
              onDelete(info?.id);
            }}
          />
          <EditOutlined
            onClick={(e) => {
              e.stopPropagation();
              navigate(routerLinks("EditUnit"), { state: { ...info } });
            }}
          />
        </>
      ),
    },
  ];
};
