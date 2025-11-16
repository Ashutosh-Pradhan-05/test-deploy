// Skills Section Logo's
//front-end
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import sassLogo from './assets/tech_logo/sass.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import angularLogo from './assets/tech_logo/angular.png';
import jQueryLogo from './assets/tech_logo/jQuery.png';
import jQUILogo from './assets/tech_logo/jQuery-UI.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
//back-end
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import restLogo from './assets/tech_logo/rest.png';
//languages
import javascriptLogo from './assets/tech_logo/javascript.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import sqlLogo from './assets/tech_logo/sql-logo.png';
import cLogo from './assets/tech_logo/c.png';
// tools
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/githublogo.png';
import postmanLogo from './assets/tech_logo/postman.png';
import emailjsLogo from './assets/tech_logo/emailjs.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vitelogo from './assets/tech_logo/vite.png';
import netlifyLogo from './assets/tech_logo/netlifylogo.png';
import vercellogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png';
import npmLogo from './assets/tech_logo/npm.png';
import gaLogo from './assets/tech_logo/google_analytics.png';

// Experience Section Logo's
import nitLogo from './assets/company_logo/nit_logo.png'; // Naresh i Technologies
import internLogo from './assets/company_logo/internship_studio_logo.png'; // Internship Studio
// Education Section Logo's
import tatLogo from './assets/education_logo/TAT.png';    //Trident
import ghssLogo from './assets/education_logo/GHSS.png';  //Gokarnika
import schlLogo from './assets/education_logo/schl.png';  //Hatibari

// Work/Project Section Logo's
import reactPortfolioLogo from './assets/work_logo/reactportfolio.png'; // React Portfolio
import ecomLogo from './assets/work_logo/ecom.png';                      // E-Commerce Website
import todoLogo from './assets/work_logo/todo.png';                      // To-Do List SPA
import portfolioLogo from './assets/work_logo/portfolio.png';            // Personal Portfolio Website
import emiLogo from './assets/work_logo/emi.png';                        // EMI Calculator
import bmiLogo from './assets/work_logo/bmi.png';                        // BMI Calculator
import cityLogo from './assets/work_logo/city.png';                      //City list unlist CRUD Operation
import clkLogo from './assets/work_logo/clock.png';                      //Real-Time Analog Clock

// Certification Section Logo's
import ocideveloper from './assets/certification_logo/OCI-Developer.png';      //OCI Certified Developer
import ocifoundation from './assets/certification_logo/OCI-Foundation.png';    //OCI Certified Foundation
import wiprojava from './assets/certification_logo/Wipro-TalentNext.png';      //Wipro Certified in Java
import oraclelogo from './assets/certification_logo/oracle.png';                  //Oracle Logo
import wiprologo from './assets/certification_logo/wipro.png';                    //Wipro Logo
import oracle from './assets/certification_logo/oracle1.png';                  //Oracle
import wipro from './assets/certification_logo/wipro1.png';                    //Wipro


export const SkillsInfo = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'jQuery', logo: jQueryLogo },
      { name: 'jQuery UI', logo: jQUILogo },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'REST APIs', logo: restLogo }
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'SQL', logo: sqlLogo },
      { name: 'C', logo: cLogo }
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'EmailJS', logo: emailjsLogo },
      { name: 'Vite', logo: vitelogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Vercel', logo: vercellogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'NPM', logo: npmLogo },
      { name: 'Google Analytics', logo: gaLogo }
    ],
  },
];

export const experiences = [

  {
    id: 0,
    img: nitLogo,
    role: "Trainee",
    certificate: "https://drive.google.com/file/d/182bAnyjym2Sw4e1x-Fd1HZ_DtT9clX32",
    company: "Naresh i Technologies",
    website: "https://nareshit.com",
    location: "Hyderabad, IN • On-site",
    date: "Jul 2024 - Dec 2024",
    desc: "Completed an intensive six months offline training program in UI Full Stack Development, based in Hyderabad, India. This comprehensive program focused on hands-on learning and real-time project development, equipping me with the skills and confidence to build responsive websites and full-stack web applications from scratch.",
    skills: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Tailwind CSS",
      "Bootstrap",
      "SASS",
      "JavaScript",
      "Typescript",
      "Material UI",
      "HTML",
      "CSS",
      "Git",
      "GitHub",
      "jQuery",
      "Postman",
      "NPM",
      "Vite"
    ],
  },
  {
    id: 1,
    img: internLogo,
    role: " AWS Intern",
    certificate: "https://drive.google.com/file/d/1cbFkZIpojlj10tR8qdRllXao_FCjDaDv",
    company: "Internship Studio",
    website: "https://internshipstudio.com/",
    location: "Pune, IN • Remote",
    date: "Feb 2024 - May 2024",
    desc: "Completed a remote internship focused on AWS cloud architecture, deployment and infrastructure automation. Gained hands-on experience with AWS EC2, S3, IAM, Lambda and CloudFormation to deploy scalable cloud solutions. Automated infrastructure tasks, reducing manual setup time by 40% using Infrastructure-as-Code (IaC) and analyzed small-scale cloud projects by applying serverless architecture for improved efficiency and cost reduction.",
    skills: [
      "AWS",
      "S3",
      "EC2",
      "IAM",
      "CI/CD",
      "Lambda"
    ],
  }
];

export const education = [
  {
    id: 0,
    img: tatLogo,
    degree: "Graduation • B.Tech · CSE",
    school: "Trident Academy of Technology",
    location: "Bhubaneswar, Odisha, India",
    date: "Sep 2020 - May 2024",
    grade: "8.23 CGPA",
    desc: "During my B.Tech at Trident Academy of Technology under Biju Patnaik University of Technology, I developed a strong academic foundation in core areas of computer science and software engineering. My coursework included Data Structures and Algorithms [DSA], Object-Oriented Programming [OOP], Database Management Systems [DBMS], Web Development and Software Engineering, which equipped me with both theoretical knowledge and practical problem-solving skills. Beyond academics, I actively engaged in co-curricular activities and technical communities, including the Cyber Security Club and Coding Club, where I participated in workshops, hackathons and collaborative projects. These experiences significantly enhanced my technical capabilities, team collaboration and adaptability to real-world challenges. Overall, my time at Trident Academy played a pivotal role in shaping my technical proficiency and professional mindset, preparing me for a dynamic career in the tech industry.",
  },
  {
    id: 1,
    img: ghssLogo,
    degree: "Intermediate • Science • CHSE",
    school: "Gokarnika Higher Secondary School",
    location: "Jajpur, Odisha, India",
    date: "Jun 2018 - Mar 2020",
    grade: "64.83%",
    desc: "I completed my Higher Secondary Education [Class 11th and 12th] at Gokarnika Higher Secondary School, Jajpur, under CHSE, Odisha, with a specialization in Physics, Chemistry, Mathematics, and Biology [PCMB]. The curriculum offered a balanced understanding of mathematical and life sciences through extensive laboratory work, including experiments in circuits, mechanics, titrations, and microscopy, which enhanced my analytical and practical skills. Alongside academics, I actively participated in sports like volleyball and badminton, developing leadership, teamwork, and time management abilities. This education built a strong foundation for both my technical and interpersonal growth, shaping my academic and professional journey.",
  },
  {
    id: 2,
    img: schlLogo,
    school: "Hatibari Nodal High School",
    location: "Jajpur, Odisha, India",
    date: "Jun 2008 - Mar 2018",
    grade: "67.33%",
    desc: "I completed my primary and secondary education at Hatibari Nodal High School, Jajpur, under the Board of Secondary Education [BSE], Odisha. Beginning from Class 1 and continuing through Class 10, this decade-long academic journey laid the foundation of my intellectual growth and personal discipline. The school’s structured curriculum and emphasis on holistic learning nurtured my curiosity, academic consistency, and strong work ethic. These formative years not only equipped me with essential knowledge and values but also shaped the aspirations and core habits that continue to guide my educational and professional pursuits today.",
    degree: "Schooling • 10th • BSE",
  },
];

export const projects = [
  {
    id: 0,
    title: "My Portfolio Website",
    description: "This project is a fully responsive personal portfolio website developed using React and Vite, designed to deliver a seamless experience across both mobile and desktop devices. It features a modern, clean UI built with Tailwind CSS and incorporates interactive animations using Framer Motion, react-parallax-tilt and react-typing-effect, boosting user engagement by 60%. The application is structured with reusable components validated using prop-types and implements client-side routing via react-router-dom for smooth navigation. Additional functionalities include a real-time contact form powered by EmailJS, toast notifications via react-toastify and dynamic typewriter effects. The portfolio was built and deployed with a 65% faster load speed and 95% cross-device compatibility, and integrated with Google Analytics to track and improve user engagement.",
    image: reactPortfolioLogo,
    tags: ["React", "React-Router", "React-Icons", "React-Toastify", "Typewriter-Effect", "React-Tilt", "Framer-Motion", "HTML", "CSS", "Tailwind CSS", "JavaScript", "EmailJS", "Google Analytics", "Vite"],
    github: "https://github.com/Ashutosh-Pradhan-05/Ashutosh-Portfolio"
  },
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Developed a scalable full-stack e-commerce web application with React, Node.js, Express.js, and MongoDB, integrating secure authentication and state management using JWT and Redux, and leveraging Vite as a buildtool for fast development and optimized performance.",
    image: ecomLogo,
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "React", "React-Router", "Redux", "Cors", "Nodemon", "JWT", "API", "Tailwind CSS", "Vite", "Cookie-Parser",],
    github: "https://github.com/Ashutosh-Pradhan-05/E-Commerce_Web_App/tree/my-new-branch"
  },
  {
    id: 2,
    title: "To-DO List [SPA]",
    description:
      "A dynamic, single-page To-Do web application for managing tasks and appointments. Features include user registration, login, personalized dashboards, and CRUD operations for appointments. Built with responsive design for seamless user experience, leveraging modern web technologies for efficient task management.",
    image: todoLogo,
    tags: ["Node.js", "MongoDB", "Express.js", "jQuery", "HTML", "CSS", "JavaScript", "Bootstrap", "API", "Tailwind CSS"],
    github: "https://github.com/Ashutosh-Pradhan-05/To-Do/tree/new-branch"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "This personal portfolio website, built with HTML, CSS, Tailwind CSS, Bootstrap, and JavaScript, showcases my expertise in front-end development through a modern, fully responsive design. It highlights my skills, projects, and professional experience with an intuitive interface, smooth animations, and optimized performance.",
    image: portfolioLogo,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/Ashu_Portfolio"
  },
  {
    id: 4,
    title: "EMI Calculator",
    description:
      "This EMI Calculator is a responsive and user-friendly web app developed using HTML, CSS, JavaScript, and Bootstrap, offering precise calculations of equated monthly installments with seamless functionality.",
    image: emiLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/EMI_Calculator"
  },
  {
    id: 5,
    title: "BMI Calculator",
    description:
      "Developed a dynamic and responsive BMI Calculator web app leveraging HTML, CSS, and Bootstrap for an intuitive user interface, and JavaScript for efficient real-time BMI computation and validation.",
    image: bmiLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/BMI_Calculator"
  },
  {
    id: 6,
    title: "City List & Unlist",
    description:
      "This web app efficiently manages city lists with a modern tech stack [HTML, CSS, JavaScript, Bootstrap]. It supports adding, editing, sorting, and deleting cities, enhanced by dynamic interactions. A user-friendly modal popup enables seamless city edits, and the responsive design ensures usability across devices.",
    image: cityLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/Add_City"
  },
  {
    id: 7,
    title: "Real-Time Analog Clock",
    description:
      "This project is a real-time Indian Standard Time [IST] analog clock built using HTML, CSS, and JavaScript. The clock updates every second with smooth rotations for the hour, minute, and second hands. It features a custom-designed clock face with a background image, showcasing CSS styling and JavaScript for real-time functionality.",
    image: clkLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://ashutosh-pradhan-05.github.io/Realtime_analog_wall_clock"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Developer Professional [1Z0-1084-25]",
    image: ocideveloper,
    logo: oraclelogo,
    orglogo: oracle,
    organization: "ORACLE",
    cid: "102640477OCID25CP",
    issueddate: "10th October 2025",
    valid: "10th October 2025 - 10th October 2027",
    score: "88%",
    verifyLink:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=B73548D19BCA7FEC3CF9B88E32161E371FB2D9E859D3A774E9C366B6CD263DC2"
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate [1Z0-1085-25]",
    image: ocifoundation,
    logo: oraclelogo,
    orglogo: oracle,
    organization: "ORACLE",
    cid: "102640477OCI25FNDCFA",
    issueddate: "15th September 2025",
    valid: "15th September 2025 - 15th September 2027",
    score: "90%",
    verifyLink:"https://catalog-education.oracle.com/pls/certview/sharebadge?id=FECD283DE7E81A1572654171EB62C89D148B723F3EF4D424BBC88510FAB5DC2F"
  },
  {
    id: 3,
    title: "Wipro TalentNext Program on Java",
    image: wiprojava,
    logo: wiprologo,
    orglogo: wipro,
    organization: "WIPRO",
    cid: "T28FNb",
    issueddate: "06th October 2023",
    valid: "This certificate does not expire.",
    score: "85%",
    verifyLink:"https://cert.diceid.com/csr/cid/T28FNb?verify=true"
  },
];