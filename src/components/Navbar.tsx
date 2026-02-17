import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#hero" className="font-mono text-sm font-bold tracking-widest text-foreground">
          ●
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-all duration-300 ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-border bg-background transition-all duration-300 md:hidden ${
          isOpen ? "max-h-64" : "max-h-0 border-none"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-xs tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
