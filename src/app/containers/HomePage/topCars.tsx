import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Icar } from "../../../typings/car";
import Car from "../../components/car";

const TopCarsContainer = styled.div`
  ${tw`
   max-w-screen-lg
   w-full
   flex
   flex-col
   justify-center
   pr-4
   pl-4
   md:pl-0
   md:pr-0
   mb-10
 `}
`;

const Title = styled.h2`
  ${tw`
  text-xl
  lg:text-4xl
  text-black
  font-extrabold
 `}
`;

const CarsContainer = styled.div`
  ${tw`
  w-full
  flex
  flex-wrap
  justify-center
  mt-7
  md:mt-10
 `}
`;

function TopCars() {
  const testCar1: Icar = {
    name: "audi a3",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: Icar = {
    name: "audi a3",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Car {...testCar1} />
        <Car {...testCar2} />
        <Car {...testCar2} />
      </CarsContainer>
    </TopCarsContainer>
  );
}

export default TopCars;
