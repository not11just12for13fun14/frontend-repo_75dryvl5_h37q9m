import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_10%,rgba(168,85,247,.08),transparent),radial-gradient(400px_180px_at_80%_60%,rgba(34,211,238,.08),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold">
          About
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-lg text-white/80">
          I craft interfaces that feel alive. My work blends playful motion, cinematic depth, and high-performance code. I love building weird, delightful things on the web.
        </motion.p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            'Motion-first design philosophy',
            'Shaders, WebGL and creative coding',
            'Systems thinking and polish at every layer'
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-white/90">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
