import React, {useState} from 'react'
import { Container } from "./styles";

import knocksound from '../../assets/knock-sound.wav';
import ReactHowler from 'react-howler'

import {Howl} from 'howler';
//react-howler

interface boxProps{
    title:string;
    
}


export function Box({title}:boxProps){
    
    const sound = new Howl({
        src:[knocksound],
        html5:true
    })

    
    const scrollEducation = () =>{
       console.log("scrollEducation")
    }
    const scrollExperence = () =>{
        console.log("scrollExperence")
     }

    return(   
        <Container 
            onMouseOver={() => sound.play()}
            onMouseOut={()=> sound.off()}               
        >         
        {title}
        </Container> 
    )
}