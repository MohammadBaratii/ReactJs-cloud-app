import React from "react";
import bgSupport from "../assets/support.jpg";
import {
  ArrowRight,
  PersonCheckFill,
  TelephoneFill,
  UiRadiosGrid,
} from "../Icons";

const Support = () => {
  return (
    <section
      name="support"
      className="wrapper grid place-content-center py-10 text-slate-200"
      style={{
        minHeight: "calc(100vh - 60px)",
        background: `linear-gradient(#0000006e, #000000c5), url(${bgSupport})`,
        backgroundPosition: "65% top",
        backgroundSize: "cover",
      }}
    >
      <div className="wrapper-container">
        <div className="flex flex-col gap-3 sm:gap-4">
          <h2 className="title">support</h2>
          <h3 className="heading">Finding the right team</h3>
          <p className="desc text-slate-300 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            dicta pariatur doloremque porro fugiat, quos suscipit, ducimus in
            iusto hic cumque ipsam qui quidem maxime sunt eligendi. Nesciunt,
            facilis ipsa!
          </p>
        </div>
        <div className="support-card-container flex flex-col gap-10 max-w-[30rem] mt-32 mx-auto md:flex-row md:max-w-none md:gap-2">
          <div>
            <TelephoneFill />
            <h4>sales</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              suscipit.
            </p>
            <button>
              contact us
              <ArrowRight />
            </button>
          </div>
          <div>
            <PersonCheckFill />
            <h4>technical support</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              suscipit.
            </p>
            <button>
              contact us
              <ArrowRight />
            </button>
          </div>
          <div>
            <UiRadiosGrid />
            <h4>media inquiries</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
              suscipit.
            </p>
            <button>
              contact us
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
