"use client";
import React, { useState } from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const FooterComp = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <Footer container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Link href="/">
                <span className="self-center whitespace-nowrap text-2xl font-semibold ">
                  M
                  <span className="text-4xl font-extrabold mx-1 shadow-2xl shadow-red-500 text-red-400 drop-shadow-xl font-sans">
                    H
                  </span>
                  STATE
                </span>
              </Link>
              <div className="max-w-xs md:max-w-md mx-auto container ">
                <p className=" text-xs  -mx-7 lg:text-sm ">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum eos illum temporibus? Repudiandae modi numquam tempore
                  aperiam libero.
                </p>
                <div className="flex relative border overflow-hidden border-pink-400 rounded-xl my-5 ring-2 ring-rose-400 w-full">
                  <input
                    type="email"
                    name=""
                    value={value}
                    placeholder="email address"
                    className=" border-none focus:border-none w-full  bg-transparent"
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button
                    className="absolute top-0 right-0 bg-rose-400 h-full px-2 text-white"
                    onClick={() => setValue("")}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/">Property</Footer.Link>
                  <Footer.Link href="/">Blog</Footer.Link>
                  <Footer.Link href="/">Contact</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/">Facebook</Footer.Link>
                  <Footer.Link href="/">Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="/">Privacy Policy</Footer.Link>
                  <Footer.Link href="/">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="MHState™"
              href="/"
              year={new Date().getFullYear()}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <BsFacebook className={`text-rose-500 h-7 w-7`} />
              <BsInstagram className={`text-rose-500 h-7 w-7`} />
              <BsTwitter className={`text-rose-500 h-7 w-7`} />
              <BsGithub className={`text-rose-500 h-7 w-7`} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComp;
