import React from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useActions } from "../../hooks/redux";
import { debounce } from "../../helpers/helpers";

const Search = () => {

    const {findRecipeByName} = useActions();
    const findByName = debounce(findRecipeByName);

    const handleChange = (e: { target: { value: any; }; }) => {
        findByName(e.target.value);
    }

    return (
        <div className="mt-6 flex-1 flex justify-center lg:justify-end">
            <div className="w-full">
                <label htmlFor="search" className="sr-only">
                    Search projects
                </label>
                <div className="relative text-indigo-200 focus-within:text-gray-400">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true"/>
                    </div>
                    <input
                        id="search"
                        name="search"
                        className="pl-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Find by recipe by name"
                        type="search"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;