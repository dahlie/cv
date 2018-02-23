export default {
  personal: {
    name: "Hannu Pousi",
    title: "// full-stack developer",
    picture: "pics/profile-pic.jpg",
    description: "I'm experienced full-stack developer driven by the end results. I'm intrigued by the collaborative process of crafting the initial idea into a finished and polished software product. Buzz word compliant but pracmatic."
  },
  sections: [
    {
      id: "profile",
      title: "Personal info",
      items: [
        {
          type: "text",
          label: "Full name",
          content: "Hannu Pousi"
        },
        {
          type: "text",
          label: "Born",
          content: "19 Dec 1980 - Tampere, Finland"
        },
        {
          type: "text",
          label: "Email",
          content: "pousi@iki.fi"
        },
        {
          type: "links",
          label: "Find me on",
          content: [
            {
              type: "facebook",
              url: "https://www.facebook.com/pousi"
            },
            {
              type: "twitter",
              url: "https://twitter.com/HannuPousi"
            },
            {
              type: "github",
              url: "https://github.com/dahlie/"
            },
            {
              type: "linkedin",
              url: "https://linkedin.com/in/HannuPousi"
            },
            {
              type: "medium",
              url: "https://medium.com/@hannu.pousi"
            }
          ]
        }
      ]
    },
    {
      id: "skills",
      title: "Skills",
      items: [
        {
          type: "list",
          label: "Languages",
          content: [
            {
              label: "Finnish",
              description: "Native"
            },
            {
              label: "English",
              description: "Full professional proficiency"
            }
          ]
        },
        {
          type: "list",
          label: "Programming",
          content: [
            {
              label: "Javascript",
              description: "5+ years of experience in front-end and back-end applications written using React/Redux, Node.js and Angular.js. Also proficient with build tools such as Webpack and Gulp."
            },
            {
              label: "HTML/CSS",
              description: "Good understanding in both HTML and CSS (Jade, Stylus)."
            },
            {
              label: "C#",
              description: "5+ years of experience developing .NET desktop applications and back-end solutions (WPF, WCF, Asp.Net MVC3, Prism, NInject)."
            },
            {
              label: "Java",
              description: "4+ years of experience developing Java applications with Spring framework."
            },
            {
              label: "Clojure",
              description: "1+ year of experience developing back-ends for web applications (Ring, lein)."
            },
            {
              label: "Other languages",
              description: "Python, Ruby, Swift (iOS), C/C++, LUA, Scala"
            }
          ]
        },
        {
          type: "list",
          label: "Tools / methodologies",
          content: [
            {
              label: "Databases",
              description: "Many years experience in different SQL DBs and ORMs. Also familiar with MongoDB, Redis, Elastic."
            },
            {
              label: "Agile",
              description: "Scrum, Kanban. Also experienced with team coaching and training."
            },
            {
              label: "Test automation",
              description: "10+ years experience in test automation including TDD, BDD and integration testing (xUnit, Mocha, Jest, Protractor, Capybara, RSpec)."
            },
            {
              label: "Version control",
              description: "GIT, SVN, Mercurial."
            }
          ]
        },
        {
          type: "list",
          label: "Other skills",
          content: [
            {
              label: "Project management",
              description: "6+ years experience managing software projects and customers."
            },
            {
              label: "Training",
              description: "Held multiple technical and non-technical internal and customer trainings."
            }
          ]
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      items: [
        {
          type: "education",
          label: "Master of Science (eng.)",
          school: "Tampere University of Technology",
          graduated: "2005",
          content: "Graduated from information technology degree program with software engineering as main subject and hypermedia as subsidiary subject. Grade average and thesis grade were both \"very good\"."
        },
        {
          type: "education",
          label: "Matriculation Examination",
          school: "Jämsänkosken lukio",
          graduated: "1999",
          content: ""
        }
      ]
    },
    {
      id: "work-history",
      title: "Work history",
      items: [
        {
          type: "work",
          company: "Nokia Technologies Oy",
          label: "Senior Software Engineer (full-stack)",
          from: "Aug 2016",
          to: "present",
          content: "Tech lead in medical IoT system front-end team. Also worked on Node.js based microservices.",
          keywords: ["React", "Redux", "Node.js", "IoT", 'Microservices', 'Docker']
        },
        {
          type: "work",
          company: "Leonidas Oy",
          label: "Senior Software Engineer",
          from: "Aug 2013",
          to: "Jul 2016",
          content: "Project lead and/or developer in multiple projects with public and private sector clients. All implemented front-ends were complex SPA applications using React.js and Angular.js. Also implemented back-end features using Clojure and Java.",
          keywords: ["React", "Redux", "Angular.js", "SPA", "Node.js", "Clojure", "Java", "Jade", "Stylus", "SQL", "MongoDB"]
        },
        {
          type: "work",
          company: "Bitwise Oy",
          label: "Design engineer",
          from: "Feb 2008",
          to: "Jul 2013",
          content: "Project lead/manager and/or developer in multiple projects. Responsibilities covered almost every aspect of software development from technology studies and architecture design to UX/IX design. Did also some client training and software methodology evaluations and helping putting them into daily project practices.",
          keywords: ["C#", ".Net", "WPF", "MVVM", "WCF", "Linq", "SQL", "Java"]
        },
        {
          type: "work",
          company: "Insta Oy",
          label: "Software architect",
          from: "Oct 2007",
          to: "Jan 2008",
          content: "Continued in the research project. Project's goals now also included evaluating new methodologies such as TDD and Scrum in daily use.",
          keywords: ["C++", "Java", "Spring", "Software architecture", "GIS", "Web services"]
        },
        {
          type: "work",
          company: "Insta Oy",
          label: "Design engineer",
          from: "Nov 2005",
          to: "Sep 2007",
          content: "Implementation and testing of distributed FAF ADCC system user interfaces and back-end. Also worked in a research project which studied and evaluated suitability of new technologies and software tools. This included developing higher level architecture for the legacy system using rapid prototyping.",
          keywords: ["C++", "Java", "Spring", "Software architecture", "GIS", "Web services"]
        },
        {
          type: "work",
          company: "Insta Oy",
          label: "Trainee",
          from: "May 2003",
          to: "Oct 2005",
          content: "Implementation and testing of distributed FAF ADCC system user interfaces and back-end.",
          keywords: ["C++", "C"]
        }
      ]
    },
    {
      id: "interests",
      title: "Interests",
      items: [
        {
          type: "text",
          label: "Sports",
          content: "Badminton, Les Mills classes, jogging, snowboarding to name few. Trying to exercising regularly to keep body and mind in shape."
        },
        {
          type: "text",
          label: "Food and wine",
          content: "Exercising requires good food - or the other way around. Either way I enjoy good food whether it's trying out a new local restaurant or experimenting in kitchen at home."
        },
        {
          type: "text",
          label: "Music",
          content: "When it comes to music I'm an omnivore. Good music is always good music despite of its obscure genre definitions or heavy playlist rotation. Trying ironically avoid being categorized as hipster."
        }
      ]
    }
  ]
}
