import styled from "styled-components";
import BarChart from "components/Charts/BarChart";

const StyledH1 = styled.h1`
  padding-top: 30px;
  margin-left: 15%;
  color: #0ca;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ChartContainer = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Reports = (props) => {
  return (
    <>
      <StyledH1>Reports</StyledH1>
      <ContentContainer>
        <ChartContainer>
          <BarChart />
        </ChartContainer>
      </ContentContainer>
    </>
  );
};

export default Reports;
