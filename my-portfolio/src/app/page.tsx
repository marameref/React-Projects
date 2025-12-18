import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="z-10 text-center">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          DevOps & AI Architect
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          I bridge the gap between <span className="text-blue-400 font-mono">Large Language Models</span> and 
          <span className="text-emerald-400 font-mono"> Scalable Infrastructure</span>. 
          Expert in Vibe Coding and Technical Storytelling.
        </p>
        
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-bold transition">View My Stack</button>
          <button className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-full font-bold transition">Read My Docs</button>
        </div>
      </div>
    </main>
  )
}