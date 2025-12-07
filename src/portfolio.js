/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "",
  title: "Hello, I'm Dhruv Shah",
  subTitle: emoji(
    "I’m an aspiring software engineer driven by building practical, scalable solutions. I’ve developed my skills through hands-on experience and personal projects."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DhruvShah87",
  linkedin: "https://www.linkedin.com/in/dhruv-shah-52a985227//",
  gmail: "shahdhruv20012004@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "Passionate Problem Solver Driven By A Desire To Build Something Meaningful",
  skills: [
    "I am a Software Engineer with a strong interest in building reliable, scalable, and well-structured applications. Through my industry internship and my personal projects, I’ve gained hands-on experience designing systems, developing APIs, working with databases, and deploying applications using modern tools. I enjoy solving real-world problems through clean architecture and thoughtful engineering, and I’m actively seeking opportunities where I can contribute, learn, and grow as part of a collaborative software engineering team."
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "express",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },

    {
      skillName: "langchain",
      fontAwesomeClassname: "fas fa-link"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dhirubhai Ambani University",
      logo: require("./assets/images/dau_logo.jpg"),
      subHeader: "Bachelors of Technology in Information and Communication Technology",
      duration: "Oct 2021 - Jun 2025",
      descBullets: [
        "Graduated with 9.01 CPI",
        "Studied core software engineering subjects including Data Structures and Algorithms, OOPs, DBMS, Computer Networks, and Cloud Computing",
        "Chair of IEEE IAS DA-IICT Student Chapter",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Quicko Infosoft Pvt Ltd",
      companylogo: require("./assets/images/quicko_logo.jpg"),
      date: "Jan 2025 - Mar 2025",
      desc: "Designed and deployed serverless, scalable APIs for automated tax document extraction, validation, and classification",
      descBullets: [
        "Developed scalable APIs that integrate Gemini models to automate tax-document classification and extraction, speeding processing by 70%",
        "Deployed serverless APIs with AWS Lambda and Jenkins CI/CD; provisioned multi-environment infrastructure with Terraform for consistent, scalable releases",
        "Added multipart file uploads and PDF validation using PDFLib, cutting invalid submissions by 35%; applied Zod validation to improve output consistency by 75%",

      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const projects = {
  title: "Projects",
  projects: [
    {
      projectName: "KitchenConnect",
      projectDesc: "KitchenConnect is a cross-platform application that connects tiffin providers with consumers, enabling subscription-based and single-order meal delivery.",
      bullets: [
        "Architected and developed an end-to-end platform with 10+ core modules, including authentication, subscriptions, orders, wallet, transactions, menus, and delivery management for multi-provider operations",
        "Designed and implemented 25+ scalable RESTful APIs with MongoDB, supporting concurrent users, real-time updates via WebSockets, and push notifications for order and status synchronization",
        "Built an analytics and planning suite featuring a subscription delivery calendar, revenue and order trend tracking, and Google Maps–based route optimization to improve operational efficiency",
      ],
      techStack: ["React Native", "Node.js", "Express.js", "MongoDB"],
      footerLink: [
        {
          name: "Overview",
          url: "https://bit.ly/48LObXM"
        },
        {
          name: "Github",
          url: "https://github.com/mihir-paija/KitchenConnect"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Flight Booking System",
      projectDesc:
        "A scalable flight booking platform that manages flight data and ensures consistent, conflict-free seat reservations.",
      bullets: [
        "Developed and maintained 20+ RESTful APIs to support key aviation entities, including flights, airports, airlines, cities, and seat inventory",
        "Architected end-to-end booking workflows with comprehensive data validation and transaction-safe mechanisms to ensure data integrity and prevent conflicts",
        "Implemented object-oriented design practices, structured logging with Winston, and rigorous input validation to enhance system reliability and maintainability"
      ],
      techStack: ["Node.js", "Express.js", "SQL"],
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/DhruvShah87/airplane_booking"
        }
      ]
    },

    {
      projectName: "YouTube Chatbot (RAG)",
      projectDesc:
        "A retrieval-augmented chatbot that enables users to query and explore YouTube video content through natural language.",
      bullets: [
        "Implemented a RAG pipeline for contextual question-answering over YouTube video transcripts.",
        "Integrated LangChain with Gemini to generate accurate and relevant responses.",
      ],
      techStack: ["Python", "LangChain", "Gemini"],
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/DhruvShah87/youtube-chatbot"
        }
      ]
    },

    {
      projectName: "News Research Tool (RAG)",
      projectDesc:
        "A Retrieval-Augmented Generation (RAG) agent that helps users find answers from the content of news article URLs.",
      bullets: [
        "Built a news ingestion pipeline to extract, chunk, and embed article content from URLs.",
        "Enabled natural language querying over multiple articles using LangChain and Gemini.",
      ],
      techStack: ["Python", "LangChain", "Gemini"],
      footerLink: [
        {
          name: "Demo",
          url: "https://news-research-tool-kklk.onrender.com"
        },
        {
          name: "Github",
          url: "https://github.com/DhruvShah87/news-research-tool"
        }
      ]
    },

    {
      projectName: "Fashion Recommendation System",
      projectDesc:
        "An image-based recommendation system that suggests visually similar clothing items when a user uploads a garment photo.",
      bullets: [
        "Optimized a ResNet-based architecture by integrating additional pooling layers to generate high-quality image embeddings",
        "Converted a large-scale clothing image dataset into vector embeddings to enable efficient similarity matching",
        "Implemented an embedding-based recommendation pipeline using nearest-neighbor search on user-uploaded images"
      ],
      techStack: ["Python", "Tensorflow"],
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/DhruvShah87/fashion-recommendation-system"
        }
      ]
    },
    {
      projectName: "TEEM",
      projectDesc:
        "TEEM is a web app designed to streamline collaboration between people from diverse backgrounds by allowing them to create workspaces, organize meetings, and manage tasks.",
      bullets: [
        "Developed RESTful APIs to support CRUD operations for workspaces, tasks, and configuration settings",
        "Implemented automated email workflows for task assignments and meeting notifications",
        "Contributed to database design and optimization, including schema development and SQL query writing"
      ],
      techStack: ["Node.js", "Express.js", "SQL"],
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/KrishRupapara/Group-14_Proj-TEEM"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Always open to new ideas and meaningful opportunities",
  number: "+91 92659 57423",
  email_address: "shahdhruv20012004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
