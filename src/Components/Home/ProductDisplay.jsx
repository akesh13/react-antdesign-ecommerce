import { Col, Row } from "antd";
import React from "react";

const ProductDisplay = () => {
  return (
    <Row gutter={24} style={{gap:"20px", marginLeft:"80px"}}>
      <Col
        style={{
          backgroundColor: "#aba4a2",
          height: "600px",
          borderRadius: "15px",
          
        }}
        span={7}
      ></Col>
      <Col
        style={{
          backgroundColor: "#dabda9",
          height: "600px",
          borderRadius: "15px",
          
        }}
        span={7}
      ></Col>
      <Col
        style={{
          backgroundColor: "#b9b8ff",
          height: "600px",
          borderRadius: "15px",
          
        }}
        span={7}
      ></Col>
    </Row>
  );
};

export default ProductDisplay;
