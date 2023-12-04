import { Button, Card, Spin } from "antd";
import { useState } from "react";
import CardIngredient from "./CardIngredientOrder";
import { showError, showSuccess } from "@/components/AccountModal/Modal";
import { OrderProductAPI } from "@/services/orderProduct";
import { keyUser } from "@/constant/auth";
import routerLinks from "@/utils/router-links";
import { useNavigate } from "react-router-dom";
// import CardIngredient from "./CardIngredientOrder";

const FormIngredient = () => {
  const [listVT, setListVT] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem(keyUser));


  // useEffect(() => {
  //   getAllProduct();
  // }, []);
  console.log(auth);
  const onFinish = async () => {
    setLoading(true);
    let data={
      "productIds":"",
      "quantities":"",
       "prices":""
    };
    if (listVT.length > 0) {
      let dot=",";
      listVT.forEach((e,index)=>{
        console.log(listVT?.length,index);
        if(listVT?.length===index+1){
          dot="";
        }
        data.productIds=data.productIds+e.id+dot,
        data.quantities=data.quantities+e.qty+dot,
        data.prices=data?.prices+e.price+dot
      })
    } else {
      showError("Không có dữ liệu");
      setLoading(false);
      return;

    }
    try {
      const req = await OrderProductAPI.create(auth?.data?.id,data)
      // if (req) {
        navigate(routerLinks("OrderProduct"));
        showSuccess("Tọa hóa đơn thành công")
        setLoading(false);
      // }
    } catch (error) {
      showError("lỗi");
      setLoading(false);
    }
  };
  const deleteVT = (index) => {
    let tmp = [...listVT];
    tmp.splice(index, 1);
    setListVT(tmp);
  };
  console.log(listVT);
  return (
    <Spin spinning={loading}>
      <Card title="Tạo hóa đơn vật tư">
        <h1>Thêm vât tư</h1> 
         <CardIngredient
          setData={setListVT}
        /> 
        <h1>Danh sách vật tư</h1>
         {listVT?.map((e, index) => {
          return (
            <Card key={index}>
              <div className="flex justify-between">
                <div>Mã sản phẩm:{e?.id}</div>
                <div>Tên sản phẩm: {e?.name}</div>
                <div>Số lượng: {e?.qty}</div>
                <div>Giá: {e?.price}</div>
                <div className="text-red-600" onClick={() => deleteVT(index)}>
                  Xóa
                </div>
              </div>
            </Card>
          );
        })} 
        <div className="flex justify-center">
          <Button onClick={() => onFinish()}>Tạo hóa đơn</Button>
        </div>
      </Card>
    </Spin>
  );
};
export default FormIngredient;
