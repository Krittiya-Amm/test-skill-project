'use client';

import Image from 'next/image';
import { useT } from '@/lib/i18n';
import { Reveal } from './Reveal';

const tiles = [
  { src: '/images/lifestyle-1.jpg', offset: '' },
  { src: '/images/lifestyle-2.jpg', offset: 'mt-8' },
  { src: '/images/lifestyle-3.jpg', offset: '' },
  { src: '/images/lifestyle-4.jpg', offset: 'mt-8' },
];

export function Lifestyle() {
  const t = useT();

  return (
    <section id="lifestyle" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {tiles.map((tile) => (
              <div
                key={tile.src}
                className={`relative aspect-square w-full overflow-hidden rounded-3xl ${tile.offset}`}
              >
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-leaf">
              {t.lifestyle.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="whitespace-pre-line font-serif text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {t.lifestyle.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-stone">{t.lifestyle.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {t.lifestyle.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-leaf text-[11px] text-cream">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
