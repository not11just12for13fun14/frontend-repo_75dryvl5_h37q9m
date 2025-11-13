import { Menu, Rocket, Mail, Github, Linkedin } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-sm md:text-base text-white/80 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#top" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-white shadow-[0_0_40px_-10px] shadow-fuchsia-500/60">
                <Rocket size={18} />
              </div>
              <span className="text-white font-semibold tracking-wide">Cosmic.Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="ml-2 hidden lg:flex items-center gap-3">
                <a href="mailto:hello@cosmic.dev" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="GitHub" rel="noreferrer">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/" target="_blank" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" aria-label="LinkedIn" rel="noreferrer">
                  <Linkedin size={18} />
                </a>
              </div>
            </nav>

            <button className="md:hidden grid place-items-center h-10 w-10 rounded-xl bg-white/10 text-white" aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
