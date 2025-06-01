import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Twitter, Disc as Discord } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, hoverColor }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
      style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
    >
      <div className={`transition-colors duration-300 text-white hover:text-[${hoverColor}]`}>
        {icon}
      </div>
    </motion.a>
  );
};

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      href: "https://discord.gg/leares",
      icon: <Discord size={20} />,
      label: "Discord",
      hoverColor: "#5865F2"
    },
    {
      href: "https://www.instagram.com/lunechxy/",
      icon: <Instagram size={20} />,
      label: "Instagram",
      hoverColor: "#E1306C"
    },
  ];

  return (
    <div className="mt-6 flex justify-center gap-4">
      {socialLinks.map((link, index) => (
        <SocialLink key={index} {...link} />
      ))}
    </div>
  );
};

export default SocialLinks;