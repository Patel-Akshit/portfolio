"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Programming language :  C/C++, Python, Java, and Java Script</li>
          <li>Data science : Computer vision, Exploratory data analysis, Data annotation, Data visualization and Deep learning techniques</li>
          <li>Web development: Spring Boot framework, Flask framework, and React JS</li>
          <li>Cloud : AWS services (Certified Cloud Practitioner), GCP services, and Azure services</li>
          <li>Libraries : scikit-learn, Pandas, Keras, Numpy, matplotlib, Tensorflow, Seaborn, Plotly, LabelImg, and Tkinter</li>
          <li>Software : MS Office, PostGres SQL, MySQL, Jira, Git/Bash, Tableau Desktop, Tableau Public.</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>MACS | Dalhousie University - Halifax, NS, Canada</li>
          <li>BCE | Gujarat Technological University - Gujarat, India</li>
        </ul>
      ),
    },
  ];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/aboutme.png" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg text-justify">
                I am graduate student in MACS with major in Data Science.
                I have a experiance working with Data classification, Computer Vision,
                Data Analysis and Machine Learning models applications. I am a quick learner and
                I am always looking to expand my knowledge and skill set. I am a team player
                and I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton
                    selectTab={() => handleTabChange("skills")}
                    active={tab === "skills"}
                    >
                    {" "}
                    Skills{" "}
                    </TabButton>
                    <TabButton
                    selectTab={() => handleTabChange("education")}
                    active={tab === "education"}
                    >
                    {" "}
                    Education{" "}
                    </TabButton>
                </div>
                <div className="mt-8">
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection