// CrowdGraph.js
import React from "react";
import styled from "styled-components";

const CrowdGraph = ({ data }) => {
    return (
        <GraphContainer>
            <GraphTitle>요일별 인근 지역 혼잡도</GraphTitle>
            <GraphLegend>
                <LegendItem style={{color : "#ED685A"}}><LegendDot color="#ED685A" /> 현지인</LegendItem>
                <LegendItem style={{color : "#E9AE5F"}}><LegendDot color="#E9AE5F" /> 외지인</LegendItem>
                <LegendItem style={{color : "#DC5C49"}}><LegendDot color="#DC5C49" /> 외국인</LegendItem>
            </GraphLegend>
            <GraphGrid>
                <GridLines>
                    {[...Array(6)].map((_, i) => (
                        <Line key={i} position={(5 - i) * 20} label={i * 5} />
                    ))}
                </GridLines>
                {data.map((day, index) => (
                    <GraphColumn key={index}>
                        {/* 모든 타입에 대한 원 표시 */}
                        {day.crowd.map((item, i) => (
                            <Dot
                                key={i}
                                color={item.color}
                                value={item.value}
                            />
                        ))}
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
    padding: 0px; 20px;
    padding-top: 10px;
    margin-bottom : 18px;
`;

const GraphTitle = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-bottom : 6px;
`;

const GraphLegend = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`;

const LegendItem = styled.div`
    margin: 0 5px;
    display: flex;
    align-items: center;
    font-size : 8px;
`;

const LegendDot = styled.span`
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid ${({ color }) => color};
    margin-right: 3px;
`;

const GraphGrid = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    height: 120px; /* 전체 높이를 120px로 제한 */
`;

const GraphColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Dot = styled.div`
    position: absolute;
    bottom: ${({ value }) => value === 0 ? '20px' : value * 80 / 25 + 20 + 'px'}; /* Position based on value with scaling */
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1.5px solid ${({ color }) => color}; /* Set the border color */
    background-color: transparent; /* Make the background transparent */
`;


const DayLabel = styled.div`
    position: absolute;
    top: 100%;
    margin-top: 18px;
    font-size: 0.875rem;
    color: #ed685a;
`;

const GridLines = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: none;
`;

const Line = styled.div`
    position: relative;
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    
    &::after {
        position: absolute;
        left: -20px;
        top: -10px;
        font-size: 0.75rem;
        color: #888;
    }
`;
