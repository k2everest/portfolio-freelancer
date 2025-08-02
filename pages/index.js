import dynamic from 'next/dynamic'
import Loader from '../components/Loader'

const Scene = dynamic(() => import('../components/Scene'), { ssr: false })

export default function Home() {
  return (
    <div className="relative w-screen h-screen bg-black text-white">
      <Loader />
      <Scene />
      <div className="absolute bottom-4 left-4">Home Button</div>
    </div>
  )
}