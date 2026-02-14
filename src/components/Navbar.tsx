import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, LogIn, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Developers", href: "#developers" },
  { label: "Learn", href: "#learn" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="w-full max-w-[1440px] h-16 lg:h-20 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex items-center justify-between px-4 sm:px-8 relative overflow-hidden">
        {/* Glass highlight glare */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary to-accent shadow-md group-hover:shadow-primary/20 transition-all duration-300">
            <span className="font-heading font-bold text-primary-foreground text-lg">R</span>
          </div>
          <span className="font-heading font-semibold text-lg text-primary tracking-tight uppercase hidden sm:inline-block">
            rivinity
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer text-muted-foreground hover:text-foreground">
            <Sun size={19} />
          </div>

          <a href="#login" className="flex items-center gap-2 bg-foreground text-background px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md active:scale-95 group">
            Login
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2 rounded-full hover:bg-white/5 transition-all"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 lg:hidden bg-card/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-50 p-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground py-2 border-b border-white/5 last:border-0 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5">
                  <span className="text-sm text-muted-foreground">Dark Mode</span>
                  <div className="p-2 rounded-full bg-white/5">
                    <Sun size={20} />
                  </div>
                </div>
                <a href="#login" className="btn-primary !py-3.5 text-base text-center mt-2 flex justify-center gap-2">
                  Login
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;
