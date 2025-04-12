import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import ApiIntegration from '../components/sections/ApiIntegration';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <ApiIntegration />
      <Pricing />
      <Testimonials />
      <Faq />
    </Layout>
  );
} 