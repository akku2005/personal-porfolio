import React from "react";


const Card: React.FC = () => {
  return (
    <section className="hero text-white relative">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Card;
