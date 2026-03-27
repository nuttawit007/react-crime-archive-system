import React from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Plus, Minus, RotateCw } from 'lucide-react';
import ThailandMap from './ThailandMap'

const MapZoom = () => {
    return (
        <section className='flex-2 rounded-2xl bg-[#161616] py-8 px-6'>
            <h1 className='text-4xl font-bold mb-2'>ภาพรวมคดีในประเทศ</h1>
            <p className='text-lg text-gray-500 mb-4'>
                กดเพื่อดูข้อมูลคดีในแต่ละจังหวัด
            </p>
            <div className="relative w-full">
                <TransformWrapper
                    initialScale={1}
                    minScale={0.5}
                    maxScale={4}
                    centerOnInit
                    wheel={{ step: 0.15 }}
                    doubleClick={{ disabled: true }}
                >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                            {/* ปุ่มควบคุม */}
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex flex-col overflow-hidden rounded-2xl border border-[#333] bg-[#161616] shadow">   
                                <button onClick={() => zoomIn()} className="p-3 text-3xl border-b border-[#333] hover:bg-zinc-800 text-white cursor-pointer">
                                    <Plus />
                                </button>
                                <button onClick={() => resetTransform()} className="p-3 text-2xl border-b border-[#333] hover:bg-zinc-800 text-white cursor-pointer">
                                    <RotateCw />
                                </button>
                                <button onClick={() => zoomOut()} className="p-3 text-3xl border-b border-[#333] hover:bg-zinc-800 text-white cursor-pointer">
                                    <Minus />
                                </button>
                            </div>

                            {/* พื้นที่ที่ซูมได้ */}
                            <TransformComponent
                                wrapperClass="!w-full !h-[550px]"
                                contentClass="!w-86 !h-full flex items-center justify-center "
                            >
                                <ThailandMap />
                            </TransformComponent>
                        </>
                    )}
                </TransformWrapper>
            </div>
        </section>
    )
}

export default MapZoom