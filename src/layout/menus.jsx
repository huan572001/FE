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
const LayoutAdmin = [
  {
    label: "Quản lý sản phẩm",
    key: "AdminProduct",
    icon: <UnorderedListOutlined />,
  },
  {
    label: "Thống kê",
    key: "statistical",
    icon: <AreaChartOutlined />,
  },
  {
    label: "Quản lý nhân viên",
    key: "Staff",
    icon: <TeamOutlined />,
  },
  {
    label: "Quản lý khuyến mãi",
    key: "Promotion",
    icon: <DollarOutlined />,
  },
  {
    label: "Quản lý khách hàng",
    key: "CustomerAdmin",
    icon: <UserAddOutlined />,
  },
];
const LayoutStaff = [
  {
    label: "Quản lý đơn hàng",
    key: "Order",
    icon: <ScheduleOutlined />,
  },
];
const LayoutIngredient = [
  {
    label: "Quản lý vật tư",
    key: "Ingredient",
    icon: <ContainerOutlined />,
  },
  {
    label: "Hóa đơn vật tư",
    key: "orderMaterials",
    icon: <ExceptionOutlined />,
  },
  {
    label: "Đơn vị vật tư",
    key: "Measure",
    icon: <GoldOutlined />,
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
    label: "activities",
    key: "Activities",
    icon: <DiffOutlined />,
  },
  {
    label: "Unit",
    key: "Unit",
    icon: <FileDoneOutlined />,
  },
  {
    label: "Banner",
    key: "Banner",
    icon: <FundProjectionScreenOutlined />,
  },
  {
    label: "Environments",
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
