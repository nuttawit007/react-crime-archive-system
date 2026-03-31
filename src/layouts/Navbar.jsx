import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoImg from "../assets/images/homee/Logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (e, id) => {
        e.preventDefault();

        if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsOpen(false);
        return;
        }

        const element = document.getElementById(id);
        if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
        }

        setIsOpen(false);
    };

    const menuItems = [
        { id: "home", label: "หน้าหลัก", href: "/" },
        { id: "categories", label: "หมวดหมู่คดี", href: "#categories" },
        { id: "latest", label: "คดี", href: "#latest" },
        { id: "region", label: "สำรวจตามพื้นที่", href: "#region" },
    ];

    return (
        <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl md:rounded-full px-4 sm:px-6 md:px-10 py-2 shadow-2xl">
            <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
                <img
                src={LogoImg}
                alt="logo"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain hover:scale-105 transition-transform cursor-pointer"
                onClick={(e) => scrollToSection(e, "home")}
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-bold text-white tracking-wide">
                {menuItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="hover:text-red-500 transition"
                >
                    {item.label}
                </a>
                ))}
            </div>

            {/* Mobile Toggle */}
            <button
                type="button"
                className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-3 text-sm font-semibold text-white">
                {menuItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="py-2 px-2 rounded-lg hover:bg-white/10 hover:text-red-400 transition"
                >
                    {item.label}
                </a>
                ))}
            </div>
            )}
        </div>
        </nav>
    );
};

export default Navbar;