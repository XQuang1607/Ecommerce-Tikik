import React from "react";
import {Image} from 'antd';
import { WrapperSliderStyle } from "./style";

const SliderComponent = ({arrayImage}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <WrapperSliderStyle {...settings}>
    {arrayImage.map((image)=>{
        return(
            <Image key={image} src={image} alt="slider" preview={false} width="100%" height="274px"/> //preview: khi click vao anh
        )
    })}
  </WrapperSliderStyle>
  );
};

export default SliderComponent;
