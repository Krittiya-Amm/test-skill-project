# Vibe Design Spec

> Living document — เริ่มที่ variants ใน Stage 2, finalize หลังลูกค้าเลือก

---

## Meta

**Project:** ผักสลัด — Landing Page (mock-up demo)
**Version:** v1.0
**Date:** 2026-06-05
**Designer:** krittiya.won
**Status:** Picked (Hybrid) → In Vibe Code

---

## Section 1 — Variants Presented (Stage 2)

ทั้งสอง variant เป็น landing page เต็มหน้า, responsive, 2 ภาษา (TH/EN toggle), sections เหมือนกัน:
Hero → จุดเด่น/ปรัชญา → Product showcase → Lifestyle → Where to buy (Top/Gourmet) → Footer

### Variant A — "Fresh Garden"

**1-line summary:**
เขียวสด สดชื่น เป็นกันเอง — โทนเขียว (#3E7C4F) + ไลม์ + off-white, การ์ดมน, ภาพผักเด่น, มี hover/scroll animation

**Hero / first impression:**
แบ่งซ้าย-ขวา: headline ตัวหนา + CTA เขียว ด้านซ้าย, ภาพสลัดแนวตั้งด้านขวา ให้ความรู้สึก lively, เข้าถึงง่าย

**Trade-off:**
- Pros: อบอุ่น เข้าถึงง่าย เหมาะ mass market, ภาพอาหารเด่นกระตุ้นความอยาก, energetic
- Cons: ดู mainstream — อาจไม่โดดเด่นจากคู่แข่ง (Oh! Veggies) ที่ก็โทนเขียว

**Best for:** อยาก position แบรนด์ให้ friendly, เข้าถึงคนหมู่มาก, ขายความสด/ความอยากอาหาร

**Artifact:** [mockups/variant-a-fresh-garden.html](mockups/variant-a-fresh-garden.html)

**Brand name ใน mock:** "FreshLeaf" (placeholder)

### Variant B — "Premium Clean"

**1-line summary:**
ขาว/เอิร์ธ มินิมอล พรีเมียม — off-white + earth/cream + เขียว sage เป็น accent, ฟอนต์ serif (Fraunces), whitespace เยอะ, editorial layout

**Hero / first impression:**
Hero กลางหน้า whitespace เยอะ, headline serif หรู, ภาพ wide เต็มความกว้างด้านล่าง — ให้ความรู้สึก high-end, สงบ, น่าเชื่อถือ

**Trade-off:**
- Pros: พรีเมียม โดดเด่นจากคู่แข่ง, เหมาะ Gourmet Market, ดู trustworthy/curated, อายุการใช้งานแบรนด์ยาว
- Cons: เรียบ–อาจดู "เย็น" เกินไปสำหรับ mass, ต้องพึ่งคุณภาพภาพถ่ายจริงสูง (ภาพไม่สวย = พังทันที)

**Best for:** อยาก position พรีเมียมเหนือคู่แข่ง, จับกลุ่ม Gourmet/คนเมืองรายได้สูง, สร้าง brand prestige

**Artifact:** [mockups/variant-b-premium-clean.html](mockups/variant-b-premium-clean.html)

**Brand name ใน mock:** "Verdé" (placeholder)

### หน้าเทียบ

**Compare view (วางคู่กัน + toggle desktop/mobile + ภาษา):** [mockups/compare.html](mockups/compare.html)

---

## Section 2 — Client Pick

**Picked:** Hybrid — "Premium Garden"

**ผสมจาก:** Layout/โครงสร้าง + ความพรีเมียม/editorial ของ **Variant B** + โทนสีเขียวสด (leaf/lime) ของ **Variant A**

**Picked at:** 2026-06-05
**Decision context:** ลูกค้า (ผ่าน designer krittiya.won) เลือก "เอา layout B แต่โทนเขียวแบบ A"
**Adjustments requested:**
- ใช้ editorial layout ของ B (hero กลาง whitespace เยอะ, serif headline, asymmetric product grid, numbered philosophy, full-width lifestyle overlay, understated stockists)
- เปลี่ยน palette จาก earth/sage → green-forward (leaf #3E7C4F primary, lime #8FBF5B accent) บน off-white

---

## Section 3 — Final Direction (after pick)

**Design direction (1 statement):**
> เว็บควรให้ความรู้สึก **พรีเมียม สะอาด สงบ** แบบ editorial แต่ **สดชื่นด้วยโทนเขียวธรรมชาติ** — ให้ผู้ใช้เข้าใจแบรนด์ + เห็นสินค้า + รู้ว่าซื้อได้ที่ไหน โดยไม่รก

**Style identity:**
- Color: primary leaf `#3E7C4F`, accent lime `#8FBF5B`, bg off-white `#FAFAF5`, ink `#1F2A24`, warm earth `#E8E2D0` (เป็น secondary/divider เท่านั้น)
- Typography: heading = Fraunces (serif, พรีเมียม) + IBM Plex Sans Thai; body = Inter + IBM Plex Sans Thai
- Spacing rhythm: generous whitespace (editorial), base 4px, section padding ใหญ่
- Tone: premium-friendly, clean, trustworthy
- Motion: subtle scroll-reveal + hover (Framer Motion)

---

## Section 4 — Screen-by-screen Spec

**Single page** (TH default `/th`, EN `/en`) — sections เรียงตามนี้:

| # | Section | โครงสร้าง (จาก layout B) | โทน (green) |
|---|---|---|---|
| 1 | Header (sticky) | minimal nav, logo serif, lang toggle TH/EN, mobile menu | leaf links, off-white bg |
| 2 | Hero | กลางหน้า, whitespace เยอะ, eyebrow + serif headline + subtext + text-link CTA, ภาพ wide ด้านล่าง | eyebrow lime, CTA leaf |
| 3 | Philosophy | grid [1fr_2fr], numbered list 01–03 (สด/ล้างพร้อมทาน/ปลอดภัย) | number = lime, heading serif |
| 4 | Products | asymmetric 2-col (เยื้องสลับ), serif name + 150g + desc + เส้นคั่น | image block green-tint, divider earth |
| 5 | Lifestyle | full-width image + dark overlay + serif headline ซ้าย | overlay ink, text off-white |
| 6 | Where to buy | understated, eyebrow + serif "พบเราได้ที่" + Top · Gourmet | leaf text |
| 7 | Footer | logo + tagline + social | leaf accent, light bg |

**States (single marketing page):**
| State | Behavior |
|---|---|
| Default | static content render |
| Scroll-reveal | sections fade/slide in (Framer Motion `whileInView`) |
| Mobile nav | hamburger → slide/expand menu |
| Language toggle | TH ↔ EN (next-intl, locale routing) |
| Image fallback | ถ้าภาพจริงยังไม่มี → gradient placeholder + label (demo) |
| Hover | nav links underline, product image subtle zoom, CTA color shift |

**Responsive (mobile-first):**
- Mobile (<768): single column, hero text กลาง, products stack, nav → hamburger
- Tablet (768–1024): products 2-col, hero ภาพ wide
- Desktop (>1024): max-width container, asymmetric product offset, generous whitespace

---

## Section 5 — Component Inventory (locked stack: Next.js + Tailwind + shadcn/ui)

| Component | Stack source | ใช้ที่ไหน |
|---|---|---|
| Nav / Header (sticky, lang toggle, mobile menu) | custom + Tailwind | ทุกหน้า |
| Button (primary / outline) | shadcn/ui | hero, CTA, where-to-buy |
| Card (product) | shadcn/ui + Tailwind | product showcase |
| Section wrappers | Tailwind | ทุก section |
| Motion reveal | Framer Motion | scroll animation |
| LocaleProvider / switcher | next-intl | ทั้งเว็บ |

---

## Section 8 — Open Decisions (ต้องปิดก่อน Stage 3)

- [ ] เลือก Variant A หรือ B (หรือ hybrid) — owner: Client/PM
- [ ] Logo + corporate color (ถ้ามี ใช้แทน placeholder) — owner: Client
- [ ] Product จริง + รูปจริง (mock ใช้ placeholder + emoji) — owner: Client
- [ ] Copy TH/EN final (mock ใช้ draft) — owner: Client/PM

---

## Gate to Stage 3

- [ ] Client picked (or hybrid agreed)
- [ ] vibe-design-spec final สำหรับ picked variant
- [ ] All sections spec'd
- [ ] Responsive ระบุ (mobile-first)
- [ ] Component inventory complete
- [ ] Open decisions = 0
