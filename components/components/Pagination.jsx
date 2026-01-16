// components/common/Pagination.jsx
"use client";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const paginationContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem'
  };

  const paginationListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const pageItemStyle = {
    margin: '0 0.25rem'
  };

  const pageButtonStyle = (isActive = false, isDisabled = false) => ({
    padding: '0.5rem 0.75rem',
    border: '1px solid #dee2e6',
    backgroundColor: isActive ? '#007bff' : 'white',
    color: isActive ? 'white' : '#007bff',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    borderRadius: '0.25rem',
    transition: 'all 0.3s ease',
    opacity: isDisabled ? 0.6 : 1,
    border: 'none'
  });

  const pageLinkStyle = {
    padding: '0.5rem 0.75rem',
    color: '#6c757d',
    textDecoration: 'none',
    border: 'none',
    background: 'none'
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <li key={i} style={pageItemStyle}>
          <button
            style={pageButtonStyle(currentPage === i)}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    return pages;
  };

  return (
    <div style={paginationContainerStyle}>
      <nav aria-label="News pagination">
        <ul style={paginationListStyle}>
          <li style={pageItemStyle}>
            <button
              style={pageButtonStyle(false, currentPage === 1)}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          
          {renderPageNumbers()}
          
          <li style={pageItemStyle}>
            <button
              style={pageButtonStyle(false, currentPage === totalPages)}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
          
          <li style={pageItemStyle}>
            <span style={pageLinkStyle}>
              {totalPages} pages total
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;