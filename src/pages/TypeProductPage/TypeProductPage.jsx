import React from "react";
import { Col, Row } from "antd";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";

const TypeProductPage = () => {
  return (
    <div>
      <Row
        style={{
          padding: "0 120px",
          background: "#efefef",
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <Col
          span={4}
          style={{
            background: "#fff",
            marginRight: "10px",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
          <NavBarComponent />
        </Col>
        <Col span={20}>
          <CardComponent />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
