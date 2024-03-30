import React, { useState } from 'react';
import ProductDetailModal from './productDetailModal';

const ProductList = ({ products, loading, error }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false); // State for managing modal visibility
    const [selectedProduct, setSelectedProduct] = useState(null); // State for storing the selected product

    // Function to open the modal and set the selected product
    const openModal = (product) => {
        setSelectedProduct(product);
        setModalIsOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="container mx-auto my-10 px-4 py-4 md:px-auto md:py-auto bg-gray-200 md:my-20 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                {loading ? ( // If loading is true, display loading message
                    <p>Product list is loading please wait...</p>
                ) : (
                    products.map((product, index) => ( // Map through products array to render each product
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4" />
                            <div className="text-lg font-semibold mb-2">{product.title}</div>
                            <div className="text-gray-600 mb-2">${product.price}</div>
                            <button onClick={() => openModal(product)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                View Details
                            </button>
                        </div>
                    ))
                )}
                {/* Display error message if error occurred */}
                {error && <p className='text-[red]'>Failed to load product list. Kindly try again</p>}
                {/* Display message if no products are found */}
                {products.length === 0 && !error && !loading && (
                    <p className='font-semibold mx-auto text-left'>Search not found. Kindly search for the available categories which include Men's Clothing, Women's Clothing, Jewelry, or Electronics </p>
                )}
            </div>
            {/* Render ProductDetailModal component if modalIsOpen state is true */}
            {modalIsOpen && (
                <ProductDetailModal 
                    onCloseModal={closeModal} 
                    product={selectedProduct}
                />
            )}
        </div>
    );
};

export default ProductList;
