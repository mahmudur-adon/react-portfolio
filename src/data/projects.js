export const ProjectData = [
  {
    id: 1,
    title: "React JS Ecommerce Web App",
    about:
      "This ecommerce webapp is made with React JS.I have used react router dom for routing through different routes as like signin or user profile etc and also used Redux as state containers. The authentication is done with Firebase and Stripe API handles the payment method.",
    tags: ["ReactJs", "Redux", "Firebase", "Stripe"],
    demo: "https://react-ecommerce-mahmud.herokuapp.com/",
    github: "https://github.com/mahmudur-adon/react-ecommerce",
    image: require("../assets/image/react-ecom.png").default,
  },

  {
    id: 1,
    title: "Covid-19 Tracker App",
    about:
      "A web application that shows live cases, recoveries, deaths by COVID-19.I have used ReactJs for the frontend of this application. I used disease.sh API for daily updated data.",
    tags: ["ReactJs", "Healthcare"],
    demo: "https://mahmudur-adon.github.io/covid19-tracker-react/",
    github: "https://github.com/mahmudur-adon/covid19-tracker-react",
    image: require("../assets/image/covid19.png").default,
  },
  {
    id: 2,
    title: "Resume Generator",
    about:
      "A complete resume generator with different templates where user can fill up the form and it generates their resume in pdf format. I used PHP, JS, HTML,CSS to make this project.",
    tags: ["ReactJs", "Healthcare"],
    //demo: "https://mahmudur-adon.github.io/covid19-tracker-react/",
    github: "https://github.com/mahmudur-adon/cv-generator",
    image: require("../assets/image/cv builder.png").default,
  },
];
