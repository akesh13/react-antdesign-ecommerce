import React, { useState } from "react";
import { StarFilled } from "@ant-design/icons";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import { Button, Spin, message } from "antd";

const AddToCart = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const addToCartCall = async (id) => {
    try {
      const response = await axios.post("https://dummyjson.com/carts/add", {
        headers: { "Content-Type": "application/json" },
        userId: 1,
        products: [
          {
            id: id,
            quantity: 1,
          },
        ],
      });
      // console.log(response.data);
      response.data
        ? message.success(`${product.title} has added to cart`)
        : message.error("Error while adding");
      return response.data;
    } catch (err) {
      console.log("Error on adding to cart", err);
      throw err;
    }
  };

  const addProductToCart = (id) => {
    setLoading(true);
    addToCartCall(id);
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Spin spinning={loading} />
      <Button
        type="default"
        style={{ backgroundColor: "#cbcbcb" }}
        shape="round"
        onClick={() => {
          addProductToCart(product.id);
        }}
        loading={loading}
      >
        Add to Cart{" "}
        <BsFillArrowRightCircleFill
          style={{ marginLeft: "10px", color: "black" }}
        />
      </Button>
      <Button
        type="default"
        style={{ backgroundColor: "#cbcbcb" }}
        shape="round"
      >
        Wishlist <StarFilled style={{ marginLeft: "10px", color: "black" }} />
      </Button>
    </div>
  );
};

export default AddToCart;
