import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, MoonStar, SunMedium, X } from "lucide-react";
import { navigation, site } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useThemeMode } from "../hooks/useThemeMode";
import Sarthak from "../assets/Sarthak.jpeg";

const MotionHeader = motion.header;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const { isDark, toggleTheme } = useThemeMode();
  const activeId = useActiveSection(navigation.map((item) => item.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setIsCompact(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [activeId]);

  return (
    <MotionHeader
      className={`site-nav ${isCompact ? "site-nav--compact" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="site-nav__inner">
        <a href="#home" className="site-brand" aria-label={`${site.name} home`}>
          <span className="site-brand__mark">
            <img src={Sarthak} alt="My-Image" />
          </span>
          <span>
            <strong>{site.name}</strong>
            <small>Signal-grade portfolio</small>
          </span>
        </a>

        <div className="site-nav__actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="site-nav__drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="site-nav__drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </MotionHeader>
  );
}
