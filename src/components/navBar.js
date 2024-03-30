import React, { useState } from 'react';

const Navbar = ({ onfilterSearchQuery }) => {
    const [submited, setSubmited] = useState(false); // State to style submit button when clicked
    const [searchTerm, setSearchTerm] = useState('');// State to manage the search term

    // Function to handle changes in the search input field
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Update the search term state
    };

    // Function to handle form submission when searching
    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setSubmited(true); // Set the submitted state to true
        setTimeout(() => {
            setSubmited(false); // Reset the submitted state after 100 milliseconds
        }, 100);
        onfilterSearchQuery(searchTerm); // Pass the search term to the parent component for filtering
        console.log('Search submitted:', searchTerm); // Log the search term to the console (for testing)
    };

    return (
        // Navigation bar with a flex layout
        <nav className="bg-black sticky top-0 z-10 flex flex-col md:flex-row items-center justify-between p-4">
            {/* Brand/logo */}
            <h1 className="text-red-500 text-lg font-bold">Product Listing</h1>
            {/* Search form */}
            <form onSubmit={handleSearchSubmit} className="flex mt-4 md:mt-0">
                {/* Search input field */}
                <input
                    type="text"
                    placeholder="Search category..."
                    value={searchTerm}
                    onChange={handleSearchChange} // Call handleSearchChange when the input value changes
                    className="bg-gray-200 rounded-l-lg p-2 focus:outline-none"
                />
                {/* Search button */}
                <button type="submit" className={`${submited ? 'bg-red-900' : 'bg-red-500'} rounded-r-lg px-4 py-2 text-white`}>
                    Search
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
