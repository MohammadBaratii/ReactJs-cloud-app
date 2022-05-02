import React from "react";

const About = () => {
  return (
    <section name="about" className="wrapper py-20 bg-white text-center">
      <div className="wrapper-container">
        <h3 className="heading">Trusted by developers across the world</h3>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas id eos
          impedit accusamus adipisci temporibus harum ducimus nam exercitationem
          soluta.
        </p>
        <div className="about-card-container flex flex-col justify-between gap-4 text-slate-500 sm:flex-row sm:gap-2">
          <div>
            <p>100%</p>
            <p>completion</p>
          </div>
          <div>
            <p>24/7</p>
            <p>delivery</p>
          </div>
          <div>
            <p>100K</p>
            <p>transactions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
