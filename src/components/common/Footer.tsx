import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link"; // Next.js's Link component for navigation

const Footer2: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-blue-600">Contact us</h3>
                        <img
                            src="/images/mowash-logo.webp"
                            alt="Pantiss Logo"
                            className="w-44 mx-auto md:mx-0 mb-4"
                        />
                        <address className="not-italic mb-4">
                            Plot No 1215/1500, Khandagiri Bari,<br />
                            Bank of India Lane, Bhubaneswar, Odisha, 751030 <br />
                            E-mail: <a href="mailto:info@pantiss.org" className="text-white underline">info@mowash.org</a><br />
                            Phone: <a href="tel:06743588734" className="text-white underline">06743588734</a>
                        </address>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex justify-center items-center space-x-4 mt-2 md:mt-0">
                        <Link href="/" className="hover:underline hover:text-blue-600">MWC</Link>
                        <Link href="/about" className="hover:underline hover:text-blue-600">Benefits</Link>
                        <Link href="/contact" className="hover:underline hover:text-blue-600">Rewards</Link>
                        <Link href="/career" className="hover:underline hover:text-blue-600">Contact</Link>
                    </div>

                    {/* Social Media and Links Section */}
                    <div className="mt-5 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-bold mb-4 text-blue-600">Join the conversation</h3>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <a href="#" className="text-white text-[18px] bg-blue-600 hover:bg-white hover:text-blue-600 rounded-full p-3">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-blue-600 hover:bg-white hover:text-blue-600 rounded-full p-3">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-blue-600 hover:bg-white hover:text-blue-600 rounded-full p-3">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white text-[18px] bg-blue-600 hover:bg-white hover:text-blue-600 rounded-full p-3">
                                <FaLinkedin />
                            </a>
                        </div>
                        <button className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-semibold px-6 py-2 mt-4 rounded-md">
                            Downloads
                        </button>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-white mt-8 pt-4">
                    <div className="flex flex-col md:flex-row justify-between text-sm text-center md:text-left">
                        <div className="text-white">
                            © 2024 PANTISS Foundation | PANTISS Communication
                        </div>
                        <div className="flex justify-center space-x-4 mt-2 md:mt-0">
                            Developed by (ADITYA SAHU)
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;
