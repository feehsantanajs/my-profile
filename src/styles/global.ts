import styled,{createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{

        --white: #FFFFFF;
        --black: #000000;

        --cyan: #065666;

        --purple-100: #E9D8FD;
        --purple-900: #322659;

        --gray-100: #EDF2F7;
        --gray-400: #A0AEC0;
        --gray-500: #718096;
        --gray-700: #2D3748;
        --gray-800: #1A202C;
        --gray-900: #171923;

        

    }
    *{
        margin:0rem;
        padding:0rem;
        box-sizing: border-box;

        
    }
    html{
        scroll-behavior: smooth;

        @media(max-width:1080px){
            font-size:93.75%;
        }
        @media(max-width:720px){
            font-size:87.5%;
        }
    }

    body{
        background: linear-gradient(-45deg, #D53F8C, #805AD5, #00B5D8);
        background-size: 400% 400%;
    
        height: 100vh;
        width: 100%;
        position:relative;
        animation:change 10s infinite;
    }

    @keyframes change {
        0%{   
            background-position:0 50%;
        }   
        50%{   
            background-position:100% 50%;
        }   
        100%{   
            background-position:0 50%;
        }   
        
    }
    body,button,input,textarea{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color:var(--white);
        
    }

    a{
        text-decoration: none;
        color:var(--gray-900)
    }
       
    
  
   
`;
export const Container = styled.div`
    
    margin:2rem auto;
    padding:3rem;
    width:75%;
    

    display:flex;
    justify-content: space-between;
    align-items: center;


`