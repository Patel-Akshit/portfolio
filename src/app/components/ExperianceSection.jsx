"use client";
import React from 'react'
import Image from 'next/image';

const ExperianceSection = () => {
  return (
    <section className="text-white" id="experiance">
        <h2 className="text-center text-4xl font-bold text-white mb-4">My Experiance</h2>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/marine.jpg" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h3 className="text-1xl font-bold text-white mb-4">Data Annotator | Marine Thinking, Halifax, NS</h3>
                <p className="text-base lg:text-lg text-justify">
                    <li>Enriched the dataset of the Obstacle Avoidance System of Unmanned Surface Vehicle (USV) by curating over 6000 diverse ship images from reliable sources.</li>
                    <li>Established an efficient data preprocessing workflow using Python and seamlessly integrated with Azure cloud.</li>
                    <li>Proficiently used CVAT tool to annotate images and made a dataset with an 80:20 ratio to train the YOLO model.</li>
                </p>
            </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/sciffer.jpg" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h3 className="text-1xl font-bold text-white mb-4">Data Labelling Intern | Sciffer Analytics Pvt. Ltd., Pune, India</h3>
                <p className="text-base lg:text-lg text-justify">
                    <li>Utilized web scraping techniques to gather around 10,000 data, encompassing photos, videos, and news articles.</li>
                    <li>Achieved a 70% precision rate in cropping accurate human faces from images utilizing an automated system developed with OpenCV and the Haar Cascade classifier.</li>
                    <li>Made dataset comprising more than 7,000 images, annotated with 7 emotions using the LabelImg library.</li>
                </p>
            </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/shriji.jpg" width={500} height={500} />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h3 className="text-1xl font-bold text-white mb-4">Data Analyst (Contract) | Shriji Infotech, Surat, India</h3>
                <p className="text-base lg:text-lg text-justify">
                    <li>Designed and developed interactive Tableau dashboards for sales, customer behavior, and market trends, delivering actionable insights for business growth while utilizing SQL for data extraction, Tableau for visualization, and Python for data preprocessing and trend analysis.</li>
                    <li>Developed Sales and Customer Dashboards showcasing a 23% annual increase in sales, profit, and quantity,along with a 10% growth in total orders and a 20% rise in customer base, enabling data-driven decision-making.</li>
                    <li>Conducted an Electric Vehicle Market Analysis, processing data on 130,000+ vehicles, identifying Tesla's 52% market share, and tracking annual EV growth trends.</li>
                </p>
            </div>
        </div>
    </section>
  )
}

export default ExperianceSection