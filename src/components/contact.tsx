import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative bg-white mx-auto max-w-7xl px-5 py-1 sm:px-1 sm:py-4 lg:px-1">
      <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-4 lg:px-1">
      <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl text-center">
                Contact Us
      </h2>
      <div className="grid px-5 mt-5 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 mb-5">
        <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-4xl text-left mb-5">
                Our Contact Info
        </h3>
        <p className="bg-gray-200 text-black text-left">
            Get in touch with us, we are happy to serve your queries 24/7 at:
        </p>
        </div>
        <div className="col-span-1 mb-5">
        <div className="grid px-5 mt-5 sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 mb-5 rounded-lg bg-lightgray">
                <p className='px-5 py-5'>
                    Address 
                </p>
                <p className='text-lg px-5 mb-5 text-primary font-bold'>
                    Burj Al jabri, Al nahada 1, Dubai, UAE
                </p>
            </div>
            <div className="col-span-1 mb-5 rounded-lg bg-lightgray">
                <p className='px-5 py-5'>
                    Phone
                </p>
                <p className='text-lg px-5 mb-5 text-primary font-bold'>
                    <a href='tel:9710504910387'>+971 0504910387</a>
                </p>
            </div>
            <div className="col-span-1 mb-5 rounded-lg bg-lightgray">
                <p className='px-5 py-5 '>
                    Email
                </p>
                <p className='text-lg px-5 mb-5 text-primary font-bold'>
                    <a href='mailto:info@mamun.cloud'>info@mamun.cloud</a>
                </p>
            </div>
            <div className="col-span-1 mb-5 rounded-lg bg-lightgray">
                <p className='px-5 py-5'>
                    Socials
                </p>
                <div className='text-lg px-5 mb-5 text-primary font-bold'>
                <div className="flex justify-start space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <FaGithub size={24} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <FaLinkedin size={24} />
                    </a>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
