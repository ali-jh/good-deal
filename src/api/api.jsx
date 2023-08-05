import axios from "axios";

export const GetOstan = async () => {
  const response = await axios.get(
    "http://172.16.37.85:54112/api/Ostans/GetOstanList"
  );
  return response.data;
};

export const GetCity = async ({ id, setCities }) => {
  const response = await axios.get(
    `http://172.16.37.85:54112/api/Cities/GetCitiesByOstanId?ostanId=${id}`
  );
  setCities(response.data);
  return response.data;
};

export const GetShops = async ({ id, setShop }) => {
  const response = await axios.get(
    `http://172.16.37.85:54112/api/Shops/GetShopListByCityId?cityId=${id}`
  );
  setShop(response.data);
  return response.data;
};

export const GetCategory = async ({ setCategory }) => {
  const response = await axios.get(
    `http://172.16.37.85:54112/api/ProductGroups/GetProductGroupList`
  );
  setCategory(response.data);
  return response.data;
};
export const GetProductsById = async ({ id, setProductsById }) => {
  const response = await axios.get(
    `http://172.16.37.85:54112/api/Products/SearchProductByProductGroupid?productGroupId=${id}`
  );
  setProductsById(response.data);
  return response.data;
};

export const PostPrices = ({ data, onSuccess, onFail , }) => {
  const options = {
    method: "POST",
    url: "http://172.16.37.85:54112/api/Prices/AddListPriceRecords",
    data: data,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      onSuccess != undefined ? onSuccess(response.data) : () => {};
      alert("قیمت ها  با موفقیت ثبت شد!!");
      return response.data;
    })
    .catch(function (error) {
      onFail != undefined ? onFail(error) : () => {};
      console.error(error);
    });
};
