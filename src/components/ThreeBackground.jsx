import React, { Suspense } from 'react'

const ThreeBackgroundContent = React.lazy(() => import('./ThreeBackgroundContent'))

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90" />}>
        <ThreeBackgroundContent />
      </Suspense>
    </div>
  )
}