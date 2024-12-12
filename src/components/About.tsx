import { motion } from 'framer-motion';
import {  
  CodeIcon,  
  Component,  
  UserCheckIcon,
  Wrench, 
} from 'lucide-react';

export default function About() {
  const skillCategories = [
    {
      name: 'Design Tools',
      skills: [
        'Adobe Creative Suite',
        'Sketch',
        'Figma',
        'InVision',
        'Adobe XD',
        'Marvel',
        'UXPin',
        'Proto.io'
      ],
      icon: <Component className="w-10 h-10 text-indigo-600 mb-4" />
    },
    {
      name: 'Technical Skills',
      skills: [
        'HTML/CSS',
        'JavaScript',
      ],
      icon: <CodeIcon className="w-10 h-10 text-indigo-600 mb-4" />
    },
    {
      name: 'Research Methods',
      skills: [
        'Surveys',
        'Interviews',
        'Usability Testing'
      ],
      icon: <Wrench className="w-10 h-10 text-indigo-600 mb-4" />
    },
    {
      name: 'Soft Skills',
      skills: [
        'Communication',
        'Team Leadership',
        'Problem-Solving',
        'Attention to Detail'
      ],
      icon: <UserCheckIcon className="w-10 h-10 text-indigo-600 mb-4" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-gray-50 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-extrabold text-indigo-900 mb-8 text-center">
            About Me
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto text-center leading-relaxed">
            Innovative and detail-oriented Senior UI/UX Designer with over 5 years of experience in creating user-centered designs that enhance user experience and engagement. Expertise in designing web and mobile applications, CRM systems, RFPs, and customized client solutions. Proven track record of leading design projects from concept to completion, ensuring high-quality deliverables that meet business objectives and user needs.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.name}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                {category.icon}
                <h3 className="text-xl font-bold text-indigo-800 mb-4">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <p 
                      key={skill} 
                      className="text-gray-600 text-sm"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}