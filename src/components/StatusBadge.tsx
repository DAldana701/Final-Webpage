import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "on-track" | "at-risk" | "delayed" | "completed";
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const variants = {
    "on-track": "bg-success/10 text-success border-success/20",
    "at-risk": "bg-warning/10 text-warning border-warning/20",
    "delayed": "bg-destructive/10 text-destructive border-destructive/20",
    "completed": "bg-primary/10 text-primary border-primary/20",
  };

  const labels = {
    "on-track": "On Track",
    "at-risk": "At Risk",
    "delayed": "Delayed",
    "completed": "Completed",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
        variants[status],
        className
      )}
    >
      {labels[status]}
    </span>
  );
};
