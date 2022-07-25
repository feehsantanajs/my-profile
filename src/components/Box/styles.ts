import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    border:1px solid white;
    border-radius: 0.4rem;
    transform:scale(0.9);
    
    width:30rem;
    height: 10rem;

    background-color:#FAF5FF;
    color:var(--gray-900);

    cursor: pointer;
    
    
    

    &:hover{
        transform:scale(1);
        transition: 0.2s
    }
`;