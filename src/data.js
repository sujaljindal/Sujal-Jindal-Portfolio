// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import android from "./assets/tech_logo/android.png";
import dart from "./assets/tech_logo/dart.png";
import flutter from "./assets/tech_logo/flutter.jpg";

// Experience Section Logo's
import nexg from "./assets/company_logo/nexg.png";
import Days from "./assets/company_logo/30days.jpeg";
import exl from "./assets/company_logo/exl_service_logo.jpg"

// Education Section Logo's
import rdjps from "./assets/education_logo/rdjps.jpg";
import sharda from "./assets/education_logo/sharda.png";

// Project Section Logo's
import hawkers from "./assets/work_logo/hawkers.png";
import crop from "./assets/work_logo/crop.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Flutter", logo: flutter },

    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Dart", logo: dart },

    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name :"Android Studio", logo:android},
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: exl,
    role: "Software Developer",
    company: "EXL",
    date: "Sept 2025 - Present",
    desc: "",
    skills: [
      
    ],
  },
  {
    id: 1,
    img: Days,
    role: "Software Developer",
    company: "30Days Technologies Pvt. Ltd",
    date: "July 2025 - Sept 2025",
    desc: "During my role as a Software Developer at 30 Days Technologies, I contributed to the design and development of two mobile applications using Flutter and Dart. The first project, EZHRM, was an employee management app that streamlined processes such as attendance tracking, leave management, payroll handling, and role-based access. I implemented a scalable architecture using BLoC state management and built responsive, user-friendly interfaces for both Android and iOS platforms. The second project, EZNEXT, was a student management app designed to manage admissions, attendance, assignments, and notifications. For this project, I applied GetX state management to deliver a simplified and reactive experience with efficient navigation and performance optimization. Across both applications, I was responsible for integrating REST APIs, ensuring smooth authentication and data handling, and collaborating in testing and deployment. These projects strengthened my expertise in Flutter, Dart, BLoC, GetX, REST APIs, and Git, while giving me practical experience in building real-world mobile solutions.",
    skills: [
      "Flutter",
      "Dart",
      "Android Studio",
    ],
  },
  {
    id: 2,
    img: nexg,
    role: "Software Trainee",
    company: "NexGen Tech Solutions",
    date: "October 2024 - May 2025",
    desc: "Developed a responsive Human Resource Management System (HRMS) using React.js, TypeScript, SCSS, and Material UI. I designed and implemented 20+ reusable UI components that standardized the interface across modules. By integrating RESTful APIs, I enabled seamless data flow between frontend and backend systems, which reduced manual HR operations. I also improved the platform's accessibility and responsiveness across different devices using Material UI's grid system and custom SCSS. Additionally, I collaborated with the QA team to implement automated testing workflows, resulting in a reduction in UI bugs in production. This experience strengthened my skills in frontend architecture, performance optimization, and cross-functional teamwork.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "SCSS",
      "React MUI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: sharda,
    school: "Sharda University, Greater Noida",
    date: "Oct 2021 - May 2025",
    grade: "86.35%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Tech) from Sharda University, Greater Noida. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Sharda Univeristy allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - BTech (Computer Science)",
  },
  {
    id: 1,
    img: rdjps,
    school: "Rukmani Devi Jaipuria Public School, Delhi",
    date: "Apr 2020 - March 2021",
    grade: "82.4%",
    desc: "I completed my class 12 education from Rukmani Devi Jaipuria Public School, Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: rdjps,
    school: "Rukmani Devi Jaipuria Public School, Delhi",
    date: "Apr 2018 - March 2019",
    grade: "79.6%",
    desc: "I completed my class 10 education from Rukmani Devi Jaipuria Public School, Delhi, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Hawkers - An E-commerce Web Platform",
    description:
      "Hawkers bridges the gap between local street vegetable vendors and customers by providing a digital marketplace. Built with React, JavaScript, and Tailwind CSS, the platform empowers small-scale vendors with online storefronts, enabling them to list products, manage orders, and reach a wider audience. Customers benefit from real-time inventory, OTP-based authentication, and intuitive features like category filters and integrated Google Maps for easy vendor localization. By digitizing informal street commerce, Hawkers reduces dependency on middlemen, improves vendor incomes, and offers communities fresher, hyperlocal produce at competitive prices.",
    image: hawkers,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/sujaljindal/Hawkers",
    webapp: "https://hawkers-frontend.vercel.app/",
  },
  {
    id: 1,
    title: "Deep Learning Based Crop Recommendation System",
    description:
      "Developed an AI-powered full-stack application to optimize agricultural decision-making by analyzing real-time soil and environmental data. The system integrates 5+ IoT sensors (NPK, pH, humidity, temperature, rainfall) to collect field data, achieving 95% accuracy in crop predictions.",
    image: crop,
    tags: [
      "React JS",
      "Python Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "IoT",
      "Deep Learning",
    ],
    github: "https://github.com/sujaljindal/Crop-Recommendation",
    webapp: "",
  },
];

export const publications=[
  {
    id:0,
    title:"Deep Learning Based Crop Recommendation System",
    description:"Agricultural technology has advanced due to the rising demand for food security due to increasing climate change and resource optimization challenges. To provide accurate and practical crop recommendations, this research presents a hybrid deep learning model that combines Convolutional Neural Networks (CNN) and Bidirectional Long Short-Term Memory (Bi-LSTM) networks. To achieve high levels of accuracy and dependability in its data processing, the suggested system makes use of real-time soil data acquired by Internet of Things sensors. This data includes temperature, humidity, pH, and moisture levels. Hybrid architectures outperform traditional models in terms of efficiency and trustworthiness because the hybrid architecture reduces the number of false positives and removes prediction errors. The system provides farmers with actionable insights for improving soil and environmental conditions, eventually increasing crop output and sustainability. In addition to crop advice, the system includes these insights. Smart agriculture is enabled by this breakthrough, which connects deep learning and Internet of Things technologies to create smart agriculture. This innovation enables data-driven decisions that increase productivity and encourage environmental responsibility. Agricultural techniques that are both sustainable and efficient have been demonstrated to have made great progress as a result of this research, which suggests that worldwide issues have been met.",
    DOI:"https://doi.org/10.1007/978-981-96-7134-2_35"
  }
]
