import styled from "styled-components";

export const MobilePageContainer = styled.div`
  display: flex;
  width: 100%;
  .right_container {
    position: relative;
    margin-left: 30px;
    width: 100%;
    overflow-y: hidden;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  overflow: auto;
`;

export const Maincontent = styled.div`
  padding: 40px;
  width: 100%;
`;
