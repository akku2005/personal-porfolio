import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

const Footer: React.FC = () => {
  return (
    <section id="footer">
      <footer className="text-white bg-transparent font-thin">
      <BackgroundBeams />
      <div className="container mx-auto py-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
