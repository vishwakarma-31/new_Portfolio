import { Button } from "../components/ui/button";
import SparkleIcon from "./sparkleicon";
import CodeEditor from "./code-editor";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-10"
        >
          <div className="flex items-center gap-2 bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
            <SparkleIcon className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">Welcome to my universe</span>
            <SparkleIcon className="w-4 h-4" delay={1} />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
        >
          Hi, I’m <span className="text-primary">Aryan</span> 👋
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A passionate developer crafting modern, interactive, and visually stunning digital
          experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-16"
        >
          <Button size="lg">View Projects</Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </motion.div>

        {/* Code Editor Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="transform scale-95 shadow-2xl shadow-indigo-500/20 rounded-xl overflow-hidden"
        >
          <CodeEditor />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
