import React from "react";
import { EnvelopeFill, Github, Linkedin, TelegramFill } from "../Icons";

const Footer = () => {
  return (
    <section className="wrapper py-5 bg-primary-dark text-slate-200">
      <div className="wrapper-container">
        <div className="footer-info-container grid grid-cols-2 gap-y-2 pb-4 border-b border-[#aaa] sm:grid-cols-4">
          <div>
            <h6>solutions</h6>
            <ul>
              <li>marketing</li>
              <li>analytics</li>
              <li>commerce</li>
              <li>data</li>
              <li>cloud</li>
            </ul>
          </div>
          <div>
            <h6>support</h6>
            <ul>
              <li>pricing</li>
              <li>documentation</li>
              <li>guides</li>
              <li>API status</li>
            </ul>
          </div>
          <div>
            <h6>company</h6>
            <ul>
              <li>about</li>
              <li>blog</li>
              <li>jobs</li>
              <li>press</li>
              <li>partners</li>
            </ul>
          </div>
          <div>
            <h6>legal</h6>
            <ul>
              <li>claims</li>
              <li>privacy</li>
              <li>terms</li>
              <li>policies</li>
              <li>conditions</li>
            </ul>
          </div>
          <div className="flex flex-col col-span-full gap-3 mt-6 md:flex-row">
            <div className="md:w-1/2">
              <h6>subscribe to our newsletter</h6>
              <p className="text-sm">
                The latest nes, articles and resources sent to your inbox
                weekly.
              </p>
            </div>
            <form
              className="flex flex-col gap-2 text-sm sm:flex-row md:flex-col md:w-1/2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Enter your email..."
                className="w-full p-2 text-primary-dark rounded-md outline-none "
              />
              <button className="w-full p-2 px-7 bg-main text-white rounded-md capitalize sm:w-fit md:w-full ">
                subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-[#aaa] text-center">
            &copy; Copyright 2022. All rights reserved.
            <br /> Powered by{" "}
            <span className="text-white">Mohammad Barati</span>.
          </h3>
          <div className="flex justify-center items-center gap-10 sm:gap-16">
            <a href="https://t.me/thisis_mmd" target="_blank">
              <TelegramFill className="w-7 h-auto" />
            </a>
            <a href="mailto:mohammad.baratii.2004@gmail.com" target="_blank">
              <EnvelopeFill className="w-7 h-auto" />
            </a>
            <a href="https://github.com/MohammadBaratii" target="_blank">
              <Github className="w-7 h-auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammadbaratii/"
              target="_blank"
            >
              <Linkedin className="w-7 h-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
