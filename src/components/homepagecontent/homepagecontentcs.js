import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  background-color: none;
  width: 100%;
  align-items: center;
`;

export const CardContainer = styled.div`
  background-color: none;
  max-width: 1290px;
  margin: 10px auto;
  padding: 10px;
  @media screen and (max-width: 500px) {
    padding: 5px;
  }
`;

export const CardWraapper = styled.div`
  display: block;
  align-items: center;
  background-color: white;
  height: auto;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* &:hover{
        box-shadow: 0 6px 10px 0 rgba(0,0,0,0.5);
    } */

  @media screen and (max-width: 500px) {
    padding: 5px;
  }
`;

export const HeaderText = styled.div`
  .link_class {
    text-decoration: none;
    color: none;
  }
  height: 50px;
  margin-bottom: 5px;
  padding: 0 5px 0 5px;
  border-radius: 3px;
  background-color: white;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const HeaderCircleImg = styled.div`
  .link_class {
    text-decoration: none;
    color: none;
  }
  display: flex;
  background-color: white;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  .imagecard {
    width: 100%;
    border-radius: 50%;
  }
`;

export const MobileShowMore = styled.div`
  .link_class {
    text-decoration: none;
    color: none;
  }
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    height: 50px;
    align-items: flex-start;
    width: auto;
    position: absolute;
    right: 5px;

    p {
      display: flex;
      align-items: center;
      position: relative;
      align-items: center;
      cursor: pointer;

      color: blue;

      text-transform: uppercase;
      font-size: 12px;
      line-height: 14px;
      font-weight: 500;

      white-space: normal;

      border-radius: 3px;
      .header_span {
        margin-right: 5px;
      }
    }
  }
`;

export const ResponsiveHEaderTitle = styled.div`
  display: flex;
  align-items: flex-start;
  width: auto;

  @media screen and (max-width: 500px) {
    justify-self: left;
    flex-direction: column;
    margin-left: 10px;
  }
`;
export const HeaderTitle = styled.div`
  .link_class {
    text-decoration: none;
    color: black;
  }
  position: relative;
  margin-left: 5px;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
export const HeaderItem = styled.div`
.link_class {
    text-decoration: none;
    color: #8e8e8e;
  }
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  margin-left: 5px;
  color: black;
  cursor: pointer;

  span {
    color: #ffa500;
  }

  @media screen and (max-width: 500px) {
    position: relative;
    right: unset;

    h4 {
      color: #8e8e8e;
      font-size: 12px;
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`;

export const CardMain = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  /* justify-content: center; */
  position: relative;

  background-color: white;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardImage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;

  .image {
    width: 100%;
    height: auto;
    object-fit: fill;
    border-radius: 2px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    .image {
      width: 100%;
      height: auto;
    }
  }
`;
export const CardText = styled.div`
  margin-left: 10px;
  width: 100%;
  padding: 10px;

  text-align: center;

  background-color: #f5f5f5;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    max-height: 390px;
    overflow: auto;
    font-size: 25px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 10px 0;

    p {
      max-height: 200px;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 14px;
    }
  }
`;

export const CardNav = styled.div`
  margin-top: 10px;
  padding: 5px;
  height: 50px;
  /* background-color: yellow; */
  border-radius: 3px;
  /* background-color: #F5F5F5; */
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

export const CardNavMobile = styled.div`
  display: none;

  .link_class {
    text-decoration: none;
  }

  p {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;

    color: blue;

    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;

    margin: 0 10px;
    padding: 5px;

    border-radius: 3px;

    .cardnav_mobile_spanicon {
      margin-left: 5px;
    }
  }
  .card_go_up_mobile {
    position: absolute;
    right: 20px;
    font-size: 25px;
    color: #ffa500;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    p {
      margin: 0 5px;
      padding: 0;
    }
  }
`;

export const CardNav_container1 = styled.div`
  .link_class {
    text-decoration: none;
    color: none;
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;

  p {
    display: flex;
    align-items: center;
    cursor: pointer;

    color: blue;

    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;

    margin: 0 10px;
    padding: 5px;

    border-radius: 3px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const CardNav_container2 = styled.div`
  .link_class {
    text-decoration: none;
    color: none;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;

  p {
    display: flex;
    align-items: center;
    cursor: pointer;

    color: blue;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    word-spacing: 3px;

    margin: 0 10px;
    padding: 5px;

    border-radius: 3px;
  }

  .card_go_up {
    font-size: 25px;
    color: #ffa500;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
