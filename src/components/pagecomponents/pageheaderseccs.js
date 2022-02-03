import styled from "styled-components";

export const MobileHeaderContainer = styled.div`
  position: relative;
  .container {
    height: fit-content;
    .header_image {
      position: relative;
      width: 100%;
      height: auto;
      opacity: 0.3;
    }

    .header_text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      font-size: 25px;
      line-height: 1;

      text-align: center;

      width: 100%;

      color: black;
      

      p {
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #759956;
  height: 250px;

  h1 {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 60px;
    margin-right: 200px;

    p {
      font-size: small;
      color: black;
    }
  }
`;
