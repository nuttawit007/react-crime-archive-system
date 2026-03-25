import { useEffect, useMemo, useRef, useState } from "react";
import { Search, ChevronDown, Check, X } from "lucide-react";
import thailandProvinces from "../data/thailand_province.json";

const THAI_PROVINCES = thailandProvinces;

const SearchProvince = ({
        options = THAI_PROVINCES,
        placeholder = "เลือกจังหวัด",
        searchPlaceholder = "ค้นหาจังหวัด...",
        emptyText = "ไม่พบจังหวัด",
        value = "",
        onChange,
        className = "",
    }) => {
    const wrapperRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        setSelected(value);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (!wrapperRef.current?.contains(event.target)) {
            setIsOpen(false);
            setQuery("");
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredOptions = useMemo(() => {
        const keyword = query.trim().toLowerCase();

        if (!keyword) return options;

        return options.filter((option) =>
        option.toLowerCase().includes(keyword)
        );
    }, [options, query]);

    const handleSelect = (province) => {
        setSelected(province);
        setQuery("");
        setIsOpen(false);
        onChange?.(province);
    };

    const handleClear = (event) => {
        event.stopPropagation();
        setSelected("");
        setQuery("");
        onChange?.("");
    };

    return (
        <div ref={wrapperRef} className={`relative w-full max-w-xl ${className}`}>
            <button type="button" onClick={() => setIsOpen((prev) => !prev)}
                className="flex w-full items-center rounded-full border border-white/20 bg-[#BBBBBB33] text-left">
            <div className="px-4 py-3">
                <Search className="h-5 w-5 text-[#BBBBBB]" />
            </div>

            <div className="flex-1 px-1 py-3 text-white">
            {selected ? (
                <span>{selected}</span>
            ) : (
                <span className="text-[#BBBBBB]">{placeholder}</span>
            )}
            </div>

            {selected ? (
            <div onClick={handleClear} className="px-2 py-3">
                <X className="h-5 w-5 text-[#BBBBBB]" />
            </div>
            ) : null}

            <div className="px-4 py-3">
            <ChevronDown
                className={`h-5 w-5 text-[#BBBBBB] transition-transform ${
                isOpen ? "rotate-180" : ""
                }`}
            />
            </div>
        </button>

        {isOpen && (
            <div className="absolute left-0 right-0 z-50 mt-3 overflow-hidden rounded-3xl border border-white/10 bg-[#141414] shadow-2xl">
            <div className="border-b border-white/10 p-3">
                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 px-3">
                <Search className="h-4 w-4 text-zinc-400" />
                <input
                    autoFocus
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={searchPlaceholder}
                    className="w-full bg-transparent px-3 py-3 text-white placeholder:text-zinc-500 focus:outline-none"
                />
                </div>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
                {filteredOptions.length > 0 ? (
                filteredOptions.map((province) => {
                    const isSelected = selected === province;

                    return (
                    <button
                        key={province}
                        type="button"
                        onClick={() => handleSelect(province)}
                        className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition cursor-pointer ${
                        isSelected
                            ? "bg-[#EB3F34] text-white"
                            : "text-zinc-200 hover:bg-white/5"
                        }`}
                    >
                        <span className="text-base">{province}</span>
                        {isSelected ? <Check className="h-4 w-4" /> : null}
                    </button>
                    );
                })
                ) : (
                <div className="px-4 py-4 text-sm text-zinc-400">{emptyText}</div>
                )}
            </div>
            </div>
        )}
        </div>
    );
    };

export default SearchProvince;