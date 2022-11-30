import React, { FC } from 'react';
import { RecipeData } from "../../types";
import Search from "../Search/Search";
import Item from "./Item";
import ModalContainerInfo from "../Modal/ModalContainer/ModalContainerInfo";

interface ListProps {
    list: RecipeData[];
    handleAddClick: () => void;
}

const List: FC<ListProps> = ({list, handleAddClick}) => {
    console.log('list')
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Recipes</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Your list of recipes.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <button
                        onClick={handleAddClick}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add recipe
                    </button>
                </div>
            </div>
            <Search></Search>
            <div className="mt-1 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Score
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Country
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Tags
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {list.map((recipe, i) => (
                                    <Item key={recipe.id} {...{recipe, i}}></Item>
                                ))}
                                </tbody>
                            </table>
                            <ModalContainerInfo/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


function areEqual(prevProps: ListProps, nextProps: ListProps) {
    return prevProps.list.length === nextProps.list.length;
}

const MemoizedList = React.memo(List, areEqual);

export default MemoizedList;