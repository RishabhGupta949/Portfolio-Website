import { Link } from "wouter";
import { Button } from "../Components/Ui/Button.jsx";
import { Card, CardContent } from "../Components/Ui/Card.jsx";
import { Badge } from "../components/ui/badge.jsx";
import { Code, Mail, Star, Users, Coffee, ArrowRight, Github, Linkedin , Clock} from "lucide-react";

export default function Home() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "10+" },
    // { icon: Users, label: "Happy Clients", value: "25+" },
    {icon: Clock, label: "Hours Coded", value: "4000+"},
    { icon: Star, label: "Years Experience", value: "5+" },
    { icon: Coffee, label: "Coffee Consumed", value: "1000+" },
  ];

  const skills = [
    "React", "JavaScript", "TypeScript", "Tailwind CSS", "Node.js", "HTML5", "CSS3", "Git","ExpressJS","MongoDB"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100/20 to-transparent dark:via-primary-900/20"></div>
          </div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 dark:bg-primary-800 rounded-full opacity-20 animate-bounce text-white p-4 hidden lg:block" style={{animationDuration: '2s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 dark:bg-yellow-600 rotate-45 opacity-20 animate-bounce text-white p-4 hidden lg:block" style={{ animationDelay: "1s" , animationDuration: "2s"}}></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-green-400 dark:bg-green-600 rounded-full opacity-20 animate-bounce text-white p-4 hidden lg:block" style={{ animationDelay: "2s", animationDuration: "2s" }}></div>
        <div className="absolute bottom-40 right-16 w-14 h-14 bg-purple-400 dark:bg-purple-600 rotate-12 opacity-20 animate-bounce text-white p-4 hidden lg:block" style={{ animationDelay: "0.5s" , animationDuration: "2s"}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-slide-up">
            {/* Professional Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Available for Freelance Work
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="block">Creative</span>
              <span className="text-gradient block">Frontend Developer</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
              Hi, I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Rishabh Gupta</span> — a passionate frontend developer who crafts
            </p>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              beautiful, user-friendly, and responsive web experiences.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/projects">
                <Button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg">
                  <Code className="mr-3 h-5 w-5" />
                  View My Work
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="px-10 py-5 border-2 border-black-600 text-black-600 dark:text-white-400 dark:border-white-400 hover:bg-white-600 hover:text-blue-500 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-lg backdrop-blur-sm"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Get In Touch
                </Button>
              </Link>
            </div>

            {/* Quick Skills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-gray-200 dark:border-slate-600 hover:scale-125 hover:cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label} 
                  className="text-center bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Bringing Ideas to Life Through Code
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With over 3 years of experience in frontend development, I specialize in creating modern, 
                responsive web applications that not only look great but also provide exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                From concept to deployment, I work closely with clients to understand their vision and 
                transform it into pixel-perfect, high-performance websites that drive results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Learn More About Me
                  </Button>
                </Link>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gray-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors duration-300">
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-lg transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Offer</h3>
                  <ul className="space-y-4">
                    {[
                      "Custom Website Development",
                      "Responsive Design & Mobile Optimization",
                      "React & JavaScript Applications",
                      "UI/UX Implementation",
                      "Performance Optimization",
                      "SEO-Friendly Code"
                    ].map((service, index) => (
                      <li key={service} className="flex items-center text-gray-700 dark:text-gray-300">
                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}