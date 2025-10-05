import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { mockProjects } from "@/data/mockData";

const ParentConsent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const projectId = searchParams.get("projectId");
  const project = mockProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background p-6">
        <p className="text-center text-foreground">Nie znaleziono projektu</p>
      </div>
    );
  }

  const handleApprove = () => {
    navigate("/dependent-form", { state: { project } });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card border-2 border-primary rounded-2xl m-4 p-6">
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-6">
          {project.title}
        </h2>

        <div className="space-y-4 mb-6">
          <div>
            <span className="font-bold text-primary">Organizator:</span>{" "}
            <span className="text-foreground">{project.organizer}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Adres:</span>{" "}
            <span className="text-foreground">{project.address}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Wiek wolontariusza:</span>{" "}
            <span className="text-foreground">{project.ageRange}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Wymagania:</span>{" "}
            <span className="text-foreground">{project.requirements}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Okres trwania projektu:</span>{" "}
            <span className="text-foreground">{project.duration}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Ilość godzin w tygodniu:</span>{" "}
            <span className="text-foreground">{project.hoursPerWeek}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Ograniczenia czasowe:</span>{" "}
            <span className="text-foreground">{project.accommodation}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Nocleg:</span>{" "}
            <span className="text-foreground">{project.food}</span>
          </div>

          <div>
            <span className="font-bold text-primary">Wyżywienie:</span>{" "}
            <span className="text-foreground">ciepły posiłek</span>
          </div>

          <div>
            <span className="font-bold text-primary">Opis:</span>{" "}
            <span className="text-foreground">{project.description}</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full" onClick={handleApprove}>
            Wyślij zgłoszenie
          </Button>
          <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
            Zaproś do udziału znajomego
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParentConsent;
