import styled from "styled-components";

export const Container = styled.div `
    display:flex;
    flex-direction: column;
    height: 100vh;
    /* align-items: center;
    justify-content:center; */

    header{
        padding:30px ;

        button{
            background-color: var(--color-sand-100);
            border: none;

        }
    }
    
    h1{
            font-size: 70px;
            margin: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

        }


    main{
        display: flex;
        gap:20px;
        align-items: center;
        justify-content:center;



        ul{
            
            width: 500px;
            height: 500px;
            margin: auto;
            h1{
                text-align: center;
            }
            display: flex;
            flex-direction: column;
            .liMap{
                list-style: none;
                display: flex;
                flex-direction: column;
                background-color: aliceblue;
                margin: auto;
                
            

            }
         


            button{
                background-color: var(--color-sand-100);
                border: none;

            }
        }
    }
`
