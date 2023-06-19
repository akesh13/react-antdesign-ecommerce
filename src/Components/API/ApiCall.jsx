import axios from "axios";

export const ApiCall = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } catch (err) {
    console.log("Error happened in API call", err);
    throw err;
  }
};

export const getProductByCategory = async (category) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};
