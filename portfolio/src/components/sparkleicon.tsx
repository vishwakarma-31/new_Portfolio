import { Sparkles } from "lucide-react";

interface SparkleIconProps {
  className?: string;
  delay?: number;
}

const SparkleIcon = ({ className = "", delay = 0 }: SparkleIconProps) => {
  return (
    <Sparkles 
      className={`text-primary ${className} sparkle`}
      style={{ animationDelay: `${delay}s` }}
    />
  );
};

export default SparkleIcon;