import Mock from "../mock";

const database = {
  information: {
    name: 'Joseph Badua',
    aboutContent: "I am a Full Stack Developer based in Los Angeles, California ",
    age: 21,
    phone: '562-382-4416',
    nationality: 'American',
    language: 'English',
    email: 'josephbadua1006@gmail.com',
    address: 'Los Angeles, CA',
    freelanceStatus: 'Available',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/joseph-badua-60aaa7188/',
      github: 'https://github.com/JosephBadua'
    },
    brandImage: '/images/pictureProfile.png',
    aboutImage:  '/images/pictureProfile.png',
    aboutImageLg:  '/images/pictureProfile.png',
    cvfile: '/files/Badua_Joseph_Resume.pdf'
  },
  services: [
    {
      title: "Passionate and Determined",
      icon: 'heart',
      details: "I work hard to design the best websites and applications I can create. I pour a lot of love and effort into every project, wanting to go above and beyond everyone's expectations."
    },
    {
      title: "Always Learning",
      icon: 'code',
      details: "I'm always looking to expand my network, meet new people, hone my skills and learn new ones. In a forever evolving industry, it's my goal to always be a step ahead so that I'm prepared for anything."
    },
    {
      title: "Working with Others",
      icon: 'users',
      details: "I enjoy working with groups, learning from one another and collaborating together to make our ideas become a reality. I do well alone but I thrive greatly when working with a great team"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Joseph Badua is someone that leaves a great impression as a developer. I have had the great privilege of studying along side him at the Coding Boot Camp at UCR Extension. Joseph exudes great knowledge of the MERN Full Stack development, and he displays a welcoming and delightful personality that wants you to continue to work with him. He is quick to troubleshoot issues, create wonderful content, and display clean and concise code. He is a developer that inspires me to shoot to greater heights of knowledge and skills because of his astounding knowledge and skills. I would consider it a great pleasure to have a well-rounded developer such as Joseph on my team. ",
      author: {
        name: 'William Gonzales',
        designation: 'Full-Stack Developer'
      }
    },
    {
      id: 2,
      content: "Joseph and I studied together and worked on multiple projects during our tenure at the UCR Extension. He has a wide knowledge of full-stack development that puts our teams at ease, as he has proven dependable and helpful when issues arise. His skills on the front-end are unmatched, and his understanding of the back-end make him great to bounce ideas off of. He is wonderful to have around, not only due to his expertise, but because of his friendly demeanor and attitude. His creativity always left me impressed and I have no doubt in my mind that any team would find themselves more productive by having Joseph a part of it.",
      author: {
        name: 'Thomas Nelson',
        designation: 'Full-Stack Developer'
      }
    },
    {
      id: 3,
      content: "I had the pleasure of working with Joseph on our stock-tracking website project. He was a great addition to the team both for his easy-to-work-with personality and his technical knowledge. He has a careful attention to detail and a flair for organization that kept our project tidy and readable. Even while engrossed with his own parts of the project development, Joseph was always eager to help others with their own issues on the project. Despite the numerous issues we encountered throughout the development process, Joseph had the persistence and determination for problem-solving that made overcoming these roadblocks that much easier. Joseph would be an outstanding addition to any team.",
      author: {
        name: 'Michael Johnston',
        designation: 'Full-Stack Developer'
      }
    },
    {
      id: 4,
      content: "I worked with Joseph on multiple projects this year. His help was instrumental in the success of our projects, as well as the success of our team. Whenever there was an issue or a roadblock that prevented us from moving forward, he was always there to offer assistance and solutions. Joseph is always ready with an answer, and when faced with new technologies, he is always determined to learn them as fast, and thoroughly as possible. His highly analytical point of view and quick problem solving was a great asset to our team. I consider myself fortunate to have been able to work alongside him to create all of our past projects and look forward to working with him again in the future. ",
      author: {
        name: 'Phillip Laub',
        designation: 'Full-Stack Developer'
      }
    },
    {
      id: 5,
      content: `I've had the privilege of having Joseph being one of my students during an intensive Coding Boot Camp at the University of California, Riverside. He is a hard-working, driven, and ambitious individual who shows great promise in his professional career due to his eagerness to learn new things and master his existing skillset. Aside from his technical skills, his upbeat personality and appeal encourage a friendly working atmosphere. The best compliment that I could give him was neither my TAs nor myself believe him when he said he had no coding experience after seeing his work and progress. I believe Joseph will be a valuable asset to any company that brings him on board.`,
      author: {
        name: 'Farish Kashefinejad',
        designation: 'Content Creator/CXP at CodeAcademy'
      }
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Star Jump",
      subtitle: "Web application using React.js and MongoDB. Users can play multiple game modules made for young children and their learning. Features user login and a reward system.",
      imageUrl: "/images/starGif.gif",
      largeImageUrl: [
        "/images/starJump.png",
      ],
      url: 'https://powerful-tundra-87228.herokuapp.com/'
    },
    {
      id: 2,
      title: "Spot On",
      subtitle: "Using MySQL and Sequelize, people can find their lost pets and any user can help reunite strays with their own owners. Features user login and SQL queries",
      imageUrl: "/images/spotOngif.gif",
      largeImageUrl: ["/images/spotOn.png"],
      url: 'https://spot-on-app.herokuapp.com/'
    },
    {
      id: 3,
      title: "Pixit",
      subtitle: "Application with Google Cloud Platform and Google Maps API. Uses geolocation to store past locations on community activity",
      imageUrl: "/images/pixitGif.gif",
      largeImageUrl: ["/images/pixit.png"],
      url: 'https://github.com/JosephBadua/pixit2-electricpixaloo'
    },
    {
      id: 4,
      title: "Friend Finder",
      subtitle: "Using REST APIs, users can answer questions which will calculate a score and match them with their closest friend; which is a past user who answered similarly to the current user.",
      imageUrl: "/images/friendFinderGif.gif",
      largeImageUrl: ["/images/friendfinder1.png", "/images/friendfinder2.png"],
      url: 'https://friend-finder-app-joseph.herokuapp.com/'
    },
    {
      id: 5,
      title: "Train Scheduler",
      subtitle: "With Google Firebase and Moment.js, users are able to see when is the next train as well as list any new trains for future users who visit the application.",
      imageUrl: "/images/trainGif.gif",
      largeImageUrl: ["/images/trainChoo.png"],
      url: 'https://josephbadua.github.io/ChooChoo/'
    },
    {
      id: 6,
      title: "Joseph's BurgerSQL",
      subtitle: "Using MySQL and vanilla Javascript for ORM, the web application allows user to 'eat' a burger and add new burgers. Made to add new infromation the tables and transfer data from one to another.",
      imageUrl: "/images/burgerGif.gif",
      largeImageUrl: ["/images/burgerStuff.png"],
      url: 'https://josephs-burgersql.herokuapp.com/'
    },
    {
      id: 7,
      title: "Black Market SQL",
      subtitle: "Using MySQL and several node packages, users can use the node enviornment to access a store's inventory, purchase items as well as add new products.",
      imageUrl: "/images/bamazonGif.gif",
      largeImageUrl: ["/images/bamazon.png"],
      url: 'https://github.com/JosephBadua/MySQL-Store'
    },
    {
      id: 8,
      title: "Math-Game",
      subtitle: "Simple and stylistic multiple choice math game for young kids. Made with vanilla javascript and ran through express/node enviornment.",
      imageUrl: "/images/math.gif",
      largeImageUrl: ["/images/mathGamePicture.png"],
      url: 'https://math-game-joseph.herokuapp.com/'
    },
    {
      id: 9,
      title: "Psychic Game",
      subtitle: "Try to guess the random letter key chosen by the computer. 9 chances or you lose. Made using vanilla javascript.",
      imageUrl: "/images/psychicGif.gif",
      largeImageUrl: [
        "/images/psychic-picture.png",
      ],
      url: 'https://josephbadua.github.io/Psychic-Game/'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Web Developer",
        company: "Los Angeles, California",
        details: `
        Create multiple page applications per the client’s request, most notably a newsletter for a local hospital department, which saw MoM increase of user engagement by 80%.
        Made several contributions to open source projects from updating documentation to project issues.
        `
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2020",
        graduation: "Full Stack Development Certification",
        university: "University of California, Riverside",
        details: "A 24-week intensive program for Full Stack Development, focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS."
      },
    ]
  },
  contactInfo: {
    phoneNumbers: ['562-382-4416',],
    emailAddress: ['josephbadua1006@gmail.com'],
    address: "Los Angeles, California"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});