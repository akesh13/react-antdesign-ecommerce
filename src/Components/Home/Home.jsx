import { Image, Typography, Col, Row, Button } from "antd";
import "../Home/Home.css";
import img1 from "../Assets/Images/img1.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import ProductDisplay from "./ProductDisplay";

const Home = () => {
  return (
    <div style={{ color: "rgb(223, 223, 223)" }}>
      <div
        style={{
          backgroundColor: "#88cad6",
          height: "500px",
          borderRadius: "15px",
          marginTop: "20px",
          margin: "20px",
          padding: "20px",
          overflow: "hidden"
        }}
      >
        <Row gutter={[24]}>
          <Col span={16}>
            <Typography.Title
              style={{
                marginLeft: "100px",
                fontWeight: "bolder",
                fontSize: "80px",
                marginTop: "40px",
                fontFamily:"agraham", 
              }}
              level={3}
            >
              Dress up & <br /> stand Out: <br /> Be Bold
            </Typography.Title>
            <Button 
              type="default"
              style={{
                padding: "10px",
                height: "80px",
                width: "400px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                marginLeft: "100px",
                justifyContent: "center",
                alignItems: "center",
                fontFamily:"bernardo", 
              }}
            >
              <span
                style={{
                  marginLeft: "-50px",
                  fontSize: "30px",
                }}
              >
                Explore Our Deals
              </span>{" "}
              <span
                style={{
                  display: "inline",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowRightOutlined
                  style={{
                    marginLeft: "20px",
                    fontSize: "30px",
                  }}
                />
              </span>
            </Button>
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Image
              preview={false}
              style={{
                backgroundRepeat: "no-repeat",
                marginTop: "29px",
                marginLeft: "20px",
                borderRadius: "15px",
              }}
              src={img1}
            />
          </Col>
        </Row>
      </div>
      <ProductDisplay />
    </div>
  );
};
export default Home;
