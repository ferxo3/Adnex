import Footer from '@/components/footer/Footer';
import GetStart from '@/components/home-8/GetStart';
import Steps from '@/components/home-8/Steps';
import Hero from '@/components/home-8/Hero';
import Integration from '@/components/home-8/Integration';
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar';
import FinancialBlog from '@/components/shared/FinancialBlog';
import RubustFeature from '@/components/home-8/RubustFeature';
import Clients from '@/components/shared/Clients';
import Pricing from '@/components/shared/Pricing';
import TimeLine from '@/components/home-7/TimeLine'; // Importamos TimeLine aquí

export const metadata = {
  title: 'Adnex',
};

export default function Home() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <GetStart />
        <Steps />
        <RubustFeature />
        <Pricing />
        <Integration />
        <FinancialBlog />
        {/* Aquí agregamos el componente TimeLine */}
        <TimeLine />
        <Clients />
      </main>
      <Footer />
    </>
  );
}