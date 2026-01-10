import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
