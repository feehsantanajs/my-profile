
import Modal from "react-modal";
import {ContentSkills, } from './Content';

interface ModalProps{
    isModalOpen:boolean;
    handleCloseModal: () => void;
    value:string;
}



export function ModalBlock(props:ModalProps){
    
    return(
        <Modal isOpen={props.isModalOpen} onRequestClose={props.handleCloseModal} ariaHideApp={false}  >
            <ContentSkills id={props.value} />           
        </Modal>     
    )
}
