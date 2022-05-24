import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/HVNkQ2m/banner.png)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">ELECTRICAL SPARK</h1>
            <p className="mb-5">Electrical tools are tools used to work on an electrical system. These can include a wide range of tools such as wire and cable cutters, wire strippers, coaxial compression tools, telephony tools, wire cutter/strippers, cable tie tools, accessories, and even more.</p>
            <button className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;