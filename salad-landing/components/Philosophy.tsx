'use client';

import { useT } from '@/lib/i18n';
import { Reveal } from './Reveal';

export function Philosophy() {
  const t = useT();

  return (
    <section id="philosophy" className="border-t border-earth py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-leaf">
              {t.philosophy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="whitespace-pre-line font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {t.philosophy.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-earth bg-earth md:grid-cols-3">
          {t.philosophy.items.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col bg-cream p-8 lg:p-10">
                <span className="font-serif text-5xl font-light text-lime">{item.no}</span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
