import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, PenTool, Layout } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}

const ProjectLinks: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Leares",
      description: "Leares Discord Server",
      link: "https://lunech.github.io/leares_01/",
      icon: <Layout size={18} />
    },
    {
      title: "Leares Manga",
      description: "Coming Soon",
      link: "",
      icon: <PenTool size={18} />
    },
  ];

  return (
    <div className="mt-6 w-full">
      <h2 className="mb-3 text-center text-lg font-medium text-white/90">Projects</h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg bg-white/10 p-3 text-white transition-all duration-300 hover:bg-white/15"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                {project.icon}
              </div>
              <div>
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-white/70">{project.description}</p>
              </div>
            </div>
            <ExternalLink size={16} className="text-white/50" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectLinks;