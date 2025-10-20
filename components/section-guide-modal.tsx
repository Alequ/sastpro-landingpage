'use client'

import { useEffect, useState } from 'react'

const sections = [
  {
    id: 'hero',
    emoji: '🏠',
    name: 'HERO SECTION',
    color: '#4A90E2',
    details: [
      'Compelling headline',
      'Brief value proposition',
      'Primary CTA button',
      'Hero image/dashboard preview',
      'Trust badges/certifications'
    ]
  },
  {
    id: 'problem',
    emoji: '⚡',
    name: 'PROBLEM STATEMENT',
    color: '#E74C3C',
    details: [
      'Highlight pain points:',
      '  - Scattered documents',
      '  - Compliance risks',
      '  - Manual tracking errors',
      'Quick transition to solution'
    ]
  },
  {
    id: 'features',
    emoji: '✨',
    name: 'KEY FEATURES',
    color: '#2ECC71',
    details: [
      'Document Management',
      '  - Version control',
      '  - Quick search/retrieval',
      'CX Tracker',
      '  - Customer interaction logs',
      'Energized Assets',
      '  - Real-time status',
      '  - Safety protocols',
      'Compliance automation',
      'Audit trails'
    ]
  },
  {
    id: 'how-it-works',
    emoji: '🎯',
    name: 'HOW IT WORKS',
    color: '#F39C12',
    details: [
      'Step 1: Upload/Import docs',
      'Step 2: Organize & tag',
      'Step 3: Track & monitor',
      'Visual workflow diagram',
      'Emphasize simplicity'
    ]
  },
  {
    id: 'use-cases',
    emoji: '💼',
    name: 'USE CASES',
    color: '#9B59B6',
    details: [
      'Safety Managers',
      'Compliance Officers',
      'Facility Managers',
      'Operations Teams',
      'Real scenarios/examples'
    ]
  },
  {
    id: 'social-proof',
    emoji: '✓',
    name: 'SOCIAL PROOF',
    color: '#1ABC9C',
    details: [
      'Customer testimonials',
      'Company logos',
      'Case study highlights',
      'Industry certifications',
      'Awards/recognition'
    ]
  },
  {
    id: 'stats',
    emoji: '📊',
    name: 'STATS/METRICS',
    color: '#E67E22',
    details: [
      'Time saved',
      'Compliance rate improvement',
      'Documents managed',
      'Users/companies served',
      'ROI statistics'
    ]
  },
  {
    id: 'final-cta',
    emoji: '🚀',
    name: 'FINAL CTA',
    color: '#E91E63',
    details: [
      'Strong headline',
      'Multiple CTA options:',
      '  - Request demo',
      '  - Start free trial',
      '  - Contact sales',
      'Urgency element'
    ]
  },
  {
    id: 'footer',
    emoji: '📞',
    name: 'FOOTER',
    color: '#34495E',
    details: [
      'Quick links',
      'Contact info',
      'Privacy/Security',
      'Social media',
      'Newsletter signup'
    ]
  }
]

export function SectionGuideModal() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for better detection

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.querySelector(`[data-section="${section.id}"]`)

        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY

          if (scrollPosition >= elementTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const activeData = sections.find(s => s.id === activeSection)

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-sm transition-all duration-300 ${
          isCollapsed ? 'w-14' : 'w-80 max-h-[90vh]'
        }`}
      >
        {/* Header */}
        <div
          className="sticky top-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-3 rounded-t-xl cursor-pointer hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all flex items-center justify-between"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {!isCollapsed ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-lg">📋</span>
                <h3 className="font-bold text-sm text-white">Section Guide</h3>
                <span className="text-xs text-white/60">(Dev)</span>
              </div>
              <svg
                className="w-4 h-4 text-white transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          ) : (
            <div className="flex flex-col items-center w-full">
              <span className="text-lg">📋</span>
              <svg
                className="w-4 h-4 text-white mt-1 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        {!isCollapsed && (
          <div className="overflow-y-auto max-h-[calc(90vh-60px)] p-3 space-y-2">
            {/* Progress indicator */}
            <div className="mb-3 p-2 bg-gray-800/50 rounded-lg border border-gray-700/30">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                <span>Progress</span>
                <span>{sections.findIndex(s => s.id === activeSection) + 1}/{sections.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` }}
                />
              </div>
            </div>

            {sections.map((section) => {
              const isActive = activeSection === section.id

              return (
                <div
                  key={section.id}
                  className={`rounded-lg transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'ring-2 ring-white/20 shadow-lg shadow-black/20'
                      : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{
                    backgroundColor: isActive ? section.color : '#1f2937',
                    borderLeft: `4px solid ${section.color}`
                  }}
                >
                  <div
                    className={`p-2.5 cursor-pointer ${isActive ? 'text-white' : 'text-gray-300'}`}
                    onClick={() => {
                      const element = document.querySelector(`[data-section="${section.id}"]`)
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base">{section.emoji}</span>
                      <span className="font-semibold text-xs tracking-wide">{section.name}</span>
                      {isActive && (
                        <span className="ml-auto">
                          <svg className="w-3 h-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="4" />
                          </svg>
                        </span>
                      )}
                    </div>

                    {isActive && (
                      <ul className="text-xs space-y-1 ml-6 mt-2.5 animate-in slide-in-from-top-2 duration-300">
                        {section.details.map((detail, idx) => (
                          <li key={idx} className="leading-relaxed text-white/90">
                            {detail.startsWith('  ') ? (
                              <span className="ml-3 text-white/75">→ {detail.trim()}</span>
                            ) : (
                              <span className="flex items-start gap-1.5">
                                <span className="text-white/60 mt-0.5">•</span>
                                <span>{detail}</span>
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Floating indicator when collapsed */}
      {isCollapsed && activeData && (
        <div
          className="mt-2 bg-gray-900 text-white rounded-lg p-2 text-xs border border-gray-700/50 shadow-lg animate-in fade-in slide-in-from-right duration-200"
          style={{ borderLeftColor: activeData.color, borderLeftWidth: '3px' }}
        >
          <div className="flex items-center gap-1.5">
            <span>{activeData.emoji}</span>
            <span className="font-medium">{activeData.name}</span>
          </div>
        </div>
      )}
    </div>
  )
}
