
import { useEffect, useState } from 'react';


import { GlobalStyle, Container} from "./styles/global";
import { Header } from "./components/Header";
import { SideFlap } from "./components/SideFlap";
import { TimeLine } from "./components/TimeLine";
import { ModalBlock } from './components/Modal';
import { BottomContainer } from './components/BottomContainer';


interface AppProps{
  type:string
}
export function App() {
  const [isModalOpen , setIsModalOpen ] = useState(false);
  const [type , setType ] = useState('');
  
  function handleOpenModalProject(){
    setType('projects')  
    setIsModalOpen(true)
      
  }
  function handleOpenModalSkills(){
    setType('skills')  
    setIsModalOpen(true)
      
  }
  function handleCloseModal(){    
    setIsModalOpen(false)
  }
  const [clarityBottom, setClarityBottom] = useState(false)
  useEffect(() =>{    
    
    const scrollListener = ()=>{
      
      if(window.scrollY > 100){
        setClarityBottom(true)
      }
      else{
        setClarityBottom(false)
      }
    }

    window.addEventListener('scroll',scrollListener)

    return ()=> {
      window.removeEventListener('scroll',scrollListener)
    }
  }, [])
  return (
    
    <>
      <GlobalStyle />
      <Container>
          <Header />
          <SideFlap handleOpenModalSkills={handleOpenModalSkills} handleOpenModalProject={handleOpenModalProject}/>
      </Container>      
      
      <ModalBlock isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} value={type} />

      <TimeLine />
      <BottomContainer clarityBottom={clarityBottom} />
    </>
  );
}
