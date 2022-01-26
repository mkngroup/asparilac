import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;

  h3 {
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    &:hover{
        .fason_header_icon{
            display: block;
        }
    }

    .fason_header_icon{
        display: none;
        position: absolute;
        left: 18px;
        font-size: 15px;
        color: grey;
        margin-top: 5px;
    }
  }
  .fason_link{
    text-decoration: none;
    color: black;
  }

  .fason_text{
    margin-bottom: 15px;
  }

  .index_ul{
    
    width: fit-content;

    .ul_items{
      background-color: #FFF7D0;
      width: fit-content;
      margin-top: 5px;
      margin-left: 20px;
    }
  }
`;
