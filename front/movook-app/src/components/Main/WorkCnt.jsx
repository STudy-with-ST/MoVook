import React from "react";
import styled from "styled-components";

const WorkCnt = () => {
  return (
    <Wrapper>
      <CntWrapper>
        <label>감상한 총 작품</label>
        <NumWrapper>
          <Flag color={"#755fa3"} />
          <Number>6</Number>
        </NumWrapper>
      </CntWrapper>
      <CntWrapper>
        <label>읽은 책</label>
        <NumWrapper>
          <Flag color={"#F3A75D"} />
          <Number>3</Number>
        </NumWrapper>
      </CntWrapper>
      <CntWrapper>
        <label>시청한 영화</label>
        <NumWrapper>
          <Flag color={"#F65859"} />
          <Number>3</Number>
        </NumWrapper>
      </CntWrapper>
    </Wrapper>
  );
};

export default WorkCnt;

const Wrapper = styled.div`
  display: flex;
  height: 4.5rem;
  justify-content: space-between;
  padding: 0px 15%;

  // border: 1px solid red;
`;

const CntWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // border: 1px solid green;
`;

const NumWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 3px 0px 0px 0px;
`;

const Flag = styled.div`
  border: 3px solid ${(props) => props.color};
  height: 100%;
  width: 1px;
  margin: 0px 5px 0px 0px;
`;

const Number = styled.h2`
  font-family: S-CoreDream-6Bold;
  font-size: 300%;
`;
