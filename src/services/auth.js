import { USER_API_PATH } from "@/constant/api";
import axiosClient from "./axiosClient";

export async function login(data) {
  const url = `/${USER_API_PATH}/login`;
  return axiosClient.post(url, data);
  //   return {
  //     "data": {
  //         "id": 2,
  //         "username": "huan1552001",
  //         "fullname": null,
  //         "email": null,
  //         "password": "$2a$10$OFK1Sn9x/203y6rMMS/hn.n.QOq40gEMhh9nHs3ydsuelvu/afoJi",
  //         "phone": null,
  //         "role": {
  //             "id": 3,
  //             "name": "CUSTOMER"
  //         },
  //         "avatarUrl": "https://res.cloudinary.com/dzljztsyy/image/upload/v1699149880/shop_sport/avatart%20default/avatar_vxzerq.jpg",
  //         "adress": null,
  //         "birthday": null,
  //         "publicId": null,
  //         "status": true,
  //         "enabled": true,
  //         "authorities": null,
  //         "accountNonLocked": true,
  //         "credentialsNonExpired": true,
  //         "accountNonExpired": true
  //     },
  //     "message": "login successfully !",
  //     "status": 200,
  //     "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJodWFuMTU1MjAwMSIsImlhdCI6MTcwMDM5NjIwNywiZXhwIjoxNzAxMDAxMDA3fQ.ola7DfWjy1SO_mB2BLn_6f77jImyXZyg5k9KMolrtFw"
  // }
}
