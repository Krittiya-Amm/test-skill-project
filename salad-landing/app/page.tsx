import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Philosophy } from '@/components/Philosophy';
import { Products } from '@/components/Products';
import { Lifestyle } from '@/components/Lifestyle';
import { WhereToBuy } from '@/components/WhereToBuy';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Products />
        <Lifestyle />
        <WhereToBuy />
      </main>
      <Footer />
    </>
  );
}
