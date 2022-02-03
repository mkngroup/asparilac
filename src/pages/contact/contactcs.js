import styled from "styled-components"

export const Container = styled.div ` 
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .wrapper{
        display: grid;
        grid-template-columns: 50% 50%;

        .image_container{
            
            margin: 25px;

            img{
                width: 50%;
                height: 50%;
            }
        }
        
    }
`;