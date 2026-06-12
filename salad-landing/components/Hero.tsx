'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useT } from '@/lib/i18n';

export function Hero() {
  const t = useT();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-lime) 0, transparent 70%)' }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-leaf/25 bg-white/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-leaf"
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="whitespace-pre-line font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-md text-base leading-relaxed text-stone sm:text-lg"
          >
            {t.hero.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="rounded-full bg-leaf px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-leaf-dark"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#where"
              className="rounded-full border border-leaf/30 px-7 py-3 text-sm font-medium text-leaf transition-colors hover:bg-leaf/5"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-earth pt-8"
          >
            {[
              { v: t.hero.stat1, l: t.hero.stat1label },
              { v: t.hero.stat2, l: t.hero.stat2label },
              { v: t.hero.stat3, l: t.hero.stat3label },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl font-semibold text-leaf">{s.v}</dt>
                <dd className="mt-1 text-xs leading-snug text-stone">{s.l}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl shadow-leaf/10">
            <Image
              src="/images/hero.jpg"
              alt={t.brand}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-earth bg-cream p-4 shadow-lg sm:block">
            <p className="font-serif text-2xl font-semibold text-leaf">100%</p>
            <p className="text-xs text-stone">{t.hero.stat1label}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
