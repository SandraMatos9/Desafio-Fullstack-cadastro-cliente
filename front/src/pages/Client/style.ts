import styled from "styled-components";

export const Container = styled.div `
    display:flex;
    flex-direction: column;
    height: 100vh;
    /* align-items: center;
    justify-content:center; */
    header{
        padding:30px ;
       justify-content: end;
       display: flex;
       margin-right: 15px;

        button{
            background-color: var(--color-sand-100);
            border: none;

        }
    }

    main{
        display: flex;
        gap:20px;
        align-items: center;
        justify-content:center;


        div{
            
            width: 500px;
            height: 500px;
            margin: auto;
            h1{
                text-align: center;
            }
            img{
                margin:15px;
            }


            button{
                background-color: var(--color-sand-100);
                border: none;

            }
        }
    }
`
