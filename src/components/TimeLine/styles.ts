import styled from "styled-components";

    
export const Container = styled.main`
    border-top:1px dotted #553C9A;

    padding:3rem;
    width:70%;
    margin:0 auto;

    h2{
        font-size: 2rem;
        font-weight: bold;
        position: relative;
        

        margin-bottom: 80px;
        text-align: center;
        
    }
    h2::after{
            position:absolute;
            content: ' ';
            width:8%;
            height:4px;
            left:50%;
            bottom:-5px;
            border-radius: 1rem;
            background-image: linear-gradient(to right, #E6FFFA, #38B2AC);
            transform: translateX(-50%);
        }

    .vertical-timeline{
        padding:0;
        margin-bottom:10rem;
        margin-top:-1rem;
        ;

        .vertical-timeline-element{
            color:var(--gray-900);
           
        }        
    
    }

`
/*
    

    //TimeLine

    .container{
        width:70%;
        height:auto;
        position:relative;
        &::after{
            position: absolute;
            content: ' ';

            width:2px;
            height:100%;

            background-image: linear-gradient(to bottom, #E6FFFA, #38B2AC);
            border-radius: 1rem;
        }
        ul{
            list-style: none;

            li{
                width:50%;
                height:auto;
                padding:15px 20px;

                background-color:var(--white);
                color:var(--gray-900);

                box-shadow: 1px 1px 25px rgb(0, 0, 0, 0.384);
                border-radius: 0.4rem;
                margin-bottom:30px;

                &:nth-child(odd){
                   float:left;
                   clear:right;

                   transform: translateX(-30px);
                }
                &:nth-child(even){
                    float:right;
                    clear:left;
                    transform: translateX(30px);
                }
            }
        }

    }
`*/