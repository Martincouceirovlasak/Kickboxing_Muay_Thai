import React from 'react';

const Footer = () => {

 const currentYear = new Date().getFullYear();

 const footerTextStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', // Vertically center the text
    fontWeight: "650",
  };

  return (
    <footer style={{height: '50px', backgroundColor: '#f5f5f5' }}>
      <p className="d-flex justify-content-center" style={footerTextStyle}>Copyright &copy; {currentYear} Martin Couceiro Vlasak</p>
    </footer>
  );
};

export default Footer;
