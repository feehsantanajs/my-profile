import { useState } from "react";
import {Content} from './styles'


interface ContentProps{
    id:string;
}

export function ContentSkills({id}:ContentProps){
    
  
    return(
        <Content>
            {id === 'projects' ? (
                <h2>Project</h2>
            ) : (
                <h2>Skills</h2>
            )}
           
        </Content>
    );
}
