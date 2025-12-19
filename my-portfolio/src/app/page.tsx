import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="z-10">
        <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          DevOps & AI Engineer
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building scalable infrastructure for the AI era. Specialist in 
          <span className="text-blue-400"> Vibe Coding</span> and 
          <span className="text-emerald-400"> Cloud Architecture</span>.
        </p>
        
        <div className="flex gap-4 justify-center">
          {/* HERE IS THE BUTTON YOU NEEDED */}
          <Link href="/projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition">
            View My Stack
          </Link>
          <Link href="/writing" className="border border-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-bold transition">
            Read My Docs
          </Link>
        </div>
      </div>
    </main>
  );
}