import React from "react";

import { Box } from "@mui/material";

import ExperienceCard from "../Experience/ExperienceCard";

const project = [
  {
    time: "Dec 2025",
    title: "BricksterReview",
    description: [
      "Built a browser extension that delivers an LLM-powered, interactive pull request review experience on GitHub",
    ],
    skills: ["JavaScript", "Python", "FastAPI"],
    link: "#",
  },
  {
    time: "July 2023 - Present",
    title: "Personal Website",
    description: [
      "Built and maintain a personal portfolio website hosted on GitHub Pages",
    ],
    skills: ["React.js", "JavaScript", "Material UI"],
    link: "#",
  },
  {
    time: "Jan 2025 - Mar 2025",
    title: "FPyDebug",
    description: [
      "Built a CLI tool that profiles floating-point accuracy, helping debug numerical code by ranking expressions by error contribution.",
    ],
    skills: ["Python", "Rival"],
    link: "https://github.com/bksaiki/fpy/tree/archive-fpydebug",
  },
  {
    time: "Sep 2024 - Dec 2024",
    title: "MiniJava Compiler",
    description: [
      "Developed a Java compiler with scanning, parsing, semantic analysis, code generation, and profiling",
    ],
    skills: ["Java", "x86-64 assembly"],
    link: "https://courses.cs.washington.edu/courses/cse401/24au/project/MiniJava.html",
  },
  {
    time: "Mar 2024 - June 2024",
    title: "DSlabs",
    description: [
      "Developed a sharded key-value store supporting multi-key updates using the multi-slot Paxos algorithm",
    ],
    skills: ["Java"],
    link: "https://courses.cs.washington.edu/courses/cse452/24sp/",
  },
  {
    time: "Mar 2024",
    title: "CourseKata Analysis",
    description: [
      "Used random forest to generate insights for enhancing the student learning experience; awarded Datafest Best in Show",
    ],
    skills: ["R", "Python", "Tableau"],
    link: "https://stat.uw.edu/datafest-2024",
  },
  {
    time: "Jan 2024 - Mar 2024",
    title: "Simple DB",
    description: [
      "Implemented a basic database with catalog management, buffer pool, concurrency control, rollback, and recovery features",
    ],
    skills: ["Java", "SQL"],
    link: "https://gitlab.cs.washington.edu/cse444-24wi/simple-db",
  },
  {
    time: "Sep 2023 - Dec 2023",
    title: "Welp",
    description: ["Created and evaluated a Yelp-like restaurant microservice"],
    skills: ["Go", "Python", "Docker", "Kubernetes", "gRPC"],
    link: "https://gitlab.cs.washington.edu/syslab/cse453-welp",
  },
  {
    time: "May 2023 - June 2023",
    title: "Holographic Whiteboard",
    description: [
      "Developed an AR whiteboard application for HoloLens 2, integrated with Azure OCR and Wolfram Alpha API",
    ],
    skills: ["Unity", "C#", "MRTK", "Augmented Reality", "Azure OCR"],
    link: "https://courses.cs.washington.edu/courses/cse493v/23sp/public/report_17/index.html",
  },
  {
    time: "Dec 2022",
    title: "Text Summarizer",
    description: [
      "Trained a deep learning model to generate automatic summaries for text documents",
    ],
    skills: ["PyTorch", "GRU", "Deep Learning"],
    link: "https://weijun428.github.io/text-summarizer/",
  },
  {
    time: "Oct 2022",
    title: "Aidhere",
    description: [
      "Built a mobile app to connect people in emergencies with nearby certified first responders at DubHacks",
    ],
    skills: ["Java", "Android Studio", "Google Maps", "Figma"],
    link: "https://devpost.com/software/aidhere",
  },
  {
    time: "Mar 2022 - June 2022",
    title: "xk Operating System",
    description: [
      "Implemented system calls and a crash-safe file system to support concurrent file operations on a custom OS",
    ],
    skills: ["C", "QEMU", "GDB", "Operating System"],
    link: "https://courses.cs.washington.edu/courses/cse451/22sp",
  },
  {
    time: "Jan 2022 - Mar 2022",
    title: "Codeforces",
    description: [
      "Developed a website with interactive visualizations and dashboards to promote competitive programming",
    ],
    skills: ["D3.js", "jQuery", "Fullpage.js", "Bootstrap"],
    link: "https://cse442-22w.github.io/FP-codeforces/",
  },
  {
    time: "Jan 2022 - Mar 2022",
    title: "Remind",
    description: [
      "Created an app with alarms and emergency call features to assist people with Alzheimer’s.",
    ],
    skills: ["Java", "Android Studio"],
    link: "https://github.com/WeiJun428/cse340-Remind",
  },
  {
    time: "Mar 2022 - June 2022",
    title: "Vaccine Scheduler",
    description: ["Designed a command-line vaccination appointment scheduler"],
    skills: ["Python", "MS SQL", "Azure"],
    link: "https://docs.google.com/document/d/1Nh3HEvLhThoPwwtXtP70V1V-ClmFhVlVqB6gYTG7Yb4/edit?tab=t.0#heading=h.dtltc5xmn7uz",
  },
  {
    time: "Sep 2021 - Dec 2021",
    title: "333gle",
    description: [
      "Built a toy search engine featuring concurrent networking, file crawling, and disk-backed search query processing",
    ],
    skills: ["C++", "Socket programming", "HTTP", "Boost"],
    link: "https://courses.cs.washington.edu/courses/cse333/21au/hw/hw4/hw4.html",
  },
  {
    time: "June 2021 - Aug 2021",
    title: "Campus Path",
    description: [
      "Developed a shortest-path finding tool for the UW campus using the MVC architecture",
    ],
    skills: ["Java Spring", "TypeScript", "React", "Bootstrap"],
    link: "https://courses.cs.washington.edu/courses/cse331/21su/hw/hw9/hw-campuspaths.html",
  },
  {
    time: "June 2017 - Sep 2017",
    title: "Twist",
    description: [
      "Built an end-to-end paperless receipt system for businesses",
    ],
    skills: ["Android Studio", "Java", "MIT App Inventor", "Firebase"],
    link: "#",
  },
  {
    time: "April 2017 - May 2017",
    title: "Picam",
    description: [
      "Built a motion-activated CCTV system that streams intruder footage to property owner's email",
    ],
    skills: ["Python", "Raspberry Pi"],
    link: "#",
  },
];

function Project() {
  return (
    <Box
      id="project"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        my: 5,
      }}
      component="section"
    >
      {project.map((item) => {
        return <ExperienceCard item={item} key={item.title} />;
      })}
    </Box>
  );
}

export default Project;
