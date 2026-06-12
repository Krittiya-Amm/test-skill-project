'use client';

import Image from 'next/image';
import { useT } from '@/lib/i18n';
import { Reveal } from './Reveal';

const productImages = [
  '/images/product-garden.jpg',
  '/images/product-caesar.jpg',
  '/images/product-italian.jpg',
  '/images/product-avocado.jpg',
];

export function Products() {
  const t = useT();

  return (
    <section id="products" className="bg-ink py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime">
                {t.products.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="whitespace-pre-line font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {t.products.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-cream/70">{t.products.body}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.products.items.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-lime/40">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={productImages[i]}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-flex w-fit rounded-full bg-lime/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-lime">
                    {p.tag}
                  </span>
                  <h3 className="font-serif text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
