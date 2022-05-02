import React from "react";
import bgImg from "../assets/cyber-bg.png";
import { CloudFogFill, CpuFill, Grid1X2Fill, ShieldFill } from "../Icons";

const Home = () => {
  return (
    <main name="home" className="wrapper mt-[60px] py-4 bg-zinc-200">
      <section className="flex flex-col md:gap-10">
        <div className="flex flex-col justify-between items-center w-full max-w-[900px] mx-auto md:flex-row md:gap-20">
          <div className="flex flex-col gap-3 capitalize text-lg font-semibold w-full max-w-[25rem] md:max-w-[20rem]">
            <p>unique sequencing & production</p>
            <h1 className="heading text-left text-4xl">
              cloud <br />
              management
            </h1>
            <p>This is our tech brand.</p>
            <button className="p-2 bg-main text-white rounded-md transition font-medium hover:bg-main-darker hover:shadow-lg hover:shadow-main-darker/40">
              Get Started
            </button>
          </div>
          <img
            src={bgImg}
            alt="cyber background"
            className="w-80 h-80 object-cover "
          />
        </div>
        <div className="card w-full max-w-[25rem] m-auto p-7 border-slate-300 sm:max-w-none md:w-full md:max-w-[900px]">
          <h4 className="mb-4 text-center capitalize font-semibold">
            data services
          </h4>
          <div className="home-data-services flex flex-col flex-wrap justify-center items-center gap-3 sm:flex-row sm:justify-between sm:gap-5 md:gap-16">
            <p>
              <ShieldFill /> app security
            </p>
            <p>
              <Grid1X2Fill /> dashboard design
            </p>
            <p>
              <CloudFogFill /> cloud data
            </p>
            <p>
              <CpuFill /> API services
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
