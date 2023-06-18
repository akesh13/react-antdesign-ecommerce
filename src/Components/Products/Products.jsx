import React, { useState, useEffect } from "react";
import { ApiCall } from "../API/ApiCall";
import { Card, List, Image, Typography } from "antd";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    ApiCall().then((res) => {
      setItems(res.products);
    });
  }, []);

  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Card className="card"
              title={product.title}
              key={index}
              cover={<Image className="card_image" src={product.thumbnail} />}
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
                description={<Typography.Paragraph
                  ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                >
                  {product.description}
                </Typography.Paragraph>}
              ></Card.Meta>
            </Card>
          );
        }}
        dataSource={items}
      ></List>
    </div>
  );
};

export default Products;
