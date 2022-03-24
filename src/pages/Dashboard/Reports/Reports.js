import styled from "styled-components";
import BarChart from "components/Charts/BarChart";
import Select from "components/Inputs/Select";

const StyledH1 = styled.h1`
  padding-top: 30px;
  margin-left: 15%;
  color: #0ca;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ChartContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const SorterContainer = styled.div`
  align-self: flex-start;
  display: flex;
  padding: 10px;
  z-index: 2;
`;

const options = [
  { value: "year", placeholder: "Year" },
  { value: "quarter", placeholder: "Quarter" },
  { value: "month", placeholder: "Month" },
  { value: "week", placeholder: "Week" },
];

const Reports = (props) => {
  return (
    <>
      <StyledH1>Reports</StyledH1>

      <ContentWrapper>
        <ContentContainer>
          <SorterContainer>
            <Select placeholder="Sort by: " options={options} />
          </SorterContainer>
          <ChartContainer>
            <BarChart />
          </ChartContainer>
        </ContentContainer>
      </ContentWrapper>
    </>
  );
};

export default Reports;
