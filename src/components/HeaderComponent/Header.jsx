import React from "react";
import { Badge, Col } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperAccountHeader,
  WrapperTextHeaderSmall,
} from "./style";
import Search from "antd/es/input/Search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }

  return (
    <div style={{  heiht: '100%', width: '100%', display: 'flex', backgroundColor: "rgb(26,148,255)" ,justifyContent: 'center' }}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>TIKIK</WrapperTextHeader>
        </Col>
        <Col span={13} >
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="input search text"
            bordered={false}
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "54px", alignItems: 'center' }}>
          <WrapperAccountHeader>
            <UserOutlined style={{ fontSize: "30px" }} />
            {user?.name ? (
              <div style={{ cursor: 'pointer' }}>{user.name}</div>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                <div>
                  <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperAccountHeader>
          <div>
            <Badge count={4} size="small">
             <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default Header;
