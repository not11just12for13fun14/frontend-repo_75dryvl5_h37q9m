import { motion } from 'framer-motion'
import { Code2, Zap, Cpu } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Three.js', 'Framer Motion', 'Tailwind'] },
  { icon: Cpu, title: 'Creative Tech', items: ['WebGL', 'Shaders', 'Canvas', 'Particles'] },
  { icon: Zap, title: 'Tooling', items: ['Performance', 'A11y', 'Design Systems', 'Testing'] },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#07070d] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(300px_120px_at_20%_30%,rgba(217,70,239,.08),transparent),radial-gradient(300px_120px_at_70%_70%,rgba(6,182,212,.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white">
                <s.icon size={18} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-white/80">
                {s.items.map(it => <li key={it}>• {it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
