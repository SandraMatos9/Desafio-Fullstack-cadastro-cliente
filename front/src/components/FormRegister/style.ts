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
    

    
        
    }


    }
`