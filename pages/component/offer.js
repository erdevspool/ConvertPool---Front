import React from "react";

const Offer = () => {
  return (
    <div className="offer-container pb-20">
      <h1 className="text-center text-3xl  pt-20 text-white">
        Best Ever Services
      </h1>
      <h1 className="text-center text-5xl  font-bold pt-10 text-white">What We Offer</h1>
      <div>
        <div className="cards pt-10">

          <div className="card bg-base-100 shadow-xl">
            <figure className="bg-green-200">
              <img
              
                src="https://i.ibb.co/x3RRm4h/3.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-3xl p-3 ">Digital Marketing</h2>
              <p className="text-xl text-gray-400 pl-3 ">We provide data driven digital marketing services to our clients.</p>
              <br />
              <div className="card-actions justify-center">
                <button className="btn w-full rounded-none btn-outline btn-info">Read More</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="bg-green-200">
              <img
              
                src="https://i.ibb.co/c86ZfJh/4.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-3xl p-3 ">PPC Marketing</h2>
              <p className="text-xl text-gray-400 pl-3 ">Drive customers & increase sales by running successful PPC ad campaigns.</p>
              <br />
              <div className="card-actions justify-center">
                <button className="btn w-full rounded-none btn-outline btn-info">Read More</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="bg-green-200">
              <img
              
                src="https://i.ibb.co/McP8zKz/5.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-3xl p-3 ">SMM</h2>
              <p className="text-xl text-gray-400 pl-3 ">By social media marketing promote your products and services on social media.</p>
              <br />
              <div className="card-actions justify-center">
                <button className="btn w-full rounded-none btn-outline btn-info">Read More</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Offer;
