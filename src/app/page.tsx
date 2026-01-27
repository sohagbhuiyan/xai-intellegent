import HeroSection from "@/src/components/sections/HeroSection";
import InsightFlow from "@/src/components/sections/InsightFlow";
import DashboardPreview from "@/src/components/sections/DashboardPreview";
import SignatureInteraction from "@/src/components/sections/SignatureInteraction";
import Navbar from "@/src/components/ui/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background-primary overflow-hidden">
      {/* Background gradient mesh */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Sections */}
      <HeroSection />
      <InsightFlow />
      <DashboardPreview />
      <SignatureInteraction />
      
      {/* Footer */}
      <footer className="relative border-t border-white/5 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary text-sm">
              © 2026 Xai Intelligence Workspace. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-text-secondary">
              <a href="#" className="hover:text-text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}