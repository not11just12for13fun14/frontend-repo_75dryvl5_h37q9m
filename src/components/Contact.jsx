import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_10%,rgba(168,85,247,.08),transparent),radial-gradient(400px_180px_at_80%_60%,rgba(34,211,238,.08),transparent)]" />
      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-bold">
          Let’s build something cosmic
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 text-white/80">
          Email me at <a className="underline decoration-fuchsia-400/60 underline-offset-4 hover:decoration-fuchsia-300" href="mailto:hello@cosmic.dev">hello@cosmic.dev</a> or DM on Twitter @cosmic.
        </motion.p>
        <motion.a
          href="mailto:hello@cosmic.dev"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(34,211,238,0.6)]"
        >
          Contact Me
        </motion.a>
        <p className="mt-8 text-xs text-white/50">Made with stardust. © {new Date().getFullYear()} Cosmic Dev</p>
      </div>
    </section>
  )
}
