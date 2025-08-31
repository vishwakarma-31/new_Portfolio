import { Home, Code2, Award, GraduationCap, FolderOpen, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Code2, label: "Skills", path: "/skills" },
    { icon: Award, label: "Certificates", path: "/certificates" },
    { icon: GraduationCap, label: "Education", path: "/education" },
    { icon: FolderOpen, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-nav-bg/80 backdrop-blur-sm border border-nav-border rounded-full px-6 py-3">
        <div className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-smooth text-sm font-medium ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-nav-hover"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          ))}
          
          <div className="w-px h-6 bg-nav-border mx-2" />
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full p-2 hover:bg-nav-hover"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;