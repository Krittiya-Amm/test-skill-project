'use client';

import { useT } from '@/lib/i18n';
import { Reveal } from './Reveal';

export function WhereToBuy() {
  const t = useT();

  return (
    <section id="where" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-[2rem] px-8 py-14 lg:px-16 lg:py-20"
          style={{
            background:
              'linear-gradient(135deg, var(--color-leaf) 0%, var(--color-leaf-dark) 100%)',
          }}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime">
                  {t.where.eyebrow}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="whitespace-pre-line font-serif text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl">
                  {t.where.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80">
                  {t.where.body}
                </p>
              </Reveal>
            </div>

            <div className="space-y-4">
              {t.where.stores.map((store, i) => (
                <Reveal key={store.name} delay={i * 0.1}>
                  <div className="flex items-center gap-5 rounded-2xl bg-cream/10 p-5 backdrop-blur-sm transition-colors hover:bg-cream/15">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-cream/90 font-serif text-2xl font-semibold text-leaf">
                      {store.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-cream">{store.name}</h3>
                      <p className="text-sm text-cream/70">{store.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
