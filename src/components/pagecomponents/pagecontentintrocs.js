import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  

  @media screen and (max-width: 1000px){
    padding: 5px;
  }

  .br_show{
    display: block;
  }
  .br_hide{
    display: none;
  }
  .parag_show{
    font-weight: 500;

    .parag_span{
      font-weight: 400;

    }
  }

  .parag_hide{
    display: none;
  }



  .p1 {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 40px;
    color: #6d6d6d;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    .p1_span{
        color: red;
        border-bottom: 0.5px solid grey;
    }
    
  }
  .p2{
      font-size: 17px;
      font-weight: 400;
      line-height: 1.7;
      color: black;
  }

  .short_menu_hide{
    display: none;
  }
  .short_menu{
    margin: 60px 0 0 0;
    width: fit-content;
    /* list-style: none; */

    h3{
      margin-bottom: 15px;
    }
    .short_menu_links{
      background-color: #ccf4ff;
      width: fit-content;
      margin-top: 5px;
      margin-left: 20px;
    }

    .sm_link{
      text-decoration: none;
      color: black;
      cursor: pointer;
      scroll-behavior: smooth;
    }
  }
`;
