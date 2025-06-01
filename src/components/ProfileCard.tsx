import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import ProjectLinks from './ProjectLinks';

const ProfileCard: React.FC = () => {
  return (
    <motion.div
      className="w-full max-w-md overflow-hidden rounded-2xl bg-black/40 p-6 backdrop-blur-md md:p-8"
      style={{ 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)', 
        border: '1px solid rgba(255, 255, 255, 0.1)' 
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <motion.div
          className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/20"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="../images/2d9fbf2d18b55bf7b86e83f97ad0381e.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Username */}
        <motion.h1 
          className="mt-4 text-center text-3xl font-bold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          lunech
        </motion.h1>

        {/* Bio/Tagline */}
        <motion.p 
          className="mt-2 text-center text-sm text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          junior web developer
        </motion.p>

        {/* Discord Link */}
        <motion.div
          className="mt-3 rounded-full bg-white/10 px-4 py-1 text-sm text-white/80"
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          discord.gg/leares
        </motion.div>

        {/* Social Links */}
        <SocialLinks />

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Projects */}
        <ProjectLinks />
      </div>
    </motion.div>
  );
};

export default ProfileCard;