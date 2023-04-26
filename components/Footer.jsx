import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 mt-20 bg-gray-100 md:px-20 md:py-10 p-5">
      <div className="space-y-4 text-neutral-600 my-4">
        <h1 className="font-bold">ABOUT</h1>
        <p>How airbnb works</p>
        <p>Investors</p>
        <p>Sponsors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-neutral-600 my-4">
        <h1 className="font-bold">COMMUNITY</h1>
        <p>Accessibility</p>
        <p>Combating discrimination</p>
        <p>Disaster relief housing</p>
      </div>
      <div className="space-y-4 text-neutral-600 my-4">
        <h1 className="font-bold">SUPPORT</h1>
        <p>Help Center</p>
        <p>Investors</p>
        <p>Air Cover</p>
        <p>Our COVID Response</p>
        <p>Cancellation Options</p>
      </div>
      <div className="space-y-4 text-neutral-600 my-4">
        <h1 className="font-bold">HOSTING</h1>
        <p>Airbnb your home</p>
        <p>AirCover for Hosts</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>
    </footer>
  );
};

export default Footer;
