import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    const year = new Date();
    const y = year.getFullYear();
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className=" p-10">
            <div className='footer justify-evenly text-white'>
                <div>
                    <span className="footer-title text-lime-300">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-lime-300">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-lime-300">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center mt-[60px]'>
                <p>Copyright © {y} - All right by <span className='text-secondary'>RUBRL MOLLAH</span></p>
            </div>
        </footer>
    );
};

export default Footer;