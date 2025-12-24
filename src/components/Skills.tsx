import { motion } from "framer-motion";
import { Smartphone, Database, Shield, Wrench } from "lucide-react";
import TiltedCard from "./ui/TiltedCard"; // import tvoje tilt kartice

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Navigation", "UI/UX Implementation"],
  },
  {
    title: "State & Data",
    icon: Database,
    skills: ["Redux Toolkit", "Zustand", "REST APIs", "Axios"],
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["JWT Authentication", "Secure Storage", "OTP Flows", "Token Management"],
  },
  {
    title: "Tooling",
    icon: Wrench,
    skills: ["Git", "CI Basics", "App Store Builds", "Play Store Builds"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/10">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Expertise</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Core competencies in mobile development, security, and modern tooling.
          </p>
        </motion.div>

        {/* Skills grid with TiltedCard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltedCard
                containerWidth="100%"
                containerHeight="280px"
                imageWidth="100%"
                imageHeight="100%"
                rotateAmplitude={10}
                scaleOnHover={1.05}
                showMobileWarning={false}
                overlayContent={
                  <div className="p-6 flex flex-col items-start justify-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">
                      {category.title}
                    </h3>
                    <ul className="space-y-1">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                }
                displayOverlayContent={true}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
