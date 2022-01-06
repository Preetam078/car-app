import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { Marginer } from "../../marginer";
import { Button } from "../button";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
  flex
  justify-center
  items-center
  rounded-md
  bg-white
  pt-1
  pb-1
  pr-2
  pl-2
  md:pt-3
  md:pb-3
  md:pl-10
  md:pr-10
 `};
`;

const ItemContainer = styled.div`
  ${tw`
  flex relative
 `};
`;

const Icon = styled.span`
  ${tw`
   text-red-500
   fill-current
   text-xs
   md:text-base
   mr-1
   md:mr-3
 `};
`;

const SmallIcon = styled.span`
  ${tw`
  text-gray-700
  fill-current
  text-sm
  md:text-base
  ml-1
 `}
`;

const Name = styled.span`
  ${tw`
 text-gray-500
 text-xs
 md:text-sm
 cursor-pointer
 select-none
`}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;

  ${tw`
  bg-gray-300
  mr-2
  ml-2
  md:mr-5
  md:ml-5
 `}
`;

const DateCalender = styled(Calender)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `}

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export function BookCard() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalenderOpen, setStartCalenderOpen] = useState(false);

  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalenderOpen, setReturnCalenderOpen] = useState(false);

  const toggleStartDateCalender = () => {
    setStartCalenderOpen(!isStartCalenderOpen);
    if (isReturnCalenderOpen) {
      setReturnCalenderOpen(false);
    }
  };

  const toggleReturnDateCalender = () => {
    setReturnCalenderOpen(!isReturnCalenderOpen);
    if (isStartCalenderOpen) {
      setStartCalenderOpen(false);
    }
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalender}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalenderOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalenderOpen && (
          <DateCalender value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalender}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalenderOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalenderOpen && (
          <DateCalender
            offset
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}
