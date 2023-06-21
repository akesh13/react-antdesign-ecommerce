import React from "react";
import { Col, Menu, Row } from "antd";
import { HomeFilled, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";


function Header() {
  const navigate = useNavigate();
  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div>
    <Menu
    style={{padding:"20px" }}
      onClick={onMenuClick}
      mode="horizontal"
      theme="dark"
      items={[
        {
          label: <HomeFilled />,
          key: "",
        },
        {
          label: "For Him",
          key: "he",
          children: [
            {
              label: "Top Wear",
              key: "mens-shirts",
            },
            {
              label: "Apparels",
              key: "mens-shoes",
            },
            {
              label: "Skincare",
              key: "skincare",
            },
          ],
        },
        {
          label: "For Her",
          key: "she",
          children: [
            {
              label: "Top Wear",
              key: "womens-dresses",
            },
            {
              label: "Apparels",
              key: "womens-jewellery",
            },
            {
              label: "Tank Tops",
              key: "tops",
            },
          ],
        },
        {
          label: "Accessories",
          key: "accessories",
          children: [
            {
              label: "Perfumes",
              key: "perfumes",
            },
            {
              label: "Other accessories",
              key: "otherAccessories",
            },
          ],
        },
      ]}
    >
      </Menu>
      <ShoppingCartOutlined style={{fontSize:""}} />
      

    
   
    </div>
  );
}

export default Header;
