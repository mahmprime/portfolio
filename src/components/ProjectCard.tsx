import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import BrowserMockup from "./BrowserMockup";
import WebsitePreviewModal from "./WebsitePreviewModal";
import { ReactNode, useState, useEffect } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  uxFocus?: string[];
  mockupContent: ReactNode;
  fullPageContent: ReactNode;
  url: string;
  index: number;
  isMain?: boolean;
}

const ProjectCard = ({
  title,
  description,
  features,
  techStack,
  uxFocus,
  mockupContent,
  fullPageContent,
  url,
  index,
  isMain = false,
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Provjera screen width za mobile behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`glass-card p-8 md:p-10 ${isMain ? "glow-effect" : ""}`}
      >
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-center`}>
          {/* Browser mockup */}
          {!isMobile && (
            <div className="flex-shrink-0">
              <BrowserMockup url={url} onClick={() => setIsModalOpen(true)}>
                {mockupContent}
              </BrowserMockup>
            </div>
          )}

          {/* Content */}
          <div className="flex-1 space-y-6">
            {isMain && (
              <span className="badge text-primary border-primary/30">
                Featured Project
              </span>
            )}
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold">{title}</h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>

            {/* Features */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span key={i} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* UX Focus */}
            {uxFocus && (
              <div>
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  UX Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {uxFocus.map((focus, i) => (
                    <span key={i} className="text-sm text-primary/80">
                      {focus}{i < uxFocus.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            {!isMobile && (
              <div className="flex gap-3 pt-2">
                <Button variant="hero" size="default" onClick={() => setIsModalOpen(true)}>
                  View Preview
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            )}

            {isMobile && (
              <p className="text-sm text-muted-foreground pt-2">
                Preview not available on mobile
              </p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Full page preview modal */}
      {!isMobile && (
        <WebsitePreviewModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={url}
        >
          {fullPageContent}
        </WebsitePreviewModal>
      )}
    </>
  );
};

export default ProjectCard;
