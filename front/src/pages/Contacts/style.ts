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
            flex-flow: row wrap;
            gap: 50px;
            
            h1{
                text-align: center;
            }
            display: flex;
            flex-direction: column;
            .liMap{
                width: 250px;
                list-style: none;
                display: flex;
                flex-direction: column;
                margin: auto;
                gap:5px;
                div{
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    margin: 5px;
                }
                img{
                    width: 15px;
                }
                
            

            }
         


            button{
                background-color: var(--color-sand-100);
                border: none;

            }
        }
    }
`
