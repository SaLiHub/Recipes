import React, { FC } from 'react';
import { useActions } from "../../hooks/redux";

interface PaginationProps {
    length: number
}

const Pagination: FC<PaginationProps> = ({length}) => {

    const {nextRecipe, previousRecipe} = useActions();


    const handleNextClick = () => {
        nextRecipe(length)
    }

    const handlePreviousClick = () => {
        previousRecipe()
    }


    return (
        <nav
            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">20</span> results
                </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
                <button
                    onClick={handlePreviousClick}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextClick}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Next
                </button>
            </div>
        </nav>
    );
};

export default Pagination;