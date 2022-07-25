import styled from 'styled-components'

export const Container = styled.header`
    
   
    display: flex;
    flex-direction: column;
    
    height:50rem;    
    width:50%;
    
    h2{
        margin-top:1rem;

        font-weight:700;
        font-size:2.2rem;
        line-height: 4rem;

       
        background-image: linear-gradient(-45deg,#E6FFFA, #81E6D9);
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        display: inline-block;
            
    }
    p{
        margin-top:4rem;
        line-height: 2rem;
    }
   
    .image{
       filter: brightness(1.2);

        width:50%;
        height:40%;

        border-radius:100%;
        box-shadow: 0.1px 0.1px 4px var(--gray-800);
        
        overflow: hidden;

        display:flex;
        align-items: center;
        justify-content: center;
        
    }
`