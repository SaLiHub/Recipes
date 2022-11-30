import React, { FC } from 'react';
import { PlusSmallIcon } from "@heroicons/react/24/solid";
import { RecipeData } from "../../../types";
import { RecipesEnum } from "../../../store/reducers/recipes/recipes-types";

interface ModalContentListProps {
    modalList: RecipeData[];
    addRecipe: (index: number) => { type: RecipesEnum; payload: number; };
}

const ModalContentList: FC<ModalContentListProps> = (props) => {
    const {modalList, addRecipe} = props;

    return (
        <div className="max-w-lg mx-auto">
            <div>
                <div className="text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
                    <h2 className="mt-2 text-lg font-medium text-gray-900">Add recipes</h2>
                </div>

            </div>
            <div className="mt-10">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    You may like
                </h3>
                <ul role="list"
                    className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                    {modalList.length > 0 ? modalList.map(({id, name, thumbnail_url}: RecipeData, i) => (
                        <li key={id}
                            className="py-4 flex items-center justify-between space-x-3">
                            <div className="min-w-0 flex-1 flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={thumbnail_url}
                                         alt=""/>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
                                    {/*<p className="text-sm font-medium text-gray-500 truncate">{person.role}</p>*/}
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <button
                                    onClick={() => addRecipe(i)}
                                    type="button"
                                    className="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <PlusSmallIcon className="-ml-1 mr-0.5 h-5 w-5 text-gray-400"
                                                   aria-hidden="true"/>
                                    <span className="text-sm font-medium text-gray-900">
                    {' '}
                                        Add <span className="sr-only">{name}</span>{' '}
                  </span>
                                </button>
                            </div>
                        </li>
                    )) : Array.apply(null, Array(4)).map((e, i) =>
                        (
                            <li key={i}
                                className="py-4 flex items-center justify-between space-x-3 animate-pulse">
                                <div className="min-w-0 flex-1 flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <svg className="h-10 w-10 text-gray-200 dark:text-gray-700" aria-hidden="true"
                                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div>
                                            <div
                                                className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                        {/*<p className="text-sm font-medium text-gray-500 truncate">{person.role}</p>*/}
                                    </div>
                                </div>

                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ModalContentList;