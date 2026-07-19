import { CallToAction } from "@/components/landing/call-to-action";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8f6] text-[#171817]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sticky top-0">
        <Header />
        <Hero />
      </div>
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  );
}
