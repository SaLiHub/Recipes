import React from 'react';
import { useActions, useAppSelector } from "../../../hooks/redux";
import {
    selectRecipesListItem,
    selectRecipesModalState,
    selectRecipesPaginationIndex
} from "../../../store/reducers/recipes/recipes-selectors";
import ModalContentInfo from "../ModalContent/ModalContentInfo";
import Modal from "../Modal";
import { Nutrition } from "../../../types";
import Pagination from "../../Pagination/Pagination";


const ModalContainerInfo = () => {

    const {closeItemModal} = useActions();
    const isModalOpen = useAppSelector(selectRecipesModalState);
    const recipe = useAppSelector(selectRecipesListItem);
    const index = useAppSelector(selectRecipesPaginationIndex);

    let dish;
    if (recipe.recipes === undefined) {
        dish = recipe;
    } else {
        dish = recipe.recipes[index];

    }


    const createNutrition = (obj: Nutrition) => {
        const nutritionArray = Object.entries(obj).filter(([key]) => key !== 'updated_at');
        if (nutritionArray.length === 0) return '-';
        return nutritionArray.map(([k, v]) =>
            (
                <div>
                    <span>{k} </span>

                    -

                    <span> {v}</span>
                </div>
            )
        )
    }

    return (
        <Modal {...{handleClosing: closeItemModal, isModalOpen,}}>
            <ModalContentInfo {...{recipe: dish, createNutrition}}/>
            {recipe.recipes !== undefined
                ? <Pagination length={recipe.recipes.length}/>
                : ''
            }
        </Modal>
    );
};


export default ModalContainerInfo;