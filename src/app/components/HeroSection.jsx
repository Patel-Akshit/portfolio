"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-red-800">
                        Hello, I&apos;m{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Akshit",
                        1000,
                        "MACS Student",
                        1000,
                        "Data Analyst",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    MACS Student from Dalhousie University.
                </p>
                <div>
                    <Link
                    href="/#contact"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-violet-950 to-neutrl-900 hover:bg-slate-500 text-white"
                    >
                    Contact Me
                    </Link>
                    <Link
                    href="/"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-900 to-secondary-500 hover:bg-slate-600 text-white"
                    >
                    Download CV
                    </Link>
                </div>
            </div>
            
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#0e0d0d] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative">
                <Image
                        src="/images/heroImg.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection