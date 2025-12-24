import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface BrowserMockupProps {
  children: ReactNode;
  url?: string;
  className?: string;
  onClick?: () => void;
}

const BrowserMockup = ({ children, url = "example.com", className = "", onClick }: BrowserMockupProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Browser frame */}
      <div className="relative w-[420px] h-[280px] bg-secondary rounded-xl shadow-2xl border border-border/50 overflow-hidden">
        {/* Browser toolbar */}
        <div className="h-10 bg-muted/80 border-b border-border/50 flex items-center px-4 gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          
          {/* URL bar */}
          <div className="flex-1 h-6 bg-background/60 rounded-md flex items-center px-3">
            <span className="text-xs text-muted-foreground truncate">{url}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="h-[240px] overflow-hidden">
          {children}
        </div>

        {/* Hover overlay */}
        <motion.div 
          className="absolute inset-0 bg-primary/10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium shadow-lg">
            Click to Preview
          </span>
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl -z-10" />
    </motion.div>
  );
};

export default BrowserMockup;
