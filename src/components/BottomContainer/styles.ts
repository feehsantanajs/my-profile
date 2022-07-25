import styled from "styled-components";

export const Container = styled.footer`

    position:fixed;
    bottom:0;
    right:0;
    left:0;
    height:4rem;
    
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    
    background:var(--white);
    opacity: 0.9;
    border-top: 1px solid var( --purple-900);
    transition: opacity 0.25s;
    &.white{
        opacity: 0.4;
    }
          
        .linksContent{
        
        grid-column-start:2;
        margin:0 auto;
        display:flex;
        align-items: center;

        ul{
            
           display:flex;
           justify-content: space-between;
           align-items: center;
     
           
            width:25rem;
            height:100%;
            list-style: none;
            li{
                width:100%;
                display: flex;
                justify-content: center;
                a{  
                    display:flex;
                    align-items: center; 
                    gap:0.5rem;  
                    transition:filter 0.3s;
                    
                    &:hover{
                      color:var(--purple-900);
                      filter:brightness(2)
                    }
                }
            
            }
        }
    }
   
   
    .accessibilitys{
        
        width:8rem;
        float:right;

        
       
    }

    
`

