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
        /* align-items: center; */
        /* justify-content:center; */


        .divMain{
            
            /* width: 500px;
            height: 500px; */
            /* display: flex;
            align-items: flex-start;
            justify-content: flex-start; */
            flex-direction: column;

            margin: auto;
            h1{
                /* text-align: center; */
                font-size: 70px;
                /* margin: 50px; */
            }
            img{
                margin:15px;
            }


            button{
                background-color: var(--color-sand-100);
                border: none;

            }
            .divMap{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: end;

                img{
                    width: 40px;
                    height: 38px;
                    
                }
                h1{
                    width: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .divOrgDados{
                    display: flex;
                    align-items: start;
                    flex-direction: column;
                    /* justify-content: center; */
                    .divDados{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }

                }
               
            }
        }
    }
`
