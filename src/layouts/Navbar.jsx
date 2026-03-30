import React from "react";
import LogoImg from '../assets/images/homee/Logo.png'

const Navbar = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-10 py-1 flex items-center justify-between shadow-2xl">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={LogoImg}
                        alt="logo"
                        className="w-12 h-12 object-contain hover:scale-105 transition-transform cursor-pointer"
                    />
                </div>

                {/* Menu */}
                <div className="hidden md:flex gap-8 text-sm font-bold text-white tracking-wide">
                    <a href="/" className="hover:text-red-500 transition">
                        หน้าหลัก
                    </a>
                    <a href="#categories" onClick={(e) => scrollToSection(e, 'categories')} className="hover:text-red-500 transition">
                        หมวดหมู่คดี
                    </a>
                    <a href="#latest" onClick={(e) => scrollToSection(e, 'latest')} className="hover:text-red-500 transition">
                        คดี
                    </a>
                    <a href="#region" onClick={(e) => scrollToSection(e, 'region')} className="hover:text-red-500 transition">
                        สำรวจตามพื้นที่
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;