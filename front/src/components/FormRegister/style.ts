import styled from "styled-components";


export const Container = styled.div `
    display:flex;
    flex-direction: row;
    height: 100vh;
    align-items: center;
    justify-content: center;

    main{
        display: flex;
        gap:20px;
        align-items: center;
        justify-content: center;
        background-color: var(--color-sand-100);
        flex-direction: column;
        margin: auto;

        h2{
            text-align: start;
            font-family: 'Inria Serif', serif;
            font-weight: bold
        }

        .sectionText{
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    

    

      
        
        form{
            display: flex;
            flex-direction: column;
            width: 358px;
            height: 460px;
            background-color: var(--color-sand-light-200);
            border-radius: 15px;
            align-items: center;
            padding: 50px;
            margin-bottom: 10px;
           

            div{
                margin: 2%;

            }

            input{
                background-color: var(--color-white-300);
                width: 322px;
                height: 50px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
               padding: 12px 16px 14px;
               border: none;
                


                
            }

            label{
                text-align: start;
                justify-content: flex-start;
                display: flex;
                font-family: 'Inria Serif', serif;
                margin: 3px;

            }

            button{
                width: 166px;
                height: 49px;
                background-color: var(--color-sand-100);
                border-radius: 15px;
                font-size: 17.5px;
                cursor: pointer;
                font-family: 'Inria Serif', serif;

            }


        }
     
        .btnRegister{
            width: 150px;
            height: 40px;
            padding: 10px;
            background-color: var(--color-sand-100);
            border-radius: 5px;
            font-size: 17.5px;
            cursor: pointer;
            font-family: 'Inria Serif', serif;
            margin-top:10px ;
            border: none;


        }
    }


    }
`