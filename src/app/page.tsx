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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <div>
        <BackgroundBeamsDemo />
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <EducationPage />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <SkillsPage />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ProjectsPage />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ContactPage />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
