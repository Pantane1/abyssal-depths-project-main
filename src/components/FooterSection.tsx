const FooterSection = () => {
  return (
    <footer id="contact" className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="text-display text-primary text-lg">DEEP-6</span>
          <p className="text-mono text-xs text-muted-foreground mt-2">
            © 2087 PATHOS-III RESEARCH DIVISION. ALL SYSTEMS COMPROMISED.
          </p>
        </div>

        <div className="flex gap-6">
          {["STEAM", "DISCORD", "TWITTER", "YOUTUBE"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-label text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border">
        <p className="text-label text-muted-foreground/30 text-center">
          DEPTH: 6,102M &nbsp;|&nbsp; PRESSURE: 601 ATM &nbsp;|&nbsp; HULL INTEGRITY: 23% &nbsp;|&nbsp; TIME SINCE LAST CONTACT: 847 DAYS
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
