import SiteNav from "@/components/site/SiteNav";
import Hero from "@/components/site/Hero";
import WritingSection from "@/components/site/WritingSection";
import ProjectsSection from "@/components/site/ProjectsSection";
import AboutSection from "@/components/site/AboutSection";
import SiteFooter from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-surface">
      <SiteNav />
      <main>
        <Hero />
        <WritingSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
