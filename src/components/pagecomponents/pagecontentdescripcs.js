import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;

  h3 {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    &:hover {
      .con_icons {
        display: block;
      }
    }

    .con_icons {
      display: none;
      position: absolute;
      left: 18px;
      font-size: 15px;
      color: grey;
      margin-top: 5px;
    }
  }
  .con_links {
    text-decoration: none;
    color: black;
  }

  .parag {
    margin-bottom: 30px;
  }
`;
