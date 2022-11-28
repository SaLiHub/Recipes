import React from 'react';
import { roundDown } from "../../../helpers/helpers";
import Pagination from "../../Pagination/Pagination";
import { useAppSelector } from "../../../hooks/redux";
import { selectRecipesListItem, selectRecipesPaginationIndex } from "../../../store/reducers/recipes/recipes-selectors";


interface Nutrition {
    [key: string]: number;
}

const ModalContentInfo = () => {

    const recipe = useAppSelector(selectRecipesListItem);

    let instruction;
    if (recipe.recipes === undefined) {
        instruction = recipe;
    } else {
        const index = useAppSelector(selectRecipesPaginationIndex);
        instruction = recipe.recipes[index];
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

    console.log(instruction)

    return (
        <div className="modal-content-info">
            <div>
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Recipe Information</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                </div>
                <div className="mt-5 border-t border-gray-200">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Full name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{instruction.name}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Image</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <img src={instruction.thumbnail_url} alt=""/>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Nutrition</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{createNutrition(instruction.nutrition)}</dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Rating</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating
                                        star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="ml-2 text-sm font-bold text-black">{roundDown(instruction.user_ratings.score * 5, 1)}</p>
                                    <span
                                        className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                    <span
                                        className="text-sm font-medium text-black">
                                            {instruction.user_ratings.count_negative + instruction.user_ratings.count_positive} reviews
                                        </span>
                                </div>
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Description</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {instruction.description
                                    ? instruction.description
                                    : '-'}
                            </dd>
                        </div>
                        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">Video demonstration</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {/*{<video width="400" controls>*/}
                                {/*    <source src={instruction.original_video_url} type="video/mp4"/>*/}
                                {/*</video>}*/}
                                {instruction.original_video_url}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            {recipe.recipes !== undefined
                ? <Pagination length={recipe.recipes.length}/>
                : ''
            }
        </div>

        // <div>
        //     {recipe.recipes.map(e => return {
        //
        //     }
        //         (<video width="400" controls>
        //             <source src={e.original_video_url} type="video/mp4"/>
        //         </video>)
        //     )}
        //
        // </div>
    );
};

export default ModalContentInfo;
