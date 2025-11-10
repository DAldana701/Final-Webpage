import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number;
  className?: string;
  variant?: "primary" | "success" | "warning" | "destructive";
}

export const ProgressBar = ({ 
  progress, 
  className,
  variant = "primary" 
}: ProgressBarProps) => {
  const variants = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    destructive: "bg-destructive",
  };

  return (
    <div className={cn("w-full bg-secondary rounded-full h-2.5", className)}>
      <div
        className={cn("h-2.5 rounded-full transition-all duration-500", variants[variant])}
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  );
};
