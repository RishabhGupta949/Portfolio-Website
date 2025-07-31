import { Card, CardContent } from "../Components/Ui/Card.jsx";
import { Badge } from "../components/ui/badge.jsx";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A responsive dashboard built with React and Chart.js featuring real-time data visualization and interactive components.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Chart.js", "Tailwind"],
      demoUrl: "#",
    },
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce website with product catalog, shopping cart, and checkout functionality built with React and Redux.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Redux", "JavaScript"],
      demoUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with drag-and-drop functionality and real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "DnD Kit", "CSS3"],
      demoUrl: "#",
    },
    {
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and responsive design.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["JavaScript", "API", "CSS3"],
      demoUrl: "#",
    },
    {
      title: "Restaurant Website",
      description: "An elegant restaurant website featuring menu showcase, online reservations, and location information.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and experience with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      technologies: ["React", "Tailwind", "Framer Motion"],
      demoUrl: "#",
    },
  ];

  const techColors = {
    "React": "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    "Chart.js": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    "Tailwind": "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
    "Redux": "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
    "JavaScript": "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
    "DnD Kit": "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
    "CSS3": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
    "API": "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    "HTML5": "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
    "Framer Motion": "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300",
  };

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for frontend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-700/20 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-sm ${techColors[tech] || 'bg-gray-100 dark:bg-gray-800'}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.demoUrl}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-300"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}