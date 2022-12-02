import React, { FC } from 'react';
import { useActions } from "../../hooks/redux";

interface PaginationProps {
    length: number;
    index: number;
}

const Pagination: FC<PaginationProps> = ({length, index}) => {

    const {nextRecipe, previousRecipe} = useActions();

    const handleNextClick = () => {
        nextRecipe(length)
    }

    const handlePreviousClick = () => {
        previousRecipe()
    }

    const isPreviousDisabled = index === 0;
    const isNextDisabled = index + 1 === length;

    const buttonClassProperties = "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50";

    const prevButtonClassProperties = isPreviousDisabled ? buttonClassProperties + ' opacity-50 cursor-not-allowed' : buttonClassProperties;
    const nextButtonClassProperties = isNextDisabled ? buttonClassProperties + ' opacity-50 cursor-not-allowed' : buttonClassProperties;

    return (
        <nav
            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{index + 1}</span> of{' '}
                    <span className="font-medium">{length}</span> results
                </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
                <button
                    disabled={isPreviousDisabled}
                    onClick={handlePreviousClick}
                    className={prevButtonClassProperties}
                >
                    Previous
                </button>
                <button
                    disabled={isNextDisabled}
                    onClick={handleNextClick}
                    className={'ml-3 ' + nextButtonClassProperties}
                >
                    Next
                </button>
            </div>
        </nav>
    );
};

export default Pagination;