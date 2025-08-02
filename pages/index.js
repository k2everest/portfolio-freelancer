import dynamic from 'next/dynamic'
import Loader from '../components/Loader'
import { useState, useEffect } from 'react'

const Scene = dynamic(() => import('../components/Scene'), { ssr: false })

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen bg-primary text-text overflow-hidden">
      {!loaded && <Loader />}
      {loaded && (
        <>
          <Scene />
          <div className="absolute top-6 left-6">
            <button className="px-4 py-2 bg-accent text-white rounded-full shadow-lg hover:scale-105 transition">
              Home
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-4xl font-bold">Bem-vindo ao meu Portfólio</h1>
            <p className="text-lg mt-2">Criado com Next.js, Tailwind e Three.js</p>
          </div>
        </>
      )}
    </div>
  )
}