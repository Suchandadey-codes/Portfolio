import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 text-center p-4 mt-8 border-t text-sm">
      
    <p>&copy; {new Date().getFullYear()} Location: Bhubaneswar, India</p>
    
    <p>
      Built with ♡ by{''}
      </p>
    <a href='https://www.linkedin.com/in/suchanda-dey-multiomics-bioinformatics/?originalSubdomain=in' className='underline'>Suchanda </a>
   
      </footer>
  );
};

export default Footer;