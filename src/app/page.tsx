"use client"
import React, { Suspense, lazy, useState, useEffect } from "react";
import Loader from "../loader/Loader";
import { BackgroundBeamsDemo } from "../components/ui/BeameEffect";

const About = lazy(() => import("../components/About"));
const EducationPage = lazy(() => import("../components/Education"));
const SkillsPage = lazy(() => import("../components/Skills"));
const ProjectsPage = lazy(() => import("../components/Projects"));
const ContactPage = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Navbar = lazy (()=> import("../components/Navbar"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <div>
      <Suspense fallback={<Loader />}>
        <BackgroundBeamsDemo />
        <Navbar />
        <About />
        <EducationPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
        </Suspense>
      </div>
    </main>
  );
}
