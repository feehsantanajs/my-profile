import { Container } from "./styles";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


interface BottomContainerProps{
    clarityBottom:boolean;
}
export function BottomContainer({clarityBottom}:BottomContainerProps ){    
    return(
        <Container className={clarityBottom ? 'white' : '' }>
         
                <section className='linksContent'>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/feelipesantana/"><FaLinkedin /> Linkedin</a></li>
                        <li><a href="https://github.com/feelipesantana"><FaGithub /> Github</a></li>
                        <li><a href="https://twitter.com/FelipeS41695084"><FaTwitter /> Twitter</a></li>
                    </ul>
                </section>

                <section className="accessibilitys">
                    <div className="darkmode">
                        Change
                    </div>
                    <div className="languages">
                        Languages
                    </div>
                </section>
           
        </Container>
    );
}