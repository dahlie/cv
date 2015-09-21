export default {
  personal: {
    name: "Hannu Pousi",
    title: "// full-stack developer",
    picture: "pics/profile-pic.jpg",
    description: "In a nutshell <strong>creating great software</strong> is what makes me tick. I'm not talking about having a cup of tea and typing in the code with your favourite editor, but the whole <strong>collaborative process</strong> of crafting an initial idea into a finished software product. <strong>Buzz word complaint</strong> but not naïve."
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
              label: "Javascript/Coffeescript",
              description: "2+ years of experience developing SPAs using modern JS-frameworks like React.js, Angular.js and Knockout.js. Also familiar with JS ecosystem (npm, bower, Gulp), Node.js and ES6."
            },
            {
              label: "HTML/CSS",
              description: "Good understanding of basic concepts in both HTML and CSS (Jade, Stylus)."
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
              description: "Many years experience with different SQL DBs and ORMs. Also familiar with MongoDB, Redis, Elastic."
            },
            {
              label: "Agile",
              description: "Scrum, Kanban. Also experienced with team coaching and training."
            },
            {
              label: "Test automation",
              description: "8+ years experience in test automation including TDD, BDD and integration testing (Protractor, Capybara, RSpec)."
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
              description: "6+ years experience managing different sized projects and customers."
            },
            {
              label: "Training",
              description: "Experienced in customer and internal training."
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
          company: "Leonidas Oy",
          label: "Developer Extraordinare",
          from: "Aug 2013",
          to: "Present",
          content: "Worked as project lead and/or developer in multiple projects with public and private sector clients. All implemented front-ends were complex SPA applications using React.js and Angular.js. Also worked in back-end development using Clojure and Java.",
          keywords: ["React.js", "Angular.js", "SPA", "Node.js", "Clojure", "Java", "Jade", "Stylus", "SQL", "MongoDB"]
        },
        {
          type: "work",
          company: "Bitwise Oy",
          label: "Design engineer",
          from: "Feb 2008",
          to: "Jul 2013",
          content: "Worked as a project lead/manager and/or developer in multiple projects. Responsibilities covered almost every aspect of software development from technology studies and architecture design to UX/IX design. Did also some client training and software methodology evaluations and helping putting them into daily project practices.",
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
          content: "Badminton, Les Mills classes, jogging, snowboarding to name few. Exercising regularly 4 to 6 times a week is essential in trying to keep body and mind in shape."
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
