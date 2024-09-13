'use client';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-28 px-8 border-t-2 border-t-gray-500/55 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
        <div className="container flex flex-col items-center">
            <div className="flex justify-center items-center flex-wrap gap-8 pb-8">
                <ul className="contents">
                    <li><a className="transition-colors" href="#">Home</a></li>
                    <li><a className="transition-colors" href="#">About</a></li>
                    <li><a className="transition-colors" href="#">Services</a></li>
                    <li><a className="transition-colors" href="#">Contact</a></li>
                </ul>
            </div>
            <div className="flex gap-2">
                <a href="#">
                    <button className="transition-all relative w-8 h-8 rounded-lg text-center align-middle">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"> <Facebook /> </span>
                    </button>
                </a>
                <a href="#">
                    <button className="transition-all relative w-8 h-8 rounded-lg text-center align-middle">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"> <Instagram /> </span>
                    </button>
                </a>
                <a href="#">
                    <button className="transition-all relative w-8 h-8 rounded-lg text-center align-middle">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"> <Twitter /> </span>
                    </button>
                </a>
                <a href="#">
                    <button className="transition-all relative w-8 h-8 rounded-lg text-center align-middle">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"> <Youtube /> </span>
                    </button>
                </a>
                <a href="#">
                    <button className="transition-all relative w-8 h-8 rounded-lg text-center align-middle">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"> <Linkedin /> </span>
                    </button>
                </a>
            </div>
            <p className="mt-8 text-gray-600 text-center text-sm">Copyright © 2024 - All right reserved by NextApp</p>
        </div>
    </footer>
  );
};

export default Footer;
