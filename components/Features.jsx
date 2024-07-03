




import React from 'react';

const Features = () => {
  return (
    <div className="py-20 bg-background text-primary">
     
      <div className="relative z-10 container mx-auto bg-white bg-opacity-80 p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-serif text-orange text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white shadow-md rounded">
          <h3 className="text-xl font-bold text-black mb-4">Easy Navigation</h3>
            <p className="font-sans">Simple and intuitive learner interface for easy access to resources.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded">
          <h3 className="text-xl font-bold text-black mb-4">Personalized Learning</h3>
            <p className="font-sans">Automated learning journeys for a structured experience.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-md rounded">
          <h3 className="text-xl font-bold text-black mb-4">Multi-format Content</h3>
            <p className="font-sans">Variety of learning resources to cater to different learning styles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
