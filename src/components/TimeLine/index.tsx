import { Container} from "./styles";

import {experenceElements, educationElements} from "../../services/api/api";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import {ReactComponent as WorkImg} from '../../assets/work.svg';
import {ReactComponent as SchoolImg} from '../../assets/school.svg';

import "react-vertical-timeline-component/style.min.css";
import { Element, animateScroll as scroll} from 'react-scroll';


export function TimeLine(){

    let workIconStyles = {background:"#06D6A0"}
    let schoolIconStyles = {background:"#f9c74f"}
    
    
    experenceElements.sort(function(a, b) { 
        return a.id - b.id 
      });
    return(
        
            <Container >            
               <Element name="education" className="element" >
                    <h2> Education </h2>
                
                    <VerticalTimeline >
                        {
                            educationElements.map((el:any)=>{                      
                                let isWorkIcon = el.icon === 'work';
                            

                                return(  
                                                    
                                    <VerticalTimelineElement 
                                        key={el.id}
                                        date={el.date}
                                        className="date"
                                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                        icon={ <SchoolImg />}
                                        textClassName={ el.decription }
                                    >

                                        <h3 className="vertical-timeline-element-title">
                                            {el.title}
                                        </h3>
                                        <h5 className="vertical-timeline-element-subtitle" >
                                            {el.local}                            
                                        </h5>
                                        <p> 
                                            {el.description}  
                                        </p>                                
                                    

                                    </VerticalTimelineElement>  
                                        
                                )
                            })
                        }
                    </VerticalTimeline>
                </Element>
                <Element name="proexperence" className="element" >
                    <h2> Profissional Experience </h2>
                
                    <VerticalTimeline >
                        {
                            experenceElements.map((el:any)=>{                      
                                let isWorkIcon = el.icon === 'work';
                                

                                return(  
                                                    
                                    <VerticalTimelineElement 
                                    
                                        key={el.id}
                                        date={el.date}
                                        className="date"
                                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                        icon={ <WorkImg />}
                                        textClassName={ el.decription }
                                    >

                                        <h3 className="vertical-timeline-element-title">
                                            {el.title}
                                        </h3>
                                        <h5 className="vertical-timeline-element-subtitle" >
                                            {el.company}                            
                                        </h5>
                                        <p> 
                                            {el.description}  
                                        </p>                                
                                        

                                    </VerticalTimelineElement>  
                                        
                                )
                            })
                        }
                    </VerticalTimeline>
                </Element>
            </Container >
        
        /*
            <h2> Experience </h2>
            <div className="container">
                <ul>
                    <li>
                        <h3 className="office"> Estagiário de programação</h3>
                        <h5 className="company"> K2Media</h5>
                         <time>jan/2013</time> - <time>junho/2013</time> 
                        <p>
                            - Criação e atualização de WebSites
                            - Programador HTML, CSS, JavaScript, Jquery, PHP, Banco de Dados Mysql 
                        </p>                        
                        <span className="circle"></span>
                        
                    </li>
                    <li>
                        <h3 className="office"> Estagiário de programação</h3>
                        <h5 className="company"> K2Media</h5>
                        <time>jan/2013</time> - <time>junho/2013</time> 
                        <p>
                            - Criação e atualização de WebSites
                            - Programador HTML, CSS, JavaScript, Jquery, PHP, Banco de Dados Mysql 
                        </p>                        
                        <span className="circle"></span>
                        
                    </li>
                    <li>
                        <h3 className="office"> Estagiário de programação</h3>
                        <h5 className="company"> K2Media</h5>
                        <time>jan/2013</time> - <time>junho/2013</time> 
                        <p>
                            - Criação e atualização de WebSites
                            - Programador HTML, CSS, JavaScript, Jquery, PHP, Banco de Dados Mysql 
                        </p>                        
                        <span className="circle"></span>
                        
                    </li>
                    <li>
                        <h3 className="office"> Estagiário de programação</h3>
                        <h5 className="company"> K2Media</h5>
                        <time>jan/2013</time> - <time>junho/2013</time> 
                        <p>
                            - Criação e atualização de WebSites
                            - Programador HTML, CSS, JavaScript, Jquery, PHP, Banco de Dados Mysql 
                        </p>                        
                        <span className="circle"></span>
                        
                    </li>
                </ul>
            </div>
            
            
        </Container >*/
    )
}