import Mock from "../mock";

const database = {
  information: {
    name: 'Joseph Badua',
    aboutContent: "I am a ",
    age: 24,
    phone: '562-382-4416',
    nationality: 'American',
    language: 'English',
    email: '',
    address: 'Los Angeles, CA',
    freelanceStatus: 'Available',
    socialLinks: {
      linkedin: '',
      github: 'https://github.com'
    },
    brandImage: '/images/brand-image.jpg',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Photoshop",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2018 - Present",
        position: "Frontend Web Developer",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        position: "Frontend Web Developer",
        company: "CBA Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "UI/UX Designer",
        company: "Example Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2018 - 2019",
        graduation: "Master of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Bachelor of Science",
        university: "Abc University",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2016",
        graduation: "Higher Schoold Graduation",
        university: "Abc College",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
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