import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageChange = page => {
        onPageChange(page);
    };

    return (
        <div className="flex justify-center my-3">
            {totalPages > 1 && (
                <div className="flex">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 mx-1 ${currentPage === page ? 'bg-primary text-white' : 'bg-btn-hover text-white'
                                } rounded`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Pagination;