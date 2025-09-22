import './global.css'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <button className="relative w-[150px] h-[50px] border-none outline-none bg-[#222] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r from-[#7debf2] via-[#60a4ff] via-[#ffcc2f] via-[#ef5734] via-[#e4ad7a] via-[#d770b2] via-[#3d9c6c] via-[#9ed478] animate-move after:absolute after:inset-0 after:bg-gradient-to-r from-[#7debf2] via-[#60a4ff] via-[#ffcc2f] via-[#ef5734] via-[#e4ad7a] via-[#d770b2] via-[#3d9c6c] via-[#9ed478] after:blur-[20px] after:-z-10 hover:after:blur-[40px]">
        <span className="absolute inset-[2px] flex justify-center items-center w-[calc(100%-4px)] h-[calc(100%-4px)] bg-[#222] text-[#e9e9e9] text-center leading-[48px]">SHADOWGLOW</span>
      </button>
    </div>
  )
}

const root = document.createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)
