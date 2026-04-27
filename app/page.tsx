import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import HeroSection from '@/components/sections/HeroSection';
import ScrollVideoEffect from '@/components/ui/ScrollVideoEffect';
import WorkSection from '@/components/sections/WorkSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutSection from '@/components/sections/AboutSection';
import SocialSection from '@/components/sections/SocialSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ScrollVideoEffect />
        <WorkSection />
        <ProcessSection />
        <AboutSection />
        <SocialSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
