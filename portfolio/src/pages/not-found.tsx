import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/navigation";
import { Button } from "../components/ui/button";
import SparkleIcon from "../components/sparkleicon";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <SparkleIcon className="w-8 h-8 mr-4" />
            <h1 className="text-6xl md:text-8xl font-bold gradient-text">404</h1>
            <SparkleIcon className="w-8 h-8 ml-4" delay={0.5} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Oops! Page not found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, 
            or you entered the wrong URL.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
