import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div >
            <p className="text-center text-white text-info bg-dark mt-5 py-3"><small>Copyright &copy;{year} All rights Reserved</small></p>
        </div>
    );
};

export default Footer;