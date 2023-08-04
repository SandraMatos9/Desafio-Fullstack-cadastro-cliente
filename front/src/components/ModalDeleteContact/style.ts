import styled from "styled-components";

export const ContainerDelete = styled.div`
  top: 0;
  /* background-color: rgba(0, 0, 0, .5); */
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    background-color: yellow;
    flex-direction: column;
   
    width: 50%;
    max-width: 250px;
    .btnDelete{
        margin: 10px;
        background-color: var(--color-sand-light-200);
        border: none;
        border-radius: 5px;
        width: 90px;
        height: 50px;
        display: flex;
        align-items: center;
        color: red;
    }

   
        
    
    
}

    


  
`