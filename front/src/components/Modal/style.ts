
import styled from "styled-components";

export const Container = styled.div`
  top: 0;
   background-color: var( --color-sand-light-300);
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  .formAdd {
    background-color:  var(--color-sand-100);
    padding: 20px;
    box-shadow: 0  0 25px 0 rgba(0,0,0,.25); 
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    label{
        background-color:  var(--color-sand-100);
        margin: 5px;


    }
    



    input{
        background-color: aliceblue;
        border: none;
        border-radius: 5px;

    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;

        button{
        margin: 10px;
        background-color: var(--color-sand-light-200);
        border: none;
        border-radius: 5px;
        width: 90px;
        height: 50px;
        display: flex;
        align-items: center;


    }
    }
   
}

    


  
`