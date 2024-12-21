const experiences = [
  {
    title: "Junior Full Stack Mobile Engineer",
    company: "InStride Health",
    location: "Remote",
    startDate: "03/04/2024",
    endDate: "Current",
    description: [
      "Writing software to help support treatment that changes the lives of kids, teens, and young adults ages 7 to 22 with anxiety and/or OCD, along with their families",
    ],
    skills: ["Go", "React", "Flutter"],
  },
  {
    title: "Full Stack Software Engineering Intern",
    company: "Handshake",
    location: "Remote",
    startDate: "06/01/2022",
    endDate: "08/01/2022",
    description: [
      "Utilized Test Driven Development (TDD) to develop GraphQL mutations on a Ruby on Rails backend to improve the performance of the student inbox",
      "Utilized React to add Segment tracking, Toast style error handling, and patch bugs on the event details page to improve the student event registration experience",
      "Paired with senior level engineers to gain experience reviewing code and learning about architecture level code designs",
    ],
    skills: [
      "Typescript",
      "React",
      "Ruby on Rails",
      "GraphQL",
      "GitHub",
      "Jira",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Lutron Electronics",
    location: "Philadelphia, Pennsylvania",
    startDate: "05/01/2021",
    endDate: "08/01/2021",
    description: [
      "Designed, developed, documented, and tested an automatic crash detection and remediation feature for the Lutron iOS app using Swift and Objective-C",
      "Worked on an Agile, cross-functional team participating in scrum meetings, bug fixes, and pull request code reviews",
    ],
    skills: [
      "Swift",
      "Objective-C",
      "Xcode",
      "Jira",
      "Bitbucket",
      "Confluence",
    ],
  },
  {
    title: "Information Technology Intern",
    company: "Northern Burlington County Regional School District",
    location: "Columbus, New Jersey",
    startDate: "06/01/2020",
    endDate: "08/01/2020",
    description: [
      "Prepared Chromebooks for student distribution by performing quality assurance and organizing them according to type",
      "Set up new and existing hardware to prepare for the upcoming school year",
    ],
    skills: [],
  },
  {
    title: "Computer Data Specialist",
    company: "Princeton University Facilities",
    location: "Princeton, New Jersey",
    startDate: "06/01/2019",
    endDate: "08/01/2019",
    description: [
      "Performed data collection, entry, and quality assurance for the linear asset program of the underground utilities around Princeton campus",
      "Developed spreadsheets in Excel to track the life cycle of the underground utilities across campus by loading them into the IBM Maximo program",
    ],
    skills: [],
  },
];

const projects = [
  {
    title: "Slide Puzzle Word Game",
    startDate: "09/01/2023",
    endDate: "09/01/2023",
    description: [
      "Used React and Tailwind CSS to build a word game where you solve slide puzzles to form phrases",
      "Wrote the clues, hints, and phrases for the various levels",
    ],
    links: {
      "App Link": "https://slidewordgame.web.app/",
      "Github Link": "https://github.com/troytomasch/SlideWordGame",
    },
    images: {},
  },
  {
    title: "Personal Website",
    startDate: "07/01/2023",
    endDate: "07/01/2023",
    description: [
      "Used React, Tailwind CSS, and Firebase to build a personal website with multiple pages to serve as my web development playground",
      "Employed an atomic structure with the codebase to promote reusability of the components",
    ],
    links: {
      "Github Link": "https://github.com/troytomasch/PersonalWebsite",
    },
    images: {},
  },
  {
    title: "Senior Design Project: Hoboken Now",
    startDate: "09/01/2022",
    endDate: "05/01/2023",
    description: [
      "Developed a cross-platform information app for Hoboken residents using ReactNative, Typescript, Firebase, Google Cloud Functions, GraphQL, Node, and Expo",
      "Implemented the home, calendar, search, and information pages end to end",
      "Published apps to Apple app store and Google play store",
    ],
    links: {
      "Apple App Store":
        "https://apps.apple.com/us/app/hobokennow/id6447999506",
      "Google Play Store":
        "https://play.google.com/store/apps/details?id=tcb.android&hl=en_US&gl=US",
    },
    images: {},
  },
  {
    title: "Web Programming II Project",
    startDate: "01/01/2022",
    endDate: "05/01/2022",
    description: [
      "Worked on a team of five using Node, React, Redis, Redux, Postman, and MongoDB to develop a music listening web application with chat rooms and group listening",
      "Utilized the Spotify API to develop the end-to-end functionality for a music player",
    ],
    links: {},
    images: {},
  },
  {
    title: "Web Programming I Project",
    startDate: "09/01/2021",
    endDate: "12/01/2021",
    description: [
      "Worked on a team of four using Node JS, HTML, CSS, Handlebars JS, and MongoDB to develop a sport venue finder",
      "Developed user login, registration, and profile features from the routes and the backend functionality to the frontend appearance and client-side scripts",
    ],
    links: {},
    images: {},
  },
  {
    title: "Agile Project Management Project",
    startDate: "09/01/2020",
    endDate: "12/01/2020",
    description: [
      "Worked on a team to design an Impossible Maze game using Python and Pygame",
      "Conducted the project virtually using Agile methodology with two-week sprints and the tools Trello by Atlassian, GitHub, Microsoft VS Code, and Zoom",
    ],
    links: {},
    images: {},
  },
];

export { experiences, projects };
