
import { Container } from "./styles";

import profileImg from '../../assets/profile.png'

export function Header(){
    return(
        <Container>
            <div className="image">
                <img src="https://github.com/feelipesantana.png" alt="Felipe Santana Imagem"  width="100%" height="100%" />
            </div>
            <h2>Hi everyone,<br /> I'm Felipe Santana | Web Developer</h2>

            <p>Good, now how could i speak about me... humm,<br />
            I am a very determined, determined person, 
            committed to my goals and objectives. 
            I try every day to be reinventing myself to be able to add 
            the best in the company where I work and the people around me.
            I'm always looking day after day to get out of my comfort zone 
            in order to evolve, grow professionally and mentally. 
            I know that success only depends on my effort and dedication, 
            every day I overcome my barriers, change my limiting 
            beliefs so I can achieve my dreams and my success.
            </p>
        </Container>
        

    );
}