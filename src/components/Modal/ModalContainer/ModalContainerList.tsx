import React, { FC } from 'react';
import { useActions, useAppSelector } from "../../../hooks/redux";
import Modal from "../Modal";
import ModalContentList from "../ModalContent/ModalContentList";
import { selectRecipesModalList } from "../../../store/reducers/recipes/recipes-selectors";

interface ModalContainerListProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void
}

const ModalContainerList: FC<ModalContainerListProps> = ({isModalOpen, setIsModalOpen}) => {

    const {removeModalRecipes} = useActions();
    const modalList = useAppSelector(selectRecipesModalList);
    const {addRecipe} = useActions();

    const handleClosing = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            removeModalRecipes();
        }, 300);
    }

    return (
        <Modal {...{handleClosing, isModalOpen}}>
            <ModalContentList {...{modalList, addRecipe}}/>
        </Modal>
    );
};

export default ModalContainerList;