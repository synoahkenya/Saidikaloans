import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import StatsSection from '../components/sections/StatsSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import LoanCalculatorSection from '../components/sections/LoanCalculatorSection'
import FAQPreviewSection from '../components/sections/FAQPreviewSection'
import MpesaSection from '../components/sections/MpesaSection'
import PartnersBar from '../components/sections/PartnersBar'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersBar />
      <FeaturesSection />
      <StatsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <MpesaSection />
      <LoanCalculatorSection />
      <FAQPreviewSection />
    </>
  )
}
