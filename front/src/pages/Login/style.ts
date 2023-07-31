import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    height: 100vh;

    main{
        display: flex;
        gap:20px;
        background-color: var(--color-sand-100);
        flex-direction: row;
        margin: auto;

        .sectionImg{
            .logo{
                width:800px;
            }
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50%;
        }

        
        .sectionText{
            flex-direction: column;
            display: flex;
            align-items: center; 
            justify-content: center;
            width: 50%;

            

            .titleLogin{
                text-align: start;
                font-family: 'Inria Serif', serif;
            }

            form{
                display: flex;
                flex-direction: column;
                width: 358px;
                height: 414px;
                background-color: var(--color-sand-light-200);
                border-radius: 15px;
                align-items: center;
                padding: 50px;
                margin-bottom: 10px;

                

                div{
                    margin: 10%;
                    font-family: 'Inria Serif',serif;
                    font-weight: bold;
                    font-size: 1.6rem;

                    

                    label{
                        text-align: start;
                        justify-content: flex-start;
                        display: flex;
                        font-family: 'Inria Serif',serif;
                    }
                    

                    input{
                        background-color: var(--color-white-300);
                        width: 322px;
                        height: 50px;
                        border-radius: 15px;
                        border: none;
                    }



                }
                

                button{
                    width: 166px;
                    height: 49px;
                    background-color: var(--color-sand-100);
                    border-radius: 15px;
                    font-size: 17.5px;
                    cursor: pointer;
                    font-family: 'Inria Serif', serif;
                    border:none;

                }



            }
            span{
            font-family: 'Inria Serif', serif;}

                
            .btnCadastrar{
                width: 166px;
                height: 49px;
                background-color: var(--color-white-300);
                border-radius: 15px;
                font-size: 17.5px;
                font-family: 'Inria Serif',serif;
                border: none;
                margin-top: 10px;

            }


            





        }





    }

`;