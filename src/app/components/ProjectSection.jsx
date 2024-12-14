"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from "framer-motion";
import ProjectTag from './ProjectTag';

const projectsData = [
    {
      id: 1,
      title: "EmoDrive: Emotional State Detection for Safer Driving",
      description: "Detect facial expression using CNN and VGG16 models trained on SFEW and FER datasets and integrated into realtime detection script to predict emotions in real-time webcam videos.",
      image: "/images/projects/emodrive.jpg",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/Patel-Akshit/ML-Projects/tree/main/EmoDrive",
    },
    {
      id: 2,
      title: "Analysing and Predicting Diabetes Readmission",
      description: "Analyze diabetes patient's data and predict how many times these patients have to be readmitted to the hospital again.",
      image: "/images/projects/DiabetesAnalytics.jpg",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/Patel-Akshit/ML-Projects/tree/main/Analysing-and-Predicting-Diabetes-Readmission",
    },
    {
      id: 3,
      title: "Credit card fraud detection",
      description: "Detecting fraud transactions of credit cards using ensemble methods.",
      image: "/images/projects/cc-fraud-detection.png",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/Patel-Akshit/ML-Projects/tree/main/Credit-card-fraud-detection-using-Ensemble-methods",
    },
    {
      id: 4,
      title: "Price prediction of US AirBnb",
      description: "Predicting the price of US AirBnb using predictive modeling techniques.",
      image: "/images/projects/airbnb.jpg",
      tag: ["All", "ML"],
      gitUrl: "https://github.com/Patel-Akshit/ML-Projects/tree/main/Price-prediction-using-Predictive-Modeling",
    },
    {
      id: 5,
      title: "2048 Game",
      description: "2048 Game Migration: From Local Computer to AWS Cloud - A Showcase of Cloud Migration",
      image: "/images/projects/2048game.jpg",
      tag: ["All", "Cloud"],
      gitUrl: "https://github.com/Patel-Akshit/cloudProject/tree/main/2048_Game",
    },
    {
      id: 6,
      title: "Textractor",
      description: "A simple web application that takes images containing text, extract the text using AWS Textract services and send email notification of extracted Text.",
      image: "/images/projects/textractor.jpg",
      tag: ["All", "Cloud"],
      gitUrl: "https://github.com/Patel-Akshit/cloudProject/tree/main/Textractor",
    },
    {
      id: 7,
      title: "Trivia Titans",
      description: "A multi-cloud serverless online trivia game that allows users to form teams, compete against other teams in real-time, and track their progress on global and category-specific leaderboards.",
      image: "/images/projects/triviatitans.jpg",
      tag: ["All", "Cloud"],
      gitUrl: "https://github.com/Patel-Akshit/cloudProject/tree/main/Trivia_Titans",
    },
    {
      id: 8,
      title: "FoodVerse",
      description: "Java and the SpringBoot framework based online food ordering system to demonstrate Solid principles and clean code techniques.",
      image: "/images/projects/foodverse.jpg",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Patel-Akshit/Java-Projects/tree/main/FoodVerse",
    },
    {
      id: 9,
      title: "Sales and Customer Dashboards",
      description: "Two Tableau dashboards to analyze sales and customer data for the United States, covering the years 2021 to 2023.",
      image: "/images/projects/SaleCustDashboard.png",
      tag: ["All", "Data Analysis"],
      gitUrl: "https://github.com/Patel-Akshit/Tableau-Projects/tree/main/Sales_and_Customer_Dashboards",
    },
    {
      id: 10,
      title: "Electric Vehicle Analysis Dashboard",
      description: "A Tableau analysis dashboards for sales of electronic vehicles of United State from 2010 to 2024 year.",
      image: "/images/projects/EVDashboard.png",
      tag: ["All", "Data Analysis"],
      gitUrl: "https://github.com/Patel-Akshit/Tableau-Projects/tree/main/Electric_Vehicle_Dashboard",
    },
    {
      id: 11,
      title: "Pizza Sales Dashboard",
      description: "An interactive sales performance Tableau dashboard to analyze pizza sales trends, best/worst sellers, and revenue insights.",
      image: "/images/projects/PizzaSales.png",
      tag: ["All", "Data Analysis"],
      gitUrl: "https://github.com/Patel-Akshit/Tableau-Projects/tree/main/Pizza_Sales_Report_Dashboard",
    },
  ];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
        <h2  className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="ML"
            isSelected={tag === "ML"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Cloud"
            isSelected={tag === "Cloud"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Data Analysis"
            isSelected={tag === "Data Analysis"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                />
              </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectSection