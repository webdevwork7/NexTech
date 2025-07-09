
const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", color: "text-blue-400" },
      { name: "Next.js", color: "text-white" },
      { name: "Vue.js", color: "text-green-400" },
      { name: "TypeScript", color: "text-blue-500" },
      { name: "Tailwind CSS", color: "text-cyan-400" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", color: "text-green-500" },
      { name: "Python", color: "text-yellow-400" },
      { name: "Java", color: "text-orange-500" },
      { name: "PHP", color: "text-purple-500" },
      { name: "C#", color: "text-purple-600" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", color: "text-orange-400" },
      { name: "Azure", color: "text-blue-500" },
      { name: "Docker", color: "text-blue-400" },
      { name: "Kubernetes", color: "text-blue-600" },
      { name: "Firebase", color: "text-yellow-500" }
    ]
  },
  {
    category: "Design & Tools",
    technologies: [
      { name: "Figma", color: "text-purple-400" },
      { name: "Adobe XD", color: "text-pink-500" },
      { name: "Git", color: "text-orange-500" },
      { name: "Jira", color: "text-blue-600" },
      { name: "Slack", color: "text-purple-500" }
    ]
  }
];

export const TechStackSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-card/20 to-background">
      <div className="container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies and tools to build robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, stackIndex) => (
            <div 
              key={stack.category}
              className="animate-slide-up"
              style={{ animationDelay: `${stackIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                {stack.category}
              </h3>
              <div className="space-y-3">
                {stack.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className="glass-effect border-white/10 rounded-lg p-3 text-center hover:border-primary/50 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${stackIndex * 0.1 + techIndex * 0.05}s` }}
                  >
                    <span className={`font-medium ${tech.color}`}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
