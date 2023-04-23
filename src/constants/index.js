import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,

	healthedge,
	imocha,
	non,

	obscure,
	cataloger,
  	weather,
	threejs,
  } from "../assets";
  
  export const navLinks = [
	{
	  id: "about",
	  title: "About",
	},
	{
	  id: "experience",
	  title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
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
	  title: "React Developer",
	  icon: mobile,
	},
	{
	  title: "Backend Developer (Node.Js)",
	  icon: backend,
	},
	{
	  title: "Competitive Programmer",
	  icon: creator,
	},
  ];
  
  const technologies = [
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
	  name: "TypeScript",
	  icon: typescript,
	},
	{
	  name: "React JS",
	  icon: reactjs,
	},
	// {
	//   name: "Redux Toolkit",
	//   icon: redux,
	// },
	{
	  name: "Tailwind CSS",
	  icon: tailwind,
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
	  name: "Three JS",
	  icon: threejs,
	},
	{
	  name: "git",
	  icon: git,
	},
	{
	  name: "figma",
	  icon: figma,
	},
	// {
	//   name: "docker",
	//   icon: docker,
	// },
  ];
  
  const experiences = [
	{
	  title: "TechOps Intern",
	  company_name: "HealthEdge, Pune",
	  icon: healthedge,
	  iconBg: "#fff",
	  date: "Feb 2023 - Present",
	  points: [
		"Collaborated with Infra team to manage Server and application services..",
		"Managed system server along with Azure cloud infrastructure using Windows Server 2019.",
		"Learned about RedHat System Administration, shell scripting and troubleshooting to manage application.",
		"Tech Used : Linux | RedHat System Administration | Windows Server 2019 | Java | Shell Scripting .",
	  ],
	},
	{
	  title: "Software Development Intern",
	  company_name: "Non (Now or Never), Remote",
	  icon: non,
	  iconBg: "#E6DEDD",
	  date: "Sept 2022 - Nov 2022",
	  points: [
		"Contributed in the team to build web application (Buylend) to buy, sell and rent products.",
		"Engineered APIs for adding organizations and categories, along with incorporating user authentication and authorization.",
		"Added a feature to filter the dashboard content according to user’s preferences.",
		"Solved multiple design and backend bugs.",
	  ],
	},
	{
	  title: "Problem Setter Intern",
	  company_name: "iMocha, Remote",
	  icon: imocha,
	  iconBg: "#fff",
	  date: "Nov 2022 - Jan 2023",
	  points: [
		"Created new problems on Data Structures and algorithms that iMocha uses for its library and Hiring Challenges of various companies like Capgemini, Ericson, etc.",
		"Developed many programming questions on variety of topics of DSA with various degrees of complexity."
	],
	},
	
  ];
  
  const projects = [
	{
	  name: "Obscure Gaming",
	  description:
		"Web-based platform that  offer a variety of games like fun, brain-teaser's, entertainment, etc. for the user to play in their free time.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
			name: "node",
			color: "magenta-text-gradient",
		},
		{
		  name: "mongodb",
		  color: "green-text-gradient",
		},
		{
		  name: "material-ui",
		  color: "pink-text-gradient",
		},
	  ],
	  image: obscure,
	  source_code_link: "https://github.com/Rohit-8/Obscure-Gaming-App",
	},
	{
	  name: "Cataloger",
	  description:
		"Web based note keeping application that enables users to keep their daily notes. Notes can be easily created, managed and deleted.",
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
	  image: cataloger,
	  source_code_link: "https://github.com/Rohit-8/Cataloger",
	},
	{
	  name: "Weather-Outlook",
	  description:
		"A comprehensive application to track weather forecasts in real-time. Temperature, description, humidity, etc. can be accessed based on the entered location. ",
	  tags: [
		{
		  name: "reactjs",
		  color: "blue-text-gradient",
		},
		{
		  name: "api",
		  color: "green-text-gradient",
		},
		{
		  name: "css",
		  color: "pink-text-gradient",
		},
	  ],
	  image: weather,
	  source_code_link: "https://github.com/Rohit-8/Weather-Outlook",
	},
  ];
  
  export { services, technologies, experiences, projects };