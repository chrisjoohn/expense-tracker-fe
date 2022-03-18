import { DateRangePicker } from "react-date-range";
import { useState, useEffect, createRef } from "react";
import moment from "moment";
import styled from "styled-components";
import useOutsideClickDetector from "utils/detectOutsideClickUtil";

import { ChevronUp, Chevrondown } from "icons";

const Wrapper = styled.div`
  position: absolute;
  left: 15%;
  top: 10%;
  z-index: 1;
`;

const SpanContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  background-color: white;
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const CalendarWrapper = styled.div``;

const chevronStyles = { height: "15px", marginTop: "5px", marginLeft: "10px" };

const DatePicker = (props) => {
  const { changeHandler, dateRange } = props;

  const containerRef = createRef(null);
  const [dateText, setDateText] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  useOutsideClickDetector(containerRef, () => setShowDatePicker(false));

  useEffect(() => {
    const { startDate, endDate } = dateRange[0];
    const startDateText = moment(startDate).format("MM/D/YYYY");
    const endDateText = moment(endDate).format("MM/D/YYYY");

    setDateText(startDateText + " - " + endDateText);
  }, [dateRange]);

  return (
    <Wrapper ref={containerRef}>
      <SpanContainer
        onClick={() => setShowDatePicker(!showDatePicker)}
        className="no-hightlights"
      >
        <span>{dateText ? dateText : moment().format("MMMM")}</span>
        {showDatePicker ? (
          <ChevronUp style={chevronStyles} />
        ) : (
          <Chevrondown style={chevronStyles} />
        )}
      </SpanContainer>
      <CalendarWrapper>
        {showDatePicker && (
          <DateRangePicker
            ranges={dateRange}
            onChange={changeHandler}
            months={2}
            direction="horizontal"
            showSelectionPreview={true}
            moveRangeOnFirstSelection
            color="#01bfa6"
          />
        )}
      </CalendarWrapper>
    </Wrapper>
  );
};

export default DatePicker;
