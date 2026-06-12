# Research & Plan

> Output ของ Stage 1 — foundation ที่ Stage 2 และทั้ง project ใช้

---

## Meta

**Project:** ผักสลัด — Landing Page (mock-up demo นำเสนอลูกค้า)
**Date:** 2026-06-05
**Designer:** krittiya.won

---

## Section 1 — Domain Research

**Industry / domain:** Packaged fresh salad / ready-to-eat healthy F&B (retail ผ่าน premium supermarket — Top / Gourmet Market)

**Domain norms:**
- ผู้บริโภคกลุ่มนี้ตัดสินใจด้วย "ภาพ" — รูปผัก/สลัดต้องสด น่ากิน เป็น hero
- ความน่าเชื่อถือมาจาก transparency: ที่มาวัตถุดิบ, ความสด, ไม่มีสารปนเปื้อน, ล้างพร้อมทาน
- โทนสี green/white/earth สื่อ fresh + clean + healthy เป็น convention ของ category
- "Where to buy" สำคัญ — ลูกค้าซื้อที่ retail ไม่ได้ขายตรงบนเว็บ (เว็บคือ brand/awareness)

**Common UI patterns (healthy F&B landing):**
- Hero เต็มจอ: ภาพสลัด close-up + headline สั้น + CTA ("ดูสินค้า" / "หาซื้อได้ที่")
- Product showcase แบบ card grid (รูป + ชื่อ + จุดเด่นสั้น)
- "Why us / จุดเด่น" strip แบบ icon + ข้อความ (สด / คลีน / ปลอดภัย / ล้างพร้อมทาน)
- Where to buy: โลโก้ retailer (Top, Gourmet) + ภาพ shelf
- Lifestyle / health benefit section ใช้ภาพคนกิน / mood
- Footer: contact, social (FB/IG/TikTok), language switch

---

## Section 2 — Reference Scan

| # | Reference site | URL | What we like | What we'd change |
|---|---|---|---|---|
| 1 | Oh! Veggies (คู่แข่งตรง) | https://www.ohveggies.com/ | ขาย packed salad (Cream/Italian 150g) ใน Tops เหมือน positioning ลูกค้า; มีทั้ง retail + ร้าน; social-active | เว็บเน้น product listing มากกว่า brand storytelling — เราชู mood "clean/healthy" ให้พรีเมียมกว่า |
| 2 | Fresh Vegetable landing patterns (Figma community / Nicepage) | figma.com community + nicepage.com | layout hero+product grid+benefit strip ชัด เป็น pattern มาตรฐาน | ปรับให้ minimal + 2 ภาษา + premium supermarket feel |
| 3 | Salad delivery leaders (Gardencup ฯลฯ) 2026 trend | gardencup.com | trend "clean & simple, fewer ingredients, recognizable greens, transparency" | นำ principle transparency + freshness มาใช้กับ retail context (ไม่ใช่ delivery) |

**Synthesis:**
ตลาด packed salad premium ใช้ "ภาพสด + transparency + green/white minimal" เป็นสูตรชนะ. คู่แข่งตรง (Oh! Veggies) เน้น product-listing + retail availability แต่ brand storytelling ยังบาง — โอกาสของเราคือทำ landing ที่ **mood clean/healthy พรีเมียมกว่า** เล่าเรื่องแบรนด์ + จุดเด่นสินค้า แล้วปิดด้วย "where to buy" (Top/Gourmet) ชัดเจน เพราะ conversion จริงอยู่ที่ shelf ไม่ใช่บนเว็บ

---

## Section 3 — User Mental Model

**Primary user:**
- Role: ผู้บริโภคสายรักสุขภาพ / คนทำงานในเมืองที่อยากกินคลีนแบบสะดวก
- Frequency of use: occasional (เข้ามาดูตอนเห็นสินค้าที่ shelf / เห็นจาก social)
- Tech savvy: medium
- Device: **mobile-first** (เห็น QR/ลิงก์จาก packaging หรือ social แล้วเปิดบนมือถือ)

**Secondary user:** Buyer / category manager ของ supermarket (Top/Gourmet) ที่อยากเช็คความน่าเชื่อถือแบรนด์ — เว็บช่วยเสริม credibility ตอน pitch เข้าห้าง

**User's mental model:**
user คิดว่าเว็บนี้คือ "หน้าร้าน digital ของแบรนด์ผักสลัด" — มาเพื่อ (1) ดูว่าแบรนด์น่าเชื่อถือ/สะอาดไหม (2) มีสินค้าอะไรบ้าง (3) ซื้อได้ที่ไหน — ไม่ได้คาดหวังจะ checkout บนเว็บ

**Top tasks:**
1. ดูภาพสินค้า + เข้าใจว่ามีสลัดแบบไหนบ้าง
2. รับรู้จุดเด่น (สด / คลีน / ปลอดภัย / ล้างพร้อมทาน)
3. รู้ว่าหาซื้อได้ที่ไหน (Top / Gourmet Market)

**Frustrations to avoid:**
- ภาพสินค้าไม่สด/ดูไม่อร่อย → เสีย trust ทันที
- ข้อมูล where-to-buy หายาก
- สลับภาษา TH/EN ไม่เจอ / โหลดช้าบนมือถือ

---

## Section 4 — Brand Assimilation

**Brand assets received:**
- [ ] Logo — *ยังไม่มี (open question #1)*
- [ ] Color palette — *ยังไม่มี*
- [ ] Font family — *ยังไม่มี*
- [ ] Voice / tone guide — มีแค่ direction: "รักสุขภาพ สายคลีน"
- [ ] Product photos — ref image ใน Jira card โหลดไม่ได้ (staging media) → ใช้ placeholder/stock ใน demo

**Style tokens (PROPOSED — neutral healthy palette สำหรับ demo, swap เมื่อ brand kit มา):**
| Token | Value | Note |
|---|---|---|
| Primary (fresh green) | `#3E7C4F` | สื่อ fresh/healthy |
| Secondary (leaf/lime) | `#8FBF5B` | accent สด |
| Background (off-white) | `#FAFAF5` | clean, อ่านสบาย |
| Ink (charcoal) | `#1F2A24` | text |
| Accent (earth/cream) | `#E8E2D0` | warm, organic feel |
| Heading font | "Poppins" / "IBM Plex Sans Thai" | modern, รองรับ TH/EN |
| Body font | "Inter" / "IBM Plex Sans Thai" | อ่านง่าย 2 ภาษา |
| Border radius | 16px | soft, friendly |

**Brand voice:** Friendly + clean + trustworthy (ไม่ทางการจัด, อบอุ่น, เน้นสุขภาพ)

**Workaround (brand assets incomplete):**
ใช้ neutral healthy palette + placeholder content ที่เขียนเองให้สมจริง สำหรับ demo. ที่ Stage 2 จะเสนอ **2 brand directions** ให้ลูกค้าเลือก (เช่น "Fresh Garden" green-forward vs "Premium Clean" white/earth-minimal). เมื่อได้ logo/สีจริงค่อย swap tokens

---

## Section 5 — Tech Feasibility

**API readiness:** ไม่ต้องมี API — เป็น static marketing landing (content ฝังในโค้ด/ไฟล์ content)
**Integration points:** Social links (FB/IG/TikTok), Google Maps embed (where to buy) — optional
**Performance:** static + image-optimized (Next.js Image) → เร็วบน mobile
**Browser/device support:** modern browsers + iOS 14+ / Android 10+, mobile-first responsive

---

## Section 6 — Tech Stack (LOCKED)

**Choice:** Modern default (greenfield, client neutral)

**Rationale:**
ไม่มี existing codebase ลูกค้าให้ integrate และเป็น marketing landing ที่ต้อง SEO + responsive + โหลดเร็ว + 2 ภาษา. Next.js (SSG) ตอบโจทย์ SEO/speed, Tailwind เร็วและ AI-friendly สำหรับ vibe code, Framer Motion ใส่ความ premium ให้ landing. อ้าง `tech-stack-guide.md` ตาราง "Landing page / marketing → Next.js + Tailwind + Framer Motion"

**Stack details:**
- Framework: Next.js 15 (App Router, static export-friendly)
- Language: TypeScript
- Styling: Tailwind CSS
- Component library: shadcn/ui (เฉพาะ primitive ที่ใช้ — button, card)
- Animation: Framer Motion (subtle, premium feel)
- i18n: next-intl (TH default / EN) — locale switch
- Forms: ไม่จำเป็น (ไม่มี contact form ใน scope; ถ้าเพิ่มใช้ react-hook-form + Zod)
- State: useState เท่าที่จำเป็น (locale, mobile nav)
- Data: content เป็น typed object ในไฟล์ (TH/EN) — ไม่มี backend

> ⚠ ไม่ใช้ Sellsuki DS 1.0 / DS 2.0 (project track)

**Build tool:** Next.js · **Hosting:** Vercel (staging URL)

---

## Section 7 — Milestone Plan

```
Day 1  ✓ Stage 0 — PM Card
Day 1  ✓ Stage 1 — Research & Plan (this doc) + stack locked
Day 2  → Stage 2 — Vibe Design: 2 brand directions (variants)
        → Client checkpoint #1: variant pick (end of Day 2)
Day 3-4   Stage 3 — Vibe Code: build variant ที่เลือก (TH/EN, responsive)
Day 4     Stage 4 — Deploy staging (Vercel) → shareable URL
Day 5     Stage 5 — Test & Improve: UAT round 1
        → Client checkpoint #2: UAT sign-off
Day 5     Stage 6 — Handoff package
```

**Buffer:** 1 วัน (เผื่อ brand asset มาช้า / UAT เพิ่ม)

---

## Section 8 — Risks & Mitigations

| # | Risk | Mitigation |
|---|---|---|
| 1 | ไม่มี brand kit (logo/สี/ฟอนต์) | เริ่ม Stage 2 ด้วย neutral token + เสนอ 2 directions; swap เมื่อ kit มา |
| 2 | Reference / product images โหลดไม่ได้ | ใช้ stock/placeholder ใน demo + note ใน handoff ให้แทนภาพจริง |
| 3 | Content TH/EN ยังไม่มี | draft placeholder copy ที่สมจริง; mark ส่วนที่ต้องให้ลูกค้า confirm |
| 4 | เป็น demo pitch — อาจมี deadline กระชั้น | scope ล็อกที่ single landing; ไม่รับ feature เพิ่มก่อน pitch |

---

## Section 9 — Open Questions (rolled forward from Stage 0)

| # | Question | Status |
|---|---|---|
| 1 | Logo + corporate color | open — demo ใช้ proposed palette ไปก่อน |
| 2 | Deadline / pitch date | open — ไม่ block |
| 3 | รูปสินค้าจริง / โทนภาพ | open — demo ใช้ placeholder |
| 4 | Copy TH+EN ใครเตรียม | open — demo draft ให้ |
| 5 | จุดขาย highlight (organic/hydroponic/pre-washed) | open — demo ชู "สด/คลีน/ล้างพร้อมทาน" generic |

---

## Gate to Stage 2

- [x] Domain understood, references scanned
- [x] User model documented
- [x] Brand assets extracted (workaround agreed — neutral palette + 2 directions)
- [x] Stack locked + rationale
- [x] Milestone plan with dates + checkpoints
- [x] Risks identified + mitigation
- [x] No blocking open question (ทั้งหมด non-blocking สำหรับ demo)
