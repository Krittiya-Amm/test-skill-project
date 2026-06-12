export type Lang = 'th' | 'en';

const th = {
  brand: 'Verdant',
  nav: {
    philosophy: 'แนวคิด',
    products: 'สินค้า',
    lifestyle: 'ไลฟ์สไตล์',
    where: 'หาซื้อได้ที่',
    deck: 'สไลด์นำเสนอ',
    cta: 'หาซื้อได้ที่',
    langLabel: 'EN',
  },
  hero: {
    eyebrow: 'ผักสลัดพร้อมทาน · คัดสดทุกวัน',
    title: 'ความสดที่คุณ\nสัมผัสได้ในทุกคำ',
    body: 'ผักสลัดแบบแพ็คคัดคุณภาพ ล้างสะอาดพร้อมทาน ส่งตรงจากฟาร์มถึงชั้นวางในซูเปอร์มาร์เก็ตชั้นนำ เพื่อมื้อสุขภาพที่ไม่ต้องประนีประนอม',
    ctaPrimary: 'ดูสินค้าของเรา',
    ctaSecondary: 'หาซื้อได้ที่ไหน',
    stat1: '100%',
    stat1label: 'ล้างสะอาดพร้อมทาน',
    stat2: '24 ชม.',
    stat2label: 'จากฟาร์มถึงชั้นวาง',
    stat3: '0',
    stat3label: 'สารกันบูด',
  },
  philosophy: {
    eyebrow: 'แนวคิดของเรา',
    title: 'คลีนตั้งแต่เมล็ดพันธุ์\nจนถึงจานของคุณ',
    items: [
      {
        no: '01',
        title: 'ปลูกอย่างใส่ใจ',
        body: 'คัดเลือกสายพันธุ์และดูแลทุกแปลงปลูกด้วยมาตรฐานเกษตรปลอดภัย ลดการใช้สารเคมีให้น้อยที่สุด',
      },
      {
        no: '02',
        title: 'เก็บเกี่ยวตามเวลา',
        body: 'เก็บผักในช่วงที่สดที่สุดของวัน แล้วลำเลียงเข้าระบบควบคุมอุณหภูมิทันทีเพื่อคงความกรอบสด',
      },
      {
        no: '03',
        title: 'แพ็คพร้อมทาน',
        body: 'ล้างด้วยระบบสะอาดได้มาตรฐาน บรรจุในแพ็คที่ออกแบบให้คงความสด เปิดแล้วทานได้ทันที',
      },
    ],
  },
  products: {
    eyebrow: 'คอลเลกชันสลัด',
    title: 'เลือกจานโปรด\nของคุณ',
    body: 'สูตรสลัดที่คัดสรรมาเพื่อทุกไลฟ์สไตล์ ตั้งแต่มื้อเบาๆ จนถึงมื้อที่อิ่มเต็มคำ',
    items: [
      { emoji: '🥗', name: 'การ์เด้น สลัด', desc: 'ผักใบเขียวรวมหลากชนิด สดกรอบ เบาสบาย', tag: 'ขายดี' },
      { emoji: '🥬', name: 'ซีซาร์ สลัด', desc: 'โรเมนกรอบ ราดซีซาร์เข้มข้น โรยชีส', tag: 'คลาสสิก' },
      { emoji: '🍅', name: 'อิตาเลียน สลัด', desc: 'มะเขือเทศ มอสซาเรลลา ใบโหระพาหอม', tag: 'ใหม่' },
      { emoji: '🥑', name: 'อะโวคาโด โบวล์', desc: 'อะโวคาโดเนื้อนุ่ม ธัญพืช อิ่มมีประโยชน์', tag: 'โปรตีนสูง' },
    ],
  },
  lifestyle: {
    eyebrow: 'ไลฟ์สไตล์',
    title: 'สุขภาพดี\nไม่เคยง่ายขนาดนี้',
    body: 'ชีวิตยุ่งไม่ใช่ข้ออ้างของการกินไม่ดี Verdant ออกแบบมาเพื่อคนที่ใส่ใจตัวเอง แต่ไม่มีเวลาเตรียมอาหาร เปิดแพ็ค คลุกเคล้า แล้วเพลิดเพลินกับมื้อที่สดใหม่ได้ทุกที่',
    points: ['เหมาะกับมื้อกลางวันที่ออฟฟิศ', 'จัดเต็มสารอาหารหลังออกกำลังกาย', 'มื้อเย็นเบาๆ ที่ไม่เป็นภาระ'],
  },
  where: {
    eyebrow: 'หาซื้อได้ที่',
    title: 'พบกับ Verdant\nใกล้บ้านคุณ',
    body: 'วางจำหน่ายในซูเปอร์มาร์เก็ตชั้นนำ เลือกหยิบความสดได้ในแผนกผักสลัดพร้อมทาน',
    stores: [
      { name: 'Tops Supermarket', desc: 'ทุกสาขาทั่วประเทศ' },
      { name: 'Gourmet Market', desc: 'สาขาในห้างชั้นนำ' },
    ],
  },
  footer: {
    tagline: 'ความสดที่คุณสัมผัสได้ในทุกคำ',
    columns: [
      { title: 'เมนู', links: ['แนวคิด', 'สินค้า', 'ไลฟ์สไตล์', 'หาซื้อได้ที่'] },
      { title: 'ติดต่อ', links: ['hello@verdant.co.th', '02-123-4567', 'กรุงเทพมหานคร'] },
    ],
    social: ['Instagram', 'Facebook', 'LINE'],
    rights: '© 2026 Verdant. สงวนลิขสิทธิ์ทั้งหมด',
  },
};

const en: typeof th = {
  brand: 'Verdant',
  nav: {
    philosophy: 'Philosophy',
    products: 'Products',
    lifestyle: 'Lifestyle',
    where: 'Where to Buy',
    deck: 'Presentation',
    cta: 'Where to Buy',
    langLabel: 'TH',
  },
  hero: {
    eyebrow: 'Ready-to-eat salads · Freshly picked daily',
    title: 'Freshness you\ncan taste in\nevery bite',
    body: 'Premium packed salads, washed and ready to enjoy — delivered straight from our farm to the shelves of leading supermarkets, for a healthy meal without compromise.',
    ctaPrimary: 'Explore our salads',
    ctaSecondary: 'Where to buy',
    stat1: '100%',
    stat1label: 'Washed & ready to eat',
    stat2: '24 hrs',
    stat2label: 'Farm to shelf',
    stat3: '0',
    stat3label: 'Preservatives',
  },
  philosophy: {
    eyebrow: 'Our philosophy',
    title: 'Clean from\nseed to plate',
    items: [
      {
        no: '01',
        title: 'Grown with care',
        body: 'Carefully selected varieties tended to safe-farming standards, minimising chemical use across every plot.',
      },
      {
        no: '02',
        title: 'Harvested on time',
        body: 'Picked at their freshest moment of the day, then moved into temperature-controlled handling to keep every leaf crisp.',
      },
      {
        no: '03',
        title: 'Packed ready-to-eat',
        body: 'Cleaned to certified hygiene standards and sealed in freshness-keeping packs — open and enjoy right away.',
      },
    ],
  },
  products: {
    eyebrow: 'Salad collection',
    title: 'Pick your\nfavourite bowl',
    body: 'Salad recipes crafted for every lifestyle — from a light bite to a fully satisfying meal.',
    items: [
      { emoji: '🥗', name: 'Garden Salad', desc: 'A crisp medley of fresh mixed greens, light and easy.', tag: 'Best seller' },
      { emoji: '🥬', name: 'Caesar Salad', desc: 'Crisp romaine, rich caesar dressing, topped with cheese.', tag: 'Classic' },
      { emoji: '🍅', name: 'Italian Salad', desc: 'Tomato, mozzarella and fragrant fresh basil.', tag: 'New' },
      { emoji: '🥑', name: 'Avocado Bowl', desc: 'Creamy avocado and wholesome grains that fill you up.', tag: 'High protein' },
    ],
  },
  lifestyle: {
    eyebrow: 'Lifestyle',
    title: 'Eating well\nhas never\nbeen easier',
    body: 'A busy life is no excuse for eating badly. Verdant is made for people who care about themselves but have no time to prep. Open the pack, toss, and enjoy a fresh meal anywhere.',
    points: ['Perfect for lunch at the office', 'Nutrient-packed post-workout fuel', 'A light dinner that never weighs you down'],
  },
  where: {
    eyebrow: 'Where to buy',
    title: 'Find Verdant\nnear you',
    body: 'Available at leading supermarkets — reach for freshness in the ready-to-eat salad section.',
    stores: [
      { name: 'Tops Supermarket', desc: 'All branches nationwide' },
      { name: 'Gourmet Market', desc: 'Branches in leading malls' },
    ],
  },
  footer: {
    tagline: 'Freshness you can taste in every bite',
    columns: [
      { title: 'Menu', links: ['Philosophy', 'Products', 'Lifestyle', 'Where to Buy'] },
      { title: 'Contact', links: ['hello@verdant.co.th', '02-123-4567', 'Bangkok, Thailand'] },
    ],
    social: ['Instagram', 'Facebook', 'LINE'],
    rights: '© 2026 Verdant. All rights reserved.',
  },
};

export type Content = typeof th;

export const content: Record<Lang, Content> = { th, en };
