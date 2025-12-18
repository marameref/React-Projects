import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Link from 'next/link'

// Google Fonts: Inter for prose, JetBrains Mono for the "Dev" feel
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'DevOps & AI Architect | Portfolio',
  description: 'Specializing in LLM Infrastructure, Vibe Coding, and Technical Documentation',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-slate-950 text-slate-200 antialiased`}>
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="font-mono font-bold text-blue-400 hover:text-blue-300 transition">
              ~/marameref_
            </Link>
            
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
              <Link href="/writing" className="hover:text-blue-400 transition">Technical Writing</Link>
              <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="pt-24 pb-12">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-xs font-mono">
          © {new Date().getFullYear()} // DEPLOYED_VIA_GITHUB_ACTIONS // VIBE_CODED_UI
        </footer>
        
      </body>
    </html>
  )
}