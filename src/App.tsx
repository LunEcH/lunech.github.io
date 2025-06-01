import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './components/ProfileCard';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <AnimatedBackground />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <ProfileCard />
        </motion.div>
      </div>
    </div>
  );
}

export default App;