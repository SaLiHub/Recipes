import React from 'react';
import { useActions, useAppSelector } from "../../../hooks/redux";
import { selectRecipesModalState } from "../../../store/reducers/recipes/recipes-selectors";
import ModalContentInfo from "../ModalContent/ModalContentInfo";
import Modal from "../Modal";

const ModalContainerInfo = () => {

    const {closeItemModal} = useActions();
    const isModalOpen = useAppSelector(selectRecipesModalState);

    return (
        <Modal {...{handleClosing: closeItemModal, isModalOpen}}>
            <ModalContentInfo/>
        </Modal>
    );
};

export default ModalContainerInfo;