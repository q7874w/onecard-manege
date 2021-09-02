import request from "../utils/request";

// 根据id获取陌生人到访信息
export const getStrangerVisitInfoByIdApi = (data) => {
  return request(
    "get",
    `/workdevice/whiteDing/getStrangerVisitInfoById?${data}`
  );
};

// 根据电话号码查询家长列表
export const listSimpleStudentToCustomerDTOByMobileApi = (data) => {
  return request(
    "get",
    `/user/whiteDing/customerInfo/listSimpleStudentToCustomerDTOByMobile?${data}`
  );
};
