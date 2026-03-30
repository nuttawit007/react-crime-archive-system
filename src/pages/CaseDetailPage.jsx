import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router'
import casesData from '../data/cases.json'
import caseAiScripts from '../data/caseAiScripts.json'  // ✅ เพิ่ม
import HeroSection from '../components/case/hero/HeroSection'
import CaseTabNav from '../components/case/nav/CaseTabNav'
import DetailSection from '../components/case/detail/DetailSection'
import AIAudioSummaryCard from '../components/case/detail/AIAudioSummaryCard'
import TimeLineSection from '../components/case/timeline/TimeLineSection'
import EvidenceGallerySection from '../components/case/evidence/EvidenceGallerySection'
import KeyIssuesSection from '../components/case/key/KeyIssuesSection'
import LearningSection from '../components/case/learn/LearningSection'

const caseImages = import.meta.glob('../assets/images/case/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

function resolveImage(filename) {
  if (!filename) return null
  const key = `../assets/images/case/${filename}`
  return caseImages[key] || null
}

function toSlug(text) {
  if (!text) return ''
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u0E00-\u0E7Fa-z0-9-]/g, '')
}

const TABS = [
  { id: 'detail', label: 'รายละเอียดคดี' },
  { id: 'timeline', label: 'ลำดับเหตุการณ์' },
  { id: 'key-issues', label: 'ประเด็นสำคัญ' },
  { id: 'learning', label: 'บทเรียนและข้อกฎหมาย' },
]

export default function CaseDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('detail')

  const detailRef = useRef(null)
  const timelineRef = useRef(null)
  const keyIssuesRef = useRef(null)
  const learningRef = useRef(null)

  const sectionRefs = {
    detail: detailRef,
    timeline: timelineRef,
    'key-issues': keyIssuesRef,
    learning: learningRef,
  }

  const allCases = casesData.flatMap((prov) =>
    prov.cases.map((c) => ({
      ...c,
      provinceName: prov.name,
      provinceCode: prov.code,
      geoCode: prov.geoCode,
      region: prov.region,
      derivedSlug: toSlug(c.title),
    }))
  )

  const caseItem = allCases.find(
    (c) =>
      c.slug === slug ||
      c.derivedSlug === slug ||
      String(c.id) === slug
  )

  if (!caseItem) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white gap-6">
        <p className="text-2xl font-semibold">ไม่พบข้อมูลคดีที่คุณกำลังมองหา</p>
        <button
          onClick={() => navigate('/cases')}
          className="bg-[#e5341a] hover:bg-[#c42a13] text-white font-semibold px-8 py-3 rounded-full transition cursor-pointer"
        >
          ดูคดีทั้งหมด
        </button>
      </div>
    )
  }

  const heroImage = resolveImage(caseItem.heroImage || caseItem.image)
  const galleryRaw = (caseItem.gallery && caseItem.gallery.length > 0)
    ? caseItem.gallery
    : [caseItem.image]
  const galleryImages = galleryRaw.map(resolveImage).filter(Boolean)

  const detailParagraphs =
    caseItem.detailParagraphs && caseItem.detailParagraphs.length > 0
      ? caseItem.detailParagraphs
      : [caseItem.content]

  // ✅ ผูก segments จาก caseAiScripts เข้ากับ aiSummary
  const scriptKey = caseItem.aiSummaryScript || caseItem.id
  const aiScript = caseAiScripts[scriptKey] || { segments: [] }
  const aiSummary = {
    ...(caseItem.aiSummary || {
      title: 'ฟังสรุปคดีด้วย AI',
      summaryText: caseItem.content || '',
      ctaText: 'ดูบทพูดทั้งหมด',
    }),
    segments: aiScript.segments || [],
  }

  const timeline = caseItem.timeline || []

  const keyIssues =
    caseItem.keyIssues && caseItem.keyIssues.length > 0
      ? caseItem.keyIssues
      : [caseItem.content]

  const learning = caseItem.learning || {
    legalTitle: 'สรุปบทลงโทษ',
    legalParagraphs: [
      'รายละเอียดข้อกฎหมายขึ้นอยู่กับข้อเท็จจริงและหลักฐานที่ตรวจสอบได้ในคดี',
    ],
    preventionTitle: 'แนวทางการป้องกัน',
    preventionBullets: [
      'แจ้งคนใกล้ชิดเกี่ยวกับแผนการเดินทาง',
      'หลีกเลี่ยงพื้นที่เสี่ยงเมื่อต้องเดินทางลำพัง',
    ],
  }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    const ref = sectionRefs[tabId]
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleBack = () => navigate('/cases')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <HeroSection
        caseItem={caseItem}
        heroImage={heroImage}
        onBack={handleBack}
      />

      <CaseTabNav
        tabs={TABS}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-16">
        <div ref={detailRef} id="detail">
          <DetailSection title={caseItem.title} paragraphs={detailParagraphs}>
            <AIAudioSummaryCard audio={aiSummary} />
          </DetailSection>
        </div>

        <div ref={timelineRef} id="timeline">
          <TimeLineSection items={timeline} />
        </div>

        <EvidenceGallerySection images={galleryImages} title="หลักฐานและภาพประกอบ" />

        <div ref={keyIssuesRef} id="key-issues">
          <KeyIssuesSection paragraphs={keyIssues} />
        </div>

        <div ref={learningRef} id="learning">
          <LearningSection learning={learning} />
        </div>
      </div>
    </div>
  )
}