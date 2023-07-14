import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    //techno,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    
    threejs,
  } from "../assets";
  import techno from "../assets/techno.png";
  import sts from "../assets/sts.png";
  import sastra from "../assets/sastra.png";
  import clg from "../assets/clg.jpeg";
  import school from "../assets/school.png";
  import python from "../assets/python.png";
  import java from "../assets/java.png";
  import c from "../assets/c++.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Programmer",
      icon: mobile,
    },
    
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    
    {
      name: "java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
   
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Sastra University",
      type_name: "College",
      icon: sastra,
      iconBg: "#383E56",
      date: "2020 - 2024",
      points: [
        "CGPA: 8.28 [As of 6th semester]",
        
      ],
    },
    {
      title: "Sri Gayatri Junior College",
      type_name: "Class X-XII",
      icon: clg,
      iconBg: "#E6DEDD",
      date: "2018 -2020",
      points: [
        "Percentage: 97.6% ",
      ],
    },
    {
      title: "Bhashyam",
      type_name: "School Class X",
      icon: school,
      iconBg: "#383E56",
      date: "2018",
      points: [
        "Percentage: 98%",
        
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Entertainment and Management Cluster of SASTRA-University",
      name: "Techno-Informals",
      designation: "Head",
      company: "the team",
      image:techno,
    },
    {
      testimonial:
        "Member of Tamil Literature and Cultural club of SASTRA-University",
      name: "Sastra Tamizh Sangam",
      designation: "Member",
      company: "Couple of clusters",
      image: sts,
    },

  ];
  
  const projects = [
    {
      name: "MERN STACK Blog Website",
      description:
        "Web-based Blog that allows users to search, update, and delelte Blog contents from various Dates, providing a convenient and efficient way for Writing own blog contents.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ARKannan-15",
    },
    {
      name: "Cloud Based E-commerce Website",
      description:
        "E-commerce website thats deployed in cloud was deployed as a part of Computer Networks Project based on Application Layer and Session Layer.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "laravel",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ARKannan-15/Cn-Ecommerce.git",
    },
    {
      name: "Movie Recommendation [Sentiment Analysis]",
      description:
        "A Movie Recommendation System that analyzes twitter tweets does sentiment analysis and provides movie rating based on it.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Neural Networks",
          color: "green-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/ARKannan-15/Sentiment_MovieRecommendation.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };