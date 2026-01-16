// components/news/NewsNavbar.jsx
"use client";

const NewsNavbar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'company-news', label: 'Company News' },
    { id: 'industry-trends', label: 'Industry Trends' },
    { id: 'media-reports', label: 'Media Reports' }
  ];

  const containerStyle = {
    width: '100%',
    marginTop: '2px',
    padding: 0,
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6'
  };

  const navListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const navItemStyle = {
    textAlign: 'center',
    width: 'calc(100% / 3 - 1px)'
  };

  const navButtonStyle = (isActive) => ({
    background: 'none',
    border: 'none',
    color: isActive ? '#007bff' : '#495057',
    cursor: 'pointer',
    padding: '15px 0',
    width: '100%',
    fontWeight: isActive ? '600' : '500',
    fontSize: '20px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'block',
    backgroundColor: isActive ? 'rgba(0, 123, 255, 0.05)' : 'transparent',
    borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent'
  });

  return (
    <section style={containerStyle}>
      <ul style={navListStyle}>
        {tabs.map((tab) => (
          <li 
            key={tab.id}
            style={navItemStyle}
          >
            <button
              style={navButtonStyle(activeTab === tab.id)}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsNavbar;