import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(140,0,255,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,255,255,0.15),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,0,128,0.15),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400"></span>
              Available for crazy projects
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9, ease: 'easeOut' }} className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Trippy Galaxy Rollercoaster
            <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">Futuristic Portfolio</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }} className="mt-6 max-w-xl text-base md:text-lg text-white/80">
            I design and build immersive, playful web experiences. Buckle up for neon gradients, liquid waveforms, and cosmic interactions.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="pointer-events-auto group inline-flex items-center gap-3 rounded-xl bg-white/90 px-5 py-3 font-semibold text-gray-900 shadow-[0_10px_40px_-10px_rgba(236,72,153,0.6)] transition hover:bg-white">
              Explore Work
              <span className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white">
                <span className="absolute inset-0 -translate-x-full bg-white/30 transition group-hover:translate-x-0" />
                →
              </span>
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
              Let’s Talk
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
