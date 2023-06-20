import { Button, Card, Col, Row, message } from "antd";
import React, { useEffect, useState } from "react";
import img2 from "../Assets/Images/img2.png";
import img3r from "../Assets/Images/img3r.png";
import img4r from "../Assets/Images/img4r.png";


import { ArrowRightOutlined } from "@ant-design/icons";
import axios from "axios";

const ProductDisplay = () => {
  const [data, setData] = useState();

  const forHimHandler = () => {
    message.success("working")
  }
  return (
    <Row gutter={24} style={{ gap: "20px", marginLeft: "80px" }}>
      <Col span={7}>
        <Card
          style={{
            backgroundColor: "#a8bab5",
            height: "600px",
            borderRadius: "15px",
            border: "none",
          }}
          cover={
            <img
              style={{ transform: "scale(1.2)" }}
              alt="male-model"
              src={img2}
            />
          }
        >
          <Button
            onClick={forHimHandler}
            style={{
              height: "100px",
              marginTop: "30px",
              width: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              backgroundColor: "black",
              border: "none",
            }}
          >
            <span
              style={{
                fontWeight: "lighter",
                fontSize: "32px",
                textAlign: "center",
                marginLeft: "10px",
                color: "white",
              }}
            >
              HIS WARDROBE
              <ArrowRightOutlined
                style={{
                  color: "white",
                  textAlign: "center",
                  marginLeft: "40px",
                  fontWeight: "lighter",
                  transform: "rotate(-45deg) scale(3)",
                }}
              />
            </span>{" "}
          </Button>
        </Card>
      </Col>
      <Col span={7}>
        <Card
          style={{
            backgroundColor: "#d0a7ff",
            height: "600px",
            borderRadius: "15px",
            border: "none",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          cover={
            <img
              style={{
                transform: "scale(1.2)",
                height: "400px",
                width: "auto",
                borderRadius: "15px",
                marginTop: "40px",
              }}
              alt="male-model"
              src={img3r}
            />
          }
        >
          <Button
            style={{
              height: "100px",

              width: "350px",
              display: "block",
              alignItems: "center",
              justifyContent: "start",
              backgroundColor: "black",
              border: "none",
            }}
          >
            <span
              style={{
                fontWeight: "lighter",
                fontSize: "27px",
                textAlign: "center",
                marginLeft: "10px",
                color: "white",
              }}
            >
              BUSINESS CASUALS
              <ArrowRightOutlined
                style={{
                  color: "white",
                  textAlign: "center",
                  marginLeft: "40px",
                  fontWeight: "lighter",
                  transform: "rotate(45deg) scale(3)",
                }}
              />
            </span>{" "}
          </Button>
        </Card>
      </Col>
      <Col span={7}>
        <Card
          style={{
            backgroundColor: "#7e916d",
            height: "600px",
            borderRadius: "15px",
            border: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          cover={
            <img
              style={{
                transform: "scale(1.2)",
                height: "400px",
                width: "auto",
                borderRadius: "15px",
                marginTop: "40px",
              }}
              alt="male-model"
              src={img4r}
            />
          }
        >
          <Button
            style={{
              height: "100px",

              width: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              backgroundColor: "black",
              border: "none",
            }}
          >
            <span
              style={{
                fontWeight: "lighter",
                fontSize: "32px",
                textAlign: "center",
                marginLeft: "10px",
                color: "white",
              }}
            >
              HER WARDROBE
              <ArrowRightOutlined
                style={{
                  color: "white",
                  textAlign: "center",
                  marginLeft: "40px",
                  fontWeight: "lighter",
                  transform: "rotate(-160deg) scale(3)",
                }}
              />
            </span>{" "}
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductDisplay;
