import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import FinanceWebMockup from "./mockups/FinanceWebMockup";
import AuthWebMockup from "./mockups/AuthWebMockup";
import DashboardWebMockup from "./mockups/DashboardWebMockup";
import DataTableWebMockup from "./mockups/DataTableWebMockup";

const projects = [
  {
    title: "Fintech Dashboard Platform",
    description:
      "A comprehensive financial management platform for tracking spending, investments, and wealth growth.",
    features: [
      "Real-time balance tracking",
      "Transaction management",
      "Investment portfolio",
      "Budget analytics",
      "Responsive design",
      "Dark/Light themes",
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "REST API", "Recharts"],
    uxFocus: ["Clean financial UI", "Data visualization", "Intuitive navigation"],
    mockupContent: <FinanceWebMockup />,
    fullPageContent: <FinanceWebMockup fullPage />,
    url: "https://financehub.demo.dev",
    isMain: true,
  },
  {
    title: "Enterprise Authentication Portal",
    description:
      "A secure authentication system with multi-factor verification and passwordless login options.",
    features: [
      "Email/Password login",
      "Social OAuth providers",
      "Two-factor authentication",
      "Password recovery",
      "Session management",
    ],
    techStack: ["React", "TypeScript", "OAuth 2.0", "JWT", "Secure Forms"],
    uxFocus: ["Speed", "Security-first design", "Accessibility"],
    mockupContent: <AuthWebMockup />,
    fullPageContent: <AuthWebMockup fullPage />,
    url: "https://secureauth.demo.dev",
  },
  {
    title: "Admin Dashboard System",
    description:
      "A powerful admin interface for managing users, analytics, and business operations at scale.",
    features: [
      "Real-time analytics",
      "User management",
      "Order tracking",
      "Revenue reports",
      "Role-based access",
    ],
    techStack: ["React", "TypeScript", "TailwindCSS", "React Query", "Charts"],
    uxFocus: ["Data clarity", "Efficient workflows", "Responsive layouts"],
    mockupContent: <DashboardWebMockup />,
    fullPageContent: <DashboardWebMockup fullPage />,
    url: "https://adminpro.demo.dev",
  },
  {
    title: "Data Table Component System",
    description:
      "A high-performance data table solution with sorting, filtering, and pagination capabilities.",
    features: [
      "Virtual scrolling",
      "Column sorting",
      "Advanced filtering",
      "Bulk actions",
      "Export functionality",
    ],
    techStack: ["React", "TypeScript", "TanStack Table", "Performance Optimization"],
    mockupContent: <DataTableWebMockup />,
    fullPageContent: <DataTableWebMockup fullPage />,
    url: "https://datatable.demo.dev",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Portfolio</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Production-ready web applications built with React, focusing on fintech, security, and exceptional user experience.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              isMain={project.isMain}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
