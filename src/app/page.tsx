import { HomeSection } from "@/components/home-section";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
