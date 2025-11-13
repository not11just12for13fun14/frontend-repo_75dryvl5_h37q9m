import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Neon Odyssey',
    description: 'A WebGL-powered music-reactive landscape with liquid gradient waveforms.',
    tags: ['Three.js', 'Shaders', 'Audio'],
    link: '#'
  },
  {
    title: 'Holographic UI Kit',
    description: 'A component library with glass, glow, and chrome gradients for dashboards.',
    tags: ['Design', 'React', 'CSS'],
    link: '#'
  },
  {
    title: 'Cosmic Arcade',
    description: 'Mini game experiments: portals, particles, and physics-based interactions.',
    tags: ['Games', 'Physics', 'Canvas'],
    link: '#'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative bg-[#05050a] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(217,70,239,.08),transparent),radial-gradient(400px_160px_at_80%_30%,rgba(6,182,212,.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <Sparkles className="text-fuchsia-400" size={20} />
          <h2 className="text-2xl md:text-3xl font-bold">Featured Work</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 blur-2xl" />
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-fuchsia-300 group-hover:text-fuchsia-200">
                Visit <ExternalLink size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
