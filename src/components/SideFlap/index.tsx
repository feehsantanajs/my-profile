

import { Box } from "../Box";
import { Container , LinkContent} from "./styles";
import { Link} from 'react-scroll';


interface SideFlapProps{
    handleOpenModalProject: () => void
    handleOpenModalSkills: () => void
} 
export function SideFlap(props:SideFlapProps){
    return(
   
       <Container>
            <Link activeClass="active" className="education" to="education" spy={true} smooth={true} duration={500} ><Box title="Education"  /></Link>
            <Link activeClass="active" className="proexperence" to="proexperence" spy={true} smooth={true} duration={500} ><Box title="Profissional Experence" /></Link>
            <LinkContent href="#" onClick={props.handleOpenModalProject} id="projects"><Box title="My Projcts" /></LinkContent>
            <LinkContent href="#" onClick={props.handleOpenModalSkills} id="skills"><Box title="Skills" /></LinkContent> 
        </Container>

    
    )
}