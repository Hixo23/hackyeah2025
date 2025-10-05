import { Project } from "@/types/project";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  project: Project;
  onDetailsClick?: (project: Project) => void;
}

const ProjectCard = ({ project, onDetailsClick }: ProjectCardProps) => {
  const getStatusConfig = (status?: string) => {
    switch (status) {
      case "verification":
        return { label: "W trakcie weryfikacji", variant: "info" as const };
      case "approved":
        return { label: "Zatwierdzony", variant: "success" as const };
      case "completed":
        return { label: "Zakończone", variant: "warning" as const };
      default:
        return null;
    }
  };

  const statusConfig = project.status ? getStatusConfig(project.status) : null;

  return (
    <div className="bg-card border-2 border-primary/30 rounded-2xl p-4 mb-3">
      <h3 className="text-primary font-bold text-base mb-2">{project.title}</h3>
      
      {statusConfig && (
        <div className="mb-3">
          <span className="text-sm text-foreground mr-2">Status:</span>
          <Badge variant={statusConfig.variant}>{statusConfig.label}</Badge>
        </div>
      )}

      {project.reportAvailable && (
        <p className="text-sm text-foreground mb-3">Report dostępny!</p>
      )}

      <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
        <span className="font-semibold text-primary">Opis:</span> {project.description}
      </p>

      <Button
        variant="secondary"
        className="w-full"
        onClick={() => onDetailsClick?.(project)}
      >
        {project.status === "completed" && project.reportAvailable 
          ? "Poproś o raport" 
          : "Sprawdź szczegóły"}
      </Button>
    </div>
  );
};

export default ProjectCard;
