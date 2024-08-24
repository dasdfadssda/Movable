import React from "react";
import styled from "styled-components";

const CrowdGraph = ({ data }) => {
    return (
        <GraphContainer>
            <GraphTitle>요일별 인근 지역 혼잡도</GraphTitle>
            <GraphImage src={require('../../../../Assets/Map/graphs.png')} />
            <GraphGrid>
                {data.map((day, index) => (
                    <GraphColumn key={index}>
                        <DayLabel>{day.day}</DayLabel>
                    </GraphColumn>
                ))}
            </GraphGrid>
        </GraphContainer>
    );
};

export default CrowdGraph;

// Styled Components for the Graph
const GraphContainer = styled.div`
    width: 100%;
    padding-top: 20px;
    margin-bottom: 18px;
`;

const GraphTitle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
`;

const GraphImage = styled.img`
    width: 340px;
    height: auto;
    display: block;
`;

const GraphGrid = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
`;

const GraphColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DayLabel = styled.div`
    font-size: 0.875rem;
    color: #ed685a;
`;

