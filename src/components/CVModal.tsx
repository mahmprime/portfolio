import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Language = "en" | "sr" | null;

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(null);

  const handleClose = () => {
    setSelectedLanguage(null);
    onClose();
  };

  const handleBack = () => {
    setSelectedLanguage(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          />

          {/* Modal Wrapper - centriranje */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-heading font-semibold">
                    {selectedLanguage
                      ? selectedLanguage === "en"
                        ? "CV - English"
                        : "CV - Srpski"
                      : "View CV"}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  {selectedLanguage && (
                    <Button variant="ghost" size="sm" onClick={handleBack}>
                      <Globe className="w-4 h-4 mr-2" />
                      Change Language
                    </Button>
                  )}
                  <button
                    onClick={handleClose}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto flex-1">
                <AnimatePresence mode="wait">
                  {!selectedLanguage ? (
                    <motion.div
                      key="language-select"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="grid md:grid-cols-2 gap-4"
                    >
                      <button
                        onClick={() => setSelectedLanguage("en")}
                        className="group p-8 rounded-xl border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="text-4xl mb-4">🇬🇧</div>
                        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                          English
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          View CV in English
                        </p>
                      </button>

                      <button
                        onClick={() => setSelectedLanguage("sr")}
                        className="group p-8 rounded-xl border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="text-4xl mb-4">🇷🇸</div>
                        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                          Srpski
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Pogledaj CV na srpskom
                        </p>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="cv-view"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex flex-col"
                    >
                      {/* CV Content */}
                      <div className="bg-white text-gray-900 rounded-xl p-8 max-h-[60vh] overflow-y-auto">
                        <CVContent language={selectedLanguage} />
                      </div>

                      {/* Download Button */}
                      <div className="mt-6 flex justify-center">
                        <Button variant="hero" size="lg">
                          <Download className="w-4 h-4 mr-2" />
                          {selectedLanguage === "en"
                            ? "Download PDF"
                            : "Preuzmi PDF"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
const CVContent = ({ language }: { language: Language }) => {
  if (language === "en") {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-gray-900">Maksim Krulj</h1>
          <p className="text-lg text-primary mt-1">Frontend React Developer</p>
          <p className="text-sm text-gray-600 mt-2">Banja Luka, Bosnia and Herzegovina</p>
          <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600">
            <span>maksim@email.com</span>
            <span>•</span>
            <span>github.com/maksim</span>
            <span>•</span>
            <span>linkedin.com/in/maksim</span>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            React Developer with strong experience building modern, responsive, and user-focused web applications. 
            Specialized in React and modern frontend tools, focusing on clean UI, smooth interactions, and scalable 
            component architecture. Also proficient with Python and FastAPI for full-stack solutions.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Frontend</h3>
              <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS, Framer Motion, Next.js</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Backend</h3>
              <p className="text-sm text-gray-600">Python, FastAPI, REST APIs, PostgreSQL</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Tools</h3>
              <p className="text-sm text-gray-600">Git, VS Code, Figma, Docker</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Other</h3>
              <p className="text-sm text-gray-600">Responsive Design, REST APIs, Agile/Scrum</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
            Experience
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800">Frontend Developer</h3>
                <span className="text-sm text-gray-500">2022 - Present</span>
              </div>
              <p className="text-sm text-primary">Freelance / Personal Projects</p>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Built responsive web applications using React and TypeScript</li>
                <li>Developed fintech-style dashboards and data visualization tools</li>
                <li>Integrated REST APIs and implemented authentication flows</li>
                <li>Optimized performance and improved user experience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
            Education
          </h2>
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800">Computer Science</h3>
              <span className="text-sm text-gray-500">2022 - Present</span>
            </div>
            <p className="text-sm text-gray-600">University of Banja Luka</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">Maksim Krulj</h1>
        <p className="text-lg text-primary mt-1">Frontend React Developer</p>
        <p className="text-sm text-gray-600 mt-2">Banja Luka, Bosna i Hercegovina</p>
        <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600">
          <span>maksim@email.com</span>
          <span>•</span>
          <span>github.com/maksim</span>
          <span>•</span>
          <span>linkedin.com/in/maksim</span>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Profesionalni Rezime
        </h2>
        <p className="text-gray-700 leading-relaxed">
          React Developer sa jakim iskustvom u izradi modernih, responzivnih i korisničko-orijentisanih web aplikacija. 
          Specijalizovan za React i moderne frontend alate, sa fokusom na čist UI, glatke interakcije i skalabilnu 
          arhitekturu komponenata. Takođe iskusan sa Python i FastAPI za full-stack rješenja.
        </p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Tehničke Vještine
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Frontend</h3>
            <p className="text-sm text-gray-600">React, TypeScript, Tailwind CSS, Framer Motion, Next.js</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Backend</h3>
            <p className="text-sm text-gray-600">Python, FastAPI, REST APIs, PostgreSQL</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Alati</h3>
            <p className="text-sm text-gray-600">Git, VS Code, Figma, Docker</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-2">Ostalo</h3>
            <p className="text-sm text-gray-600">Responzivan Dizajn, REST APIs, Agile/Scrum</p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Iskustvo
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-800">Frontend Developer</h3>
              <span className="text-sm text-gray-500">2022 - Danas</span>
            </div>
            <p className="text-sm text-primary">Freelance / Lični Projekti</p>
            <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>Izrada responzivnih web aplikacija koristeći React i TypeScript</li>
              <li>Razvoj fintech-style dashboard-a i alata za vizualizaciju podataka</li>
              <li>Integracija REST API-ja i implementacija autentifikacionih tokova</li>
              <li>Optimizacija performansi i poboljšanje korisničkog iskustva</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Obrazovanje
        </h2>
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-800">Računarstvo</h3>
            <span className="text-sm text-gray-500">2022 - Danas</span>
          </div>
          <p className="text-sm text-gray-600">Univerzitet u Banjoj Luci</p>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
