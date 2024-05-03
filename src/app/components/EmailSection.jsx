"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
    
        if (response.status === 200) {
          console.log("Message sent successfully.");
          setEmailSubmitted(true);
        }
    };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
                Let's Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md text-justify">
                {" "}
                I'm currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/Patel-Akshit">
                    <Image src={GithubIcon} alt="Github Icon" />
                </Link>
                <Link href="https://www.linkedin.com/in/patel-akshit">
                    <Image src={LinkedinIcon} alt="Linkedin Icon" />
                </Link>
            </div>
        </div>
        <div>
            {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
                Your email was sent successfully! I will follow back as soon as possible.
            </p>
            ) : (
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="john@mail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button type="submit" className="bg-gradient-to-br from-red-900 to-secondary-500 hover:bg-violet-900 text-white font-medium py-2.5 px-5 rounded-lg w-max">
                        Send Message
                    </button>
                </form>
            )}
        </div>
    </section>
  )
}

export default EmailSection