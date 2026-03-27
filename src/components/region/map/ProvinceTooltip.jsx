import React from 'react'
import { createPortal } from "react-dom";

const ProvinceTooltip = ({ tooltip }) => {
    if (!tooltip || typeof document === "undefined") return null;

    return createPortal(
        <div
        className="pointer-events-none fixed z-9999 min-w-55 rounded-2xl border border-white/10 bg-black/90 px-4 py-3 text-white shadow-2xl backdrop-blur-sm"
        style={{
            left: tooltip.x,
            top: tooltip.y,
        }}
        >
        <div className="text-base font-bold leading-tight">{tooltip.name}</div>
        <div className="mt-1 text-sm text-white/80">
            จำนวนคดี:{" "}
            <span className="font-semibold text-white">
            {tooltip.caseCount.toLocaleString()}
            </span>
        </div>
        </div>,
        document.body
    );
}

export default ProvinceTooltip