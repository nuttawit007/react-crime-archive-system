import React from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-full px-10 py-0.5 flex items-center justify-between shadow-2xl">                {/* Logo */}
                <div classname="flex items-center">
                    <img src={Logo} alt="logo" className="w-18 h-18 object-contain hover:scale-105 transition-transform cursor-pointer" />
                </div>

                {/* Menu */}
                <div className="hidden md:flex gap-8 text-xl font-semibold text-white-400">
                    <a href="/" className="hover:text-red-500 transition">
                        หน้าหลัก
                    </a>
                    <a href="#" className="hover:text-red-500 transition">
                        หมวดหมู่คดี
                    </a>
                    <a href="#" className="hover:text-red-500 transition">
                        คดี
                    </a>
                    <a href="#" className="hover:text-red-500 transition">
                        สำรวจตามพื้นที่
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;