import React, { FC } from 'react';
import { getPercentage } from "../../helpers/helpers";
import { RecipeData } from "../../types";
import { useActions } from "../../hooks/redux";

interface ItemProps {
    recipe: RecipeData;
    i: number;
}

const Item: FC<ItemProps> = ({recipe, i}) => {

    const {removeRecipe, openItemModal} = useActions();

    const handleOpenClick = () => {
        openItemModal(i);
    }


    return (
        <tr>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={recipe.thumbnail_url}
                             alt=""/>
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-gray-900">{recipe.name}</div>
                        {/*<div className="text-gray-500">{recipe.id}</div>*/}
                    </div>
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div
                    className="text-gray-900">{getPercentage(recipe.user_ratings?.score)}%
                </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span
                        className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {recipe.country}
                    </span>
            </td>
            <td className="whitespace-normal px-3 py-4 text-sm text-gray-500">
                <ul>
                    {recipe.tags.length > 0
                        ? recipe.tags.slice(0, 3).map((tag) => <li key={tag.id}>#{tag.name}</li>)
                        : '-'
                    }
                    {/*{recipe.tags === null || recipe.tags === undefined*/}
                    {/*    ? '-'*/}
                    {/*    : recipe.tags.slice(0, 3).map((tag) => <li key={tag.id}>#{tag.name}</li>)*/}
                    {/*}*/}
                </ul>
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button className="text-indigo-600 hover:text-indigo-900"
                        onClick={handleOpenClick}>
                    Open<span className="sr-only">, {recipe.name}</span>
                </button>

            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button className="text-red-600 hover:text-red-900"
                        onClick={() => removeRecipe(recipe.id)}>
                    Remove<span className="sr-only">, {recipe.name}</span>
                </button>

            </td>

        </tr>
    );
};

export default Item;