import { useAuth } from "@/context/AuthProvider";
import {
  AreaChartOutlined,
  AuditOutlined,
  ContainerOutlined,
  DiffOutlined,
  DollarOutlined,
  ExceptionOutlined,
  FileDoneOutlined,
  FundProjectionScreenOutlined,
  GoldOutlined,
  HighlightOutlined,
  HomeOutlined,
  NodeIndexOutlined,
  OrderedListOutlined,
  ScheduleOutlined,
  ScissorOutlined,
  SmileOutlined,
  TeamOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
// import { Books, BellRing, Stack, User } from '@/assets';

const LayoutStaff = [
  {
    label: "Quản lý đơn hàng",
    key: "Order",
    icon: <ScheduleOutlined />,
  },
];

const Layout = [
  {
    label: "Thống kê",
    key: "Dashboard",
    icon: <NodeIndexOutlined />,
  },
  {
    label: "Loại sản phẩm",
    key: "Category",
    icon: <OrderedListOutlined />,
  },
  {
    label: "Sản phẩm",
    key: "Product",
    icon: <ScissorOutlined />,
  },
  {
    label: "Hóa đơn sản phẩm",
    key: "OrderProduct",
    icon: <ScissorOutlined />,
  },
  {
    label: "Thương hiệu",
    key: "Brand", 
    icon: <HighlightOutlined />,
  },
  {
    label: "Nhà cung cấp",
    key: "Suppliers",
    icon: <AuditOutlined />,
  },
  {
    label: "Hoạt động",
    key: "Activities",
    icon: <DiffOutlined />,
  },
  {
    label: "Đơn vị",
    key: "Unit",
    icon: <FileDoneOutlined />,
  },
  {
    label: "Banner",
    key: "Banner",
    icon: <FundProjectionScreenOutlined />,
  },
  {
    label: "Môi trường",
    key: "Environments",
    icon: <NodeIndexOutlined />,
  },
  {
    label: "Nhân viên",
    key: "Staff",
    icon: <SmileOutlined />,
  },
];
const Out = () => {
  const auth = useAuth();
  let R = Layout;
  if (auth?.user?.data?.role?.id === 1) {
    R = [...Layout, ...LayoutStaff];
  }
  return R;
};
export default Out;
