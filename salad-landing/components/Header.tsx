'use client';

import { useEffect, useState } from 'react';
import { useLang, useT } from '@/lib/i18n';

export function Header() {
  const t = useT();
  const { toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#philosophy', label: t.nav.philosophy },
    { href: '#products', label: t.nav.products },
    { href: '#lifestyle', label: t.nav.lifestyle },
    { href: '#where', label: t.nav.where },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-earth bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-serif text-2xl font-semibold tracking-tight text-ink">
          {t.brand}
          <span className="text-leaf">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone transition-colors hover:text-leaf"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/presentation.html"
            className="inline-flex items-center gap-1 text-sm font-medium text-leaf transition-colors hover:text-leaf-dark"
          >
            {t.nav.deck}
            <span aria-hidden>↗</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="rounded-full border border-leaf/30 px-3 py-1.5 text-xs font-semibold text-leaf transition-colors hover:bg-leaf hover:text-cream"
            aria-label="Switch language"
          >
            {t.nav.langLabel}
          </button>
          <a
            href="#where"
            className="hidden rounded-full bg-leaf px-5 py-2 text-sm font-medium text-cream transition-colors hover:bg-leaf-dark sm:inline-block"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-earth text-ink md:hidden"
            aria-label="Menu"
          >
            <span className="text-lg leading-none">{open ? '×' : '≡'}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-earth bg-cream md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-stone transition-colors hover:text-leaf"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/presentation.html"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1 py-3 text-sm font-medium text-leaf transition-colors hover:text-leaf-dark"
            >
              {t.nav.deck}
              <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
