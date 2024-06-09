import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendPropertyCard from "./TrendPropertyCard";

const TrendProperties = ({ initialInput, ...props }: any) => {
  const [trendProperties, setTopProperties] = useState<number[]>(initialInput);

  return (
    <Stack className="trend-properties">
      <Stack className="container">
        <Stack className="info-box">
          <Box className="left">
            <span>Trend Properties</span>
            <p>Trend is based on likes</p>
          </Box>
          <Box className="right">
            <div className="pagination-box">
              <WestIcon className="swiper-trend-prev" />
              <div className="swiper-trend-pagination"></div>
              <EastIcon className="swiper-trend-next" />
            </div>
          </Box>
        </Stack>
        <Stack className="card-box">
          {trendProperties.length === 0 ? (
            <Box className="empty-list">Trends Empty</Box>
          ) : (
            <Swiper
              className="trend-property-swiper"
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{ el: ".swiper-trend-pagination", clickable: true }}
            >
              {trendProperties.map((property, index) => (
                <SwiperSlide key={index} className="trend-property-slide">
                  <TrendPropertyCard />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
TrendProperties.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 71],
};
export default TrendProperties;
