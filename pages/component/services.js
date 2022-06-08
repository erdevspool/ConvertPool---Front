import React from "react";
import Link from "next/link"






const Services = () => {
  return (
    <div className="services-container">
        <img src="https://i.ibb.co/jDr7Jxg/rocket.webp" alt="" className="plane-bounce" />
      <div className="services">
       <Link href="#">
       <div className="first cursor-pointer">
                <span className="span">
                <img className="icon-img" src="https://i.ibb.co/JyHZS4v/19-magnifier-zoom-search-lineal-1.gif" alt="" />
              </span>
              
              <h4 className="text-center text-2xl font-bold">Seo Services</h4>
              <p className="px-12 pt-5 text-xl">Rank higher on SERPs than your rivals & drive visitors to your website.</p>
        </div>
       </Link>
       <Link href="#">
        <div className="second cursor-pointer">
        <span className="span">
                <img className="icon-img" src="https://i.ibb.co/s9BB805/298-coins-flat.gif" alt="" />
                </span>
                <h4 className="text-center text-2xl font-bold">Pay Per Click</h4>
              <p className="px-12 pt-5 text-xl">Help you to grow your traffic and conversion metrics.</p>
        </div>
        </Link>
        <div className="third">
        <span className="span">
                <img className="icon-img" src="https://i.ibb.co/9ZLjqQW/27-globe-lineal.gif" alt="" />
                </span>
                <h4 className="text-center text-2xl font-bold">Social Media Marketing</h4>
              <p className="px-8 pt-2 text-lg">Let us manage your social media profiles to increase brand awareness & following.</p>
        </div>
        <div className="fourth">
        <span className="span">
                <img className="icon-img" src="https://i.ibb.co/0GF4jyb/245-edit-document-flat.gif" alt="" />
                </span>
                <h4 className="text-center text-2xl font-bold">Content Marketing</h4>
              <p className="px-8 pt-2 text-lg">Well researched & SEO optimized articles for your business written by our experts.</p>
        </div>
      </div>

      <div className="service-content">
        <h1 className="text-4xl font-bold">Services We Provide</h1>
        <br />
        <p className="text-gray-400">
          XMARTECH, as the best web development and digital marketing service
          provider, provides the Best digital marketing services in Kolkata,
          India, at the best price. As the best Digital marketing agency, We
          provide the best SEO services in Kolkata, India. XMARTECH is the most
          admired Social media marketing agency. Our experts use customized
          marketing solutions for your website ranking.
          <br />
          <br />
          Our customized digital marketing strategies are built on a
          results-driven approach as per requirements. Our results will speak
          for themselves. Hire the best digital marketing agency and a team of
          experienced experts in Kolkata, India.
        </p>
      </div>
    </div>
  );
};

export default Services;
