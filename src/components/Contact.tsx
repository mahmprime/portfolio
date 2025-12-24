import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "maksimkrulj@gmail.com",
    href: "mailto:maksimkrulj@gmail.com",
    icon: Mail,
  },
 
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="badge mb-4">Contact</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Interested in working together? Reach out through any of these channels.
            </p>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors duration-300">
                      {link.value}
                    </p>
                  </div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                    →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
