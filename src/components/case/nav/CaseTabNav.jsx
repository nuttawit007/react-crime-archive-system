import React from 'react'

export default function CaseTabNav({ tabs, activeTab, onTabClick }) {
  return (
    <div className="sticky top-0 z-30 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto scrollbar-hide gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`
                flex-shrink-0 px-5 py-4 text-sm md:text-base font-medium transition-all border-b-2
                ${activeTab === tab.id
                  ? 'border-[#e5341a] text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
