import { Card, CardContent } from "../Components/Ui/Card.jsx";
import { User, Code, Briefcase } from "lucide-react";

export default function About() {
  const skills = [
    { name: "HTML", icon: "🟧", color: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20" },
    { name: "CSS", icon: "🔵", color: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20" },
    { name: "JavaScript", icon: "🟡", color: "from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20" },
    { name: "React", icon: "⚛️", color: "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20" },
  ];

  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <Card className="bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-700/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <User className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                  My Story
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate frontend developer with a keen eye for design and user experience. My journey in web development started with curiosity about how websites work, and it has evolved into a deep passion for creating beautiful, functional, and accessible web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest web technologies. When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or learning about emerging web technologies.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-700/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Code className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                  Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-4 bg-gradient-to-br ${skill.color} rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Internship Section */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Card className="bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-700/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Briefcase className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
                Experience
              </h3>
              <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6">
                <div className="relative">
                  <div className="absolute -left-8 top-0 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">ReactJS Developer Intern</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">RAPID DATA LABS</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developed responsive web applications using React.js, collaborated with cross-functional teams, 
                    and gained hands-on experience in modern web development practices and agile methodologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}