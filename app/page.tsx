"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import LoadingScene from "@/components/loading-scene"
import InitialWarning from "@/components/initial-warning"

// Cargamos la escena 3D de forma dinámica para mejor performance
const ConstructionScene = dynamic(() => import("@/components/construction-scene"), {
  ssr: false,
  loading: () => <LoadingScene />,
})

export default function Page() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-zinc-900">
      <Suspense fallback={<LoadingScene />}>
        <InitialWarning />
        <ConstructionScene />
      </Suspense>
    </main>
  )
}

