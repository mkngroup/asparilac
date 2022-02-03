import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .alert_none {
    display: none;
  }

  .alert_table_blue {
    margin-top: 50px;
    background-color: #ccf4ff;
    width: 80%;
    position: relative;
    padding: 20px 0 15px 20px;
    border-left: 10px solid #33a0ff;

    @media screen and (max-width: 1000px) {
      width: 100%;
      margin-top: 30px;
    }

    .al_link {
      text-decoration: none;
      color: black;
    }

    h4 {
      margin: 10px 0;
      width: min-content;
    }

    .alert_grid_flex {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      @media screen and (max-width: 1000px) {
        
        grid-template-columns: 50% 50%;
      }
      p {
        margin: 5px 0;
        border-bottom: 0.5px solid grey;
        width: fit-content;

        @media screen and (max-width: 1000px) {
          border-bottom: none;
          grid-template-columns: 50% 50%;
        }
      }
    }
  }
  .alert_table_yellow {
    margin-top: 50px;
    background-color: rgba(255, 229, 100, 0.3);
    width: 80%;
    position: relative;
    padding: 20px 0 15px 20px;
    border-left: 10px solid #ffe564;

    @media screen and (max-width: 1000px) {
      width: 100%;
      margin-top: 5px;
      padding: 10px 5px 10px 5px;
    }

    .al_link {
      text-decoration: none;
      color: black;
    }

    h4 {
      margin: 10px 0;
      width: min-content;
      color: red;
    }

    .alert_grid_flex {
      display: block;

      p {
        margin: 5px 0;
        /* border-bottom: 0.5px solid grey; */
        width: fit-content;
      }
    }
  }
`;
