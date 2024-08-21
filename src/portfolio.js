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
  username: "Paolo R",
  title: "Hi all, I'm Paolo",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having an experience of building Web and Cloud Native applications with PHP / Nodejs / TS / AWS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/paolorabbito",
  linkedin: "https://www.linkedin.com/in/paolo-rabbito-571b191a9/",
  gmail: "paolorabbitodev@gmail.com",
  facebook: "https://www.facebook.com/paolo.rabbito.7/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop Rest API for your web and mobile applications"
    ),
    emoji("⚡ Cloud Native Application with AWS"),
    emoji(
      "⚡ Integration of third party services such as AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c-plus-plus"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Catania",
      logo: require("./assets/images/unict.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2017 - on the road",
      desc: "Thesis: Blockchanin and Distributed indentity managment",
      descBullets: []
    },
    {
      schoolName: "Liceo Scientifico E. Fermi",
      logo: require("./assets/images/fermi.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2009 - July 2014",
      desc: "PNI: National Plan of Computer Science",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Claranet Italia",
      companylogo: require("./assets/images/claranet.jpeg"),
      date: "July 2023 – Present",
      descBullets: [
        "Serverless application with AWS and Typescript",
        "Backend in PHP with Symfony",
        "Backend in PHP with Laminas with international team"
      ]
    },
    {
      role: "Software Engineer",
      company: "Flowing Srl",
      companylogo: require("./assets/images/flowing.jpeg"),
      date: "Oct 2022 – June 2023",
      descBullets: [
        "Serverless application with AWS and Typescript",
        "Backend in PHP with Symfony",
        "Backend in PHP with Laminas with international team"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Intrapresa Srl",
      companylogo: require("./assets/images/intrapresa.jpg"),
      date: "Mar 2022 – Sep 2022",
      descBullets: [
        "AWS Serverless API",
        "Refactoring legacy code to improving performance",
        "Blockchain research for Bachelor thesis"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I WORKED ON BY MY SELF OR WITH A TEAM",
  projects: [
    {
      image: require("./assets/images/moltisanti.png"),
      projectName: "Psicologa-Ragusa",
      projectDesc: "Portfolio website for a local psychologist",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.psicologa-ragusa.it/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/unict_devs.png"),
      projectName: "Telegram-DMI-Bot",
      projectDesc: "Telegram BOT for studendts of DMI in Catania",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/UNICT-DMI/Telegram-DMI-Bot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/unict.png"),
      projectName: "CVE 2021-26814",
      projectDesc: "Exploit and explanation of CVE 2021-26814 using path trasversal attack with guidline on how to prevent this attack.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/paolorabbito/Internet-Security-Project---CVE-2021-26814"
        }
      ]
    },
    {
      image: require("./assets/images/unict.png"),
      projectName: "RPS Database",
      projectDesc: "Relational database for the management of selling/rental office equipment",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/paolorabbito/RPS"
        }
      ]
    },
    {
      image: require("./assets/images/unict.png"),
      projectName: "Remote Training",
      projectDesc: "Web app with different role level to help trainer and athlets that using online training",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/UniCT-WebDevelopment/Remote-Training"
        }
      ]
    }
  ],
  display: true// Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AppSec for Developers",
      subtitle:
        "Showcases knowledge and understanding of how to find and fix vulnerabilities in code, enhance the security culture within their dev team, and apply DevSecOps thinking day to day.",
      image: require("./assets/images/appsec-for-developers.png"),
      imageAlt: "AppSec Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/7b923c9f-9f2b-4854-bd27-1e8eb568b432/public_url"
        }
      ]
    },
    {
      title: "AWS Certified Developer - Associate",
      subtitle:
        "Showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS",
      image: require("./assets/images/aws-dva.png"),
      imageAlt: "DVA-C01 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/a22134ae-bcda-4752-8a0b-7b2f619a8300/linked_in_profile"
        }
      ]
    },
    {
      title: "Microsoft Azure Fundamentals",
      subtitle:
        "Showcases knowledge and understanding of basic services and best practices using Microsoft Azure Platform", 
      image: require("./assets/images/microsoft-certified-fundamentals-badge.png"),
      imageAlt: "AZ-900 Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/it-it/users/paolorabbito-0389/credentials/aae75adcce73cb56"
        }
      ]
    },
    {
      title: "ECDL",
      subtitle:
        "AICA - Associazione Italiana per l'Informatica e il Calcolo Automatico",
      image: require("./assets/images/ECDL.jpeg"),
      imageAlt: "AICA Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
      title: "From 0 to AWS Certified",
      subtitle: "Private speach for Claranet Italia"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "paolorabbitodev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
