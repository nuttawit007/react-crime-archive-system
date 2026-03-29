import React from 'react'
import LegalSummaryCard from './LegalSummaryCard'
import PreventionGuideCard from './PreventionGuideCard'

export default function LearningSection({ learning }) {
  if (!learning) return null

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 pb-3 border-b border-white/10">
        บทเรียนและข้อกฎหมาย
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LegalSummaryCard
          title={learning.legalTitle}
          paragraphs={learning.legalParagraphs}
        />
        <PreventionGuideCard
          title={learning.preventionTitle}
          items={learning.preventionBullets}
        />
      </div>
    </section>
  )
}
