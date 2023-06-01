import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200">
            <div className="container mx-auto py-6 px-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-center md:text-left">TechWithRyan: 0760581267</p>
                    <p className="text-center md:text-right">Hällebergsgatan 22, 442 54 YTTERBY</p>
                    <p className="text-center md:text-left">Email: ryan.cornelio@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
