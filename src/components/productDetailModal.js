import React from 'react';
import Modal from './Modal/modal'; // Importing the modal component

const ProductDetailModal = ({ onCloseModal, product }) => {
    return (
        // Rendering the Modal component and passing onCloseModal function as prop
        <Modal onClose={onCloseModal}>
            {/* Modal content */}
            <div className="modal-content" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                {/* Close button */}
                <button onClick={onCloseModal} className="close-button">×</button>
                <div className="text-center">
                    {/* Product title */}
                    <h2 className="text-xl font-semibold">{product?.title}</h2>
                    {/* Product image */}
                    <img src={product?.image} alt={product?.title} className="w-[50%] mt-5 mx-auto object-contain mb-4" />
                </div>
                {/* Product description */}
                <p><strong>Description:</strong> {product?.description}</p>
                {/* Product price */}
                <p><strong>Price:</strong> ${product?.price}</p>
                {/* Product rating */}
                <p><strong>Rating:</strong> {product?.rating.rate}</p>
            </div>
        </Modal>
    );
};

export default ProductDetailModal;
