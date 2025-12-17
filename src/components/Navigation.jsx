import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const isBrowser = typeof window !== "undefined";

/* 🔹 Desktop Links */
const DesktopLinks = ({ links }) => (
  <div className="hidden md:flex items-center space-x-8">
    {links.map((link) =>
      link.href.startsWith("#") ? (
        <a
          key={link.href}
          href={link.href}
          className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium relative group py-2"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      ) : (
        <Link
          key={link.href}
          to={link.href}
          className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium relative group py-2"
        >
          {link.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      )
    )}

    {/* Contact / Call Button for Desktop */}
    <a
      href="tel:9841040740"
      className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2.5 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/20"
    >
      <Phone className="w-4 h-4" />
      <span>9841040740</span>
    </a>
  </div>
);

/* 🔹 Mobile Links */
const MobileLinks = ({ links, closeMenu }) => (
  <div className="flex flex-col items-start space-y-4 mt-20 px-8">
    {links.map((link, index) =>
      link.href.startsWith("#") ? (
        <motion.a
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className="text-gray-300 hover:text-orange-500 text-lg font-medium transition-colors"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.06 }}
        >
          {link.label}
        </motion.a>
      ) : (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.06 }}
        >
          <Link
            to={link.href}
            onClick={closeMenu}
            className="text-gray-300 hover:text-orange-500 text-lg font-medium transition-colors"
          >
            {link.label}
          </Link>
        </motion.div>
      )
    )}

    {/* Contact / Call Button for Mobile Menu */}
    <motion.a
      href="tel:9841040740"
      className="flex items-center gap-2 mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 w-full justify-center"
      initial={{ opacity: 0, x: 5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.12, type: "spring", stiffness: 120, damping: 14 }}
      whileHover={{ scale: 1.03 }}
    >
      <Phone className="w-4 h-4" />
      <span className="text-sm">9841040740</span>
    </motion.a>
  </div>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll behavior only runs in Browser
  useEffect(() => {
    if (!isBrowser) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#clients", label: "Clients" },
    { href: "#contact", label: "Contact" },
    { href: "/services", label: "Services" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
          >
            MSJ TRADERS
          </Link>
          <DesktopLinks links={navLinks} />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"
          >
            MSJ TRADERS
          </Link>
          <motion.button
            onClick={() => setIsOpen(true)}
            className="text-gray-300 hover:text-orange-500 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={28} />
          </motion.button>
        </div>
      </motion.div>

      {/* Animated Slide Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-lg z-[55]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            ></motion.div>

            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border-l border-white/20 shadow-2xl z-[70]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                <motion.h2
                  className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Menu
                </motion.h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  <X size={28} />
                </motion.button>
              </div>

              <MobileLinks links={navLinks} closeMenu={() => setIsOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
