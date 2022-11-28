import React, { useState } from 'react';
import { useActions } from "../../../hooks/redux";
import Modal from "../Modal";
import ModalContentList from "../ModalContent/ModalContentList";

const ModalContainerList = () => {

    const {removeModalRecipes} = useActions();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClosing = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            removeModalRecipes();
        }, 300);
    }

    return (
        <Modal {...{handleClosing, isModalOpen}}>
            <ModalContentList/>
        </Modal>
    );
};

export default ModalContainerList;