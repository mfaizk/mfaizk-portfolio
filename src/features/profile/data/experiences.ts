import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "tarality",
    companyName: "TARALITY ECOSYSTEMS PRIVATE LIMITED",
    companyLogo: "/assets/tarality.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "04.2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed multiple decentralized applications (DApps) including token swap, bridge, and block explorer modules.
- Led the frontend development of the company’s flagship cryptocurrency exchange platform, ensuring performance, scalability, and clean architecture.
- Currently building a React Native-based crypto exchange app, focusing on cross-platform optimization and smooth mobile user experience.
- Lead the frontend engineering team, overseeing development processes, code quality, and UI/UX consistency across products.
- Architected and implemented core blockchain integrations and wallet connectivity features for seamless user interaction.
- Built real-time charting tools, analytics dashboards, and modular widgets to improve crypto asset tracking and trading insights.
- Delivered robust, responsive UIs tailored for both web and mobile platforms, adhering to accessibility and performance best practices.
- Conducted technical evaluations and decision-making on frameworks, libraries, and architecture to ensure optimal development workflows.`,
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "Tailwind CSS",
          "Dify",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
          "Wagmi",
          "reown appkit",
          "etherjs",
          "web3",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },

  //   {
  //     id: "freelance",
  //     companyName: "Freelance",
  //     positions: [
  //       {
  //         id: "f0becfba-057d-40db-b252-739e1654faa1",
  //         title: "Full-stack Developer",
  //         employmentPeriod: {
  //           start: "2018",
  //           end: "2020",
  //         },
  //         employmentType: "Part-time",
  //         description: `- Built an order management website with real-time delivery tracking.
  // - Developed an e-commerce site for bird's nest products.
  // - Created a map to display monitoring station data.
  // - Designed a customizable WordPress landing page.`,
  //         icon: "code",
  //         skills: [
  //           "Laravel",
  //           "React",
  //           "Express.js",
  //           "Socket.IO",
  //           "MongoDB",
  //           "Firebase",
  //           "WordPress",
  //           "Docker",
  //           "NGINX",
  //         ],
  //       },
  //       {
  //         id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
  //         title: "Graphic & UI/UX Designer",
  //         employmentPeriod: {
  //           start: "2018",
  //           end: "2019",
  //         },
  //         employmentType: "Part-time",
  //         description: "Designed logos, posters, ads, and UI.",
  //         icon: "design",
  //         skills: [
  //           "Creativity",
  //           "UI/UX Design",
  //           "Graphic Design",
  //           "Sketch",
  //           "Adobe Photoshop",
  //           "Adobe Illustrator",
  //         ],
  //       },
  //     ],
  //   },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Babu Banarasi Das University",
        employmentPeriod: {
          start: "04.2020",
          end: "2023",
        },
        icon: "education",
        description: `- Graduated with a Bachelor's degree in Computer Science.`,
        skills: [
          "C++",
          "JavaScript",
          "Data Structures",
          "Algorithms",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "BOARD OF TECHNICAL EDUCATION UTTAR PRADESH",
        employmentPeriod: {
          start: "04.2017",
          end: "04.2020",
        },
        icon: "education",
      },
    ],
  },
];
