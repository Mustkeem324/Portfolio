import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `As a passionate full stack developer, I specialize in building robust and scalable web applications that stand out. With hands-on expertise in front-end technologies such as React and Next.js, along with back-end proficiency in Node.js, MySQL, and MongoDB, I am committed to leveraging my skills to craft innovative solutions. My mission is to drive business growth while delivering exceptional user experiences that make a difference.`;

export const ABOUT_TEXT = `I am a versatile full stack developer who thrives on creating efficient and user-friendly web applications. My professional journey has led me to work with a diverse set of technologies, including React, Node.js, MySQL, and MongoDB. It all began with a curiosity about how things work, evolving into a fulfilling career where I constantly seek new challenges and learning opportunities. I thrive in collaborative environments, relishing the chance to tackle complex problems and deliver top-notch solutions. Beyond coding, I enjoy staying active, delving into new technologies, and contributing to open-source initiatives.`;



export const PROJECTS = [
  {
    title: "Expense Tracker",
    image: project1,
    description:
      "Take control of your finances with the Expense Tracker! This intuitive application empowers users to effortlessly manage their income and expenses. Features include transaction categorization, budget setting, and timely alerts, ensuring you stay on top of your financial goals.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    live: "https://github.com/",
  },
  {
    title: "ChatsUp",
    image: project2,
    description:
      "Connect and communicate with ease using ChatsUp, a cutting-edge real-time chat application built on the MERN stack. Enjoy a sleek, responsive interface crafted with Tailwind CSS and DaisyUI, while Context API and React Hot Toast deliver seamless notifications and efficient state management.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    live: "https://github.com/",
  },
  {
    title: "BuyBusy",
    image: project3,
    description:
      "Experience the convenience of online shopping with BuyBusy, a feature-rich e-commerce platform. Built using React for a dynamic user interface, this application leverages Firebase for database management and authentication, making it easy for customers to browse and purchase products.",
    technologies: ["CSS", "React", "Redux", "Firebase"],
    live: "https://github.com/",
  },
  {
    title: "Issue Tracker",
    image: project4,
    description:
      "Streamline your project management with the Issue Tracker, a user-friendly web app designed to help teams track bugs and issues effectively. Built with Node.js and EJS, this application allows users to create projects, log issues, and prioritize tasks, enhancing collaboration and productivity.",
    technologies: ["Bootstrap", "Node.js", "Express.js", "MongoDB"],
    live: "https://github.com/",
  },
];

