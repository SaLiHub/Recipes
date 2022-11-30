import './Recipes.css';
import React, { useEffect, useState } from 'react';
import EmptyState from "./EmptyState";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchModalRecipesData } from "../../store/reducers/recipes/recipes-reducer";
import List from "../List/List";
import { selectRecipesFilteredList, selectRecipesList } from "../../store/reducers/recipes/recipes-selectors";
import ModalContainerList from "../Modal/ModalContainer/ModalContainerList";
import { getRandomInt } from "../../helpers/helpers";

const Recipes = () => {

    const list = useAppSelector(selectRecipesList);
    const filteredList = useAppSelector(selectRecipesFilteredList)
    const dispatch = useAppDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddClick = () => {
        dispatch(fetchModalRecipesData({
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: {from: String(getRandomInt()), size: '4'}
        }));
        setIsModalOpen(true);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);


    return (
        <div className='Recipes'>
            {
                filteredList.length > 0 ?
                    <List {...{list: filteredList, handleAddClick}}/>
                    :
                    list.length > 0 ?
                        <List {...{list, handleAddClick}}/> :
                        <EmptyState {...{handleAddClick}}/>
            }
            <ModalContainerList {...{isModalOpen, setIsModalOpen}}/>
        </div>
    );
};


export default Recipes;