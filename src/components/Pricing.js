import React from "react";
import { Check2Fill, X } from "../Icons";

const Pricing = () => {
  return (
    <section name="pricing" className="wrapper relative py-10 text-slate-200">
      <div className="absolute top-0 left-0 w-full h-[450px] bg-slate-700 -z-10"></div>
      <div className="wrapper-container">
        <h2 className="title">pricing</h2>
        <h3 className="heading">The right price for your research</h3>
        <p className="desc text-slate-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi id
          quia aut? Libero rem natus quisquam, harum hic error dicta cum quas a
          illo ipsa?
        </p>
        <div className="pricing-card-container flex flex-col justify-center items-center gap-8 mt-10 md:flex-row">
          <div>
            <div className="pricing-header">
              <p>standard</p>
              <h5>
                $49<span>/mo</span>
              </h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="pricing-info">
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <X className="text-red-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <X className="text-red-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <X className="text-red-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
            </div>
            <button>get started</button>
          </div>
          <div>
            <div className="pricing-header">
              <p>premium</p>
              <h5>
                $99<span>/mo</span>
              </h5>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="pricing-info">
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
              <p>
                <Check2Fill className="text-emerald-600 text-xl" />
                Lorem, ipsum dolor.
              </p>
            </div>
            <button>get started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
