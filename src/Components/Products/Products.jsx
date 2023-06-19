import React, { useState, useEffect } from "react";
import { ApiCall, getProductByCategory } from "../API/ApiCall";
import { Card, List, Image, Typography, Badge, Layout, Spin } from "antd";
import AddToCart from "./addToCart/AddToCart";
import { useParams } from "react-router-dom";

const Products = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductByCategory(params.categoryId).then((res) => {
      setItems(res.products);
      setLoading(false);
    });
  }, [params]);

  if (loading) {
    return (
      <Spin
        size="large"
        tip="Loading.."
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "300px",
        }}
      />
    );
  }
  return (
    <Layout>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Badge.Ribbon text={product.discountPercentage}>
              <Card
                style={{ margin: "20px" }}
                title={product.title}
                key={index}
                cover={<Image.PreviewGroup className="card_image"> <Image src={product.thumbnail} /> </Image.PreviewGroup>}
              >
                <Card.Meta
                  title={
                    <Typography.Paragraph>
                      INR {product.price} /-{" "}
                      <Typography.Text delete type="danger">
                        {parseFloat(
                          product.price +
                            (product.price + product.discountPercentage / 100)
                        ).toFixed(2)}
                      </Typography.Text>
                    </Typography.Paragraph>
                  }
                  description={
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                    >
                      {product.description}
                    </Typography.Paragraph>
                  }
                ></Card.Meta>
                <div>
                  <AddToCart product={product} />
                </div>
              </Card>
            </Badge.Ribbon>
          );
        }}
        dataSource={items}
      ></List>
    </Layout>
  );
};

export default Products;
