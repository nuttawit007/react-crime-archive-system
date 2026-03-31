import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowLeft, Home } from 'lucide-react'

const NotfoundPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden flex items-center justify-center px-6">
            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute -top-30 -left-20 w-72 h-72 bg-red-600/20 blur-3xl rounded-full" />
                <div className="absolute -bottom-30 -right-20 w-80 h-80 bg-orange-500/10 blur-3xl rounded-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_55%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl w-full text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#EB3F34]/15 border border-[#EB3F34]/30 mb-6">
                    <AlertTriangle className="w-10 h-10 text-[#EB3F34]" />
                </div>

                <p className="text-[#EB3F34] font-semibold tracking-[0.2em] uppercase mb-3">
                    Error 404
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    ไม่พบหน้าที่คุณกำลังค้นหา
                </h1>

                <p className="text-gray-400 text-base md:text-lg leading-8 max-w-xl mx-auto mb-8">
                    ลิงก์นี้อาจไม่ถูกต้อง หน้าถูกย้าย หรืออาจไม่มีอยู่ในระบบแล้ว
                    ลองกลับไปที่หน้าหลักเพื่อเริ่มต้นค้นหาคดีอีกครั้ง
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-[#EB3F34] hover:bg-[#d7372d] transition px-6 py-3 rounded-full font-medium"
                    >
                        <Home className="w-4 h-4" />
                        กลับหน้าหลัก
                    </Link>
                </div>

                <div className="mt-12 text-gray-600 text-sm">
                    404 · PAGE NOT FOUND
                </div>
            </div>
        </div>
    )
}

export default NotfoundPage