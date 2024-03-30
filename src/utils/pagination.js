import React from "react";

const Pagination = ({ postsPerPage, totalPost, paginate, currentPage }) => {
    // Initialize page numbers with empty array
    const pageNumbers = [];
    
    // Calculate the total number of pages needed based on the number of posts per page
    for(let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++){
        pageNumbers.push(i); // Push each page number into the pageNumbers array
    }

    return (
        // Render the pagination navigation
        <nav className="flex justify-center mt-6 mb-20">
            <ul className="flex flex-row pagination">
                {/* Map through the pageNumbers array to render each page number */}
                {pageNumbers.map((number)=> (
                    <li key={number}>
                        {/* Render each page number as a clickable link */}
                        <a onClick={ () => paginate(number)} href='#' className={`px-3 py-2 rounded-md mr-2 hover:bg-gray-300 ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
