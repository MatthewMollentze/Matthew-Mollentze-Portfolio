import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Matthew Mollentze - Portfolio" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="skills" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ArticlesSection sectionId="articles" heading="Articles" sources={['Medium']} />
        <ContactSection sectionId="contact" heading="Let's chat" />
      </Page>
    </>
  );
}
