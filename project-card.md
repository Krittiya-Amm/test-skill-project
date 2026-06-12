# Project Card

> Output ของ Stage 0 — structured version ของ raw PM brief

---

## Section 1 — Project Identity

**Project name:** Salad Veggies — Landing Page (Mock-up demo นำเสนอลูกค้า)
**Client:** ธุรกิจขายผักสลัดแบบแพ็ค (ขายใน Top Supermarket / Gourmet Market) — *ชื่อแบรนด์ TBD*
**PM:** TBD
**Designer (lead):** krittiya.won
**Date received:** 2026-06-05
**Brief source:** Jira card DES-2068 (Designer project)

---

## Section 2 — Tier & Classification

**Project tier:**
- [x] S — landing page / single screen / < 1 week
- [ ] M — multi-screen / 1-3 weeks
- [ ] L — multi-module / 1-3 months
- [ ] Enterprise — large scope / 3+ months / multiple teams

**Tier rationale:**
Single landing page, brief สั้น (<100 words), 1 decision maker, static/SPA, brand loose (มี mood&tone + reference เท่านั้น). Signal ส่วนใหญ่อยู่ใน S. 2-ภาษา (TH/EN) เพิ่ม effort เล็กน้อยแต่ยังเป็น S — เป็น mock-up demo เพื่อนำเสนอลูกค้า

**Client relationship:**
- [x] First-time client (presentation/pitch stage — ยังเป็น demo นำเสนอ)

**Urgency:**
- [ ] Hard deadline
- [x] Soft deadline / flexible — *ยังไม่ระบุใน card (open question)*

---

## Section 3 — Objective & Deliverable

**Client's objective (in their words):**
> ออกแบบเว็บ Landing Page ธุรกิจขายผักสลัดแบบแพ็ค ลูกค้าต้องการเว็บไซต์นำเสนอสินค้าผักสลัดที่ขายใน Top Supermarket / Gourmet Market เป็นเว็บ 2 ภาษา (ไทย/อังกฤษ) Mood & Tone: รักสุขภาพ สายคลีน

**Translated objective (1 line):**
Landing page นำเสนอแบรนด์ผักสลัดพร้อมทาน/แบบแพ็ค ให้ดู clean, healthy, น่าเชื่อถือ เพื่อใช้ pitch/นำเสนอลูกค้า (TH/EN)

**End users:**
ผู้บริโภคสายรักสุขภาพ + buyer ของ supermarket (Top / Gourmet Market) ที่เข้ามาดูข้อมูลแบรนด์และสินค้า — *ยืนยัน persona กับ PM*

**Deliverable list (in scope):**
- [x] Brand alignment (mood&tone: clean / healthy)
- [x] Landing page (single page, responsive) — sections: Hero, About/จุดเด่นแบรนด์, Product showcase (ผักสลัด), Where to buy (Top/Gourmet), Health/benefit, Contact/CTA
- [x] 2-language support (TH / EN)
- [x] Code repo + README
- [x] Staging deploy (shareable URL)
- [x] Handoff doc

**Out of scope (explicit):**
- E-commerce / ระบบตะกร้า–ชำระเงิน (เป็น presentation site)
- Backend / CMS / ระบบจัดการสินค้า
- Multi-page (blog, account ฯลฯ) — single landing เท่านั้น

---

## Section 4 — Tech Stack (locked at Stage 1)

**Stack choice:**
- [x] **Modern default** (greenfield, client neutral) — 🔒 **LOCKED at Stage 1**: Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion + next-intl (TH/EN)

> ⚠ ห้ามใช้ Sellsuki DS 1.0 / DS 2.0 ใน project track

**Rationale:**
Greenfield marketing landing, ต้อง SEO + responsive + โหลดเร็ว + 2 ภาษา. Next.js (SSG) ตอบ SEO/speed, Tailwind AI-friendly, Framer Motion เพิ่ม premium feel. รายละเอียดเต็มใน `research-plan.md` Section 6

**Deploy target:**
- [x] Vercel (default — staging URL สำหรับ demo)

---

## Section 5 — Milestone (filled at Stage 1)

**Total estimated timeline:** ~4-5 วันทำงาน (S, demo)

| Stage | Day(s) | Deliverable | Client checkpoint? |
|---|---|---|---|
| 0 Brief Intake | Day 1 | PM Card | — |
| 1 Research & Plan | Day 1 | research-plan (light) | — |
| 2 Vibe Design | Day 2 | 1-2 variants | ✓ variant pick |
| 3 Vibe Code | Day 3-4 | working landing page | — |
| 4 Deploy | Day 4 | staging URL | — |
| 5 Test & Improve | Day 5 | iterated build | ✓ UAT round 1 |
| 6 Handoff | Day 5 | handoff package | ✓ sign-off |

**Buffer:** 1 วัน

---

## Section 6 — UAT Round Budget

**Budgeted rounds:** 1 (S)

| Round | Status | Date | Findings (B/I/CR/OOS) |
|---|---|---|---|
| 1 | not started | | |

**Overage policy:** Round 2 triggers scope conversation with PM

---

## Section 7 — Open Questions

| # | Question | Owner | Asked by | Status |
|---|---|---|---|---|
| 1 | ชื่อแบรนด์ + logo + corporate color มีหรือยัง | Client | 2026-06-05 | open |
| 2 | Deadline ของ demo นี้ (มี pitch meeting วันไหน) | PM | 2026-06-05 | open |
| 3 | มีรูปสินค้าจริง / โทนภาพที่อยากได้ไหม (card มี ref image แต่โหลดผ่าน API ไม่ได้) | Client | 2026-06-05 | open |
| 4 | Copy/เนื้อหา TH+EN ลูกค้าเตรียมให้ หรือให้ทีม draft | PM | 2026-06-05 | open |
| 5 | ต้องมีจุดขายไหน highlight เป็นพิเศษ (เช่น organic, hydroponic, pre-washed) | Client | 2026-06-05 | open |

---

## Section 8 — Risks (M/L only)

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | ไม่มี brand asset (logo/สี/ฟอนต์) → ต้อง propose direction เอง | med | med | Stage 2 เสนอ 2 variants พร้อม brand direction ให้ลูกค้าเลือก |
| 2 | Reference images ใน Jira card โหลดไม่ได้ (staging media) | high | low | ขอ PM ส่งภาพตรง หรือใช้ stock placeholder ใน demo |
| 3 | Content TH/EN ยังไม่มี | med | low | ใช้ placeholder copy ที่เขียนเองให้สมจริง แล้วทำ note ใน handoff |

---

## Section 9 — Links

- Brief source (original): https://sellsuki.atlassian.net/browse/DES-2068
- Research plan: `research-plan.md` (TBD Stage 1)
- Design spec: `vibe-design-spec.md` (TBD Stage 2)
- Code repo: TBD
- Staging URL: TBD
- Handoff doc: `handoff-doc.md` (TBD Stage 6)
- Competitor reference: https://ohveggies.com/

---

## Status

- [x] Stage 0 — Brief Intake
- [x] Stage 1 — Research & Plan
- [ ] Stage 2 — Vibe Design
- [ ] Stage 3 — Vibe Code
- [ ] Stage 4 — Deploy
- [ ] Stage 5 — Test & Improve
- [ ] Stage 6 — Handoff
- [ ] Closed
- [ ] Blocked

**Last updated:** 2026-06-05
