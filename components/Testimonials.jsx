

import React from 'react';

const Testimonials = () => {
  return (
    <div className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-secondary text-primary shadow-md rounded">
            <p className="font-sans">"This platform is amazing!"</p>
            <h3 className="text-xl font-bold text-black mt-4">Emily Wilson</h3>
          </div>
          <div className="text-center p-6 bg-secondary text-primary shadow-md rounded">
            <p className="font-sans">"I learned so much from these courses."</p>
            <h3 className="text-xl font-bold text-black mt-4">David Lee</h3>
          </div>
          <div className="text-center p-6 bg-secondary text-primary shadow-md rounded">
            <p className="font-sans">"Highly recommend to everyone!"</p>
            <h3 className="text-xl font-bold text-black mt-4">Sophia Patel</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
