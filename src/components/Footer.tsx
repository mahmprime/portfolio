const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-heading font-bold text-gradient">MK</span>
            <span className="text-sm text-muted-foreground">Developer Portfolio</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
