import { Home, Code2, Award, GraduationCap, FolderOpen, Mail, Sun, Moon } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Code2, label: "Skills", path: "/skills" },
    { icon: Award, label: "Certificates", path: "/certificates" },
    { icon: GraduationCap, label: "Education", path: "/education" },
    { icon: FolderOpen, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/70 dark:bg-black/40 backdrop-blur-lg border border-border rounded-full px-6 py-3 shadow-lg flex items-center gap-x-6 transition-all">
      {navItems.map(({ icon: Icon, label, path }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              isActive
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        );
      })}

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsDark(!isDark)}
        className="ml-4 rounded-full p-2 transition-colors duration-300 ease-in-out"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </nav>
  );
};

export default Navigation;
