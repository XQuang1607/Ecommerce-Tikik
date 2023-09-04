import React from "react";
import { Col, Pagination, Row } from "antd";
import NavBarComponent from "../../components/NavBarComponent/NavBarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = () =>{}
  return (
    <div style={{padding: "0 120px", background: "#efefef", height: '1000px'}}>
      <Row style={{ flexWrap: "nowrap", paddingTop: "10px", }} >
        <WrapperNavbar span={4}>
          <NavBarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
