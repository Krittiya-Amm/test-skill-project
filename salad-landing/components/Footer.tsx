'use client';

import { useT } from '@/lib/i18n';

export function Footer() {
  const t = useT();

  return (
    <footer className="border-t border-earth bg-cream py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl font-semibold tracking-tight text-ink">
              {t.brand}
              <span className="text-leaf">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              {t.footer.social.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-earth px-4 py-1.5 text-xs font-medium text-stone transition-colors hover:border-leaf hover:text-leaf"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-stone transition-colors hover:text-leaf">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-earth pt-6">
          <p className="text-xs text-stone">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
