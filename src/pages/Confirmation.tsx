import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 max-w-md mx-auto">
        <div className="bg-card border-2 border-primary rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            {project?.title || "Projekt"}
          </h2>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 border-4 border-success rounded-2xl flex items-center justify-center">
              <Check className="w-16 h-16 text-success" strokeWidth={3} />
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="font-bold text-lg text-foreground mb-2">
              Zgłoszenie wysłane!
            </p>
            <p className="text-foreground">
              Organizacja wkrótce skontaktuje się z Tobą.
            </p>
          </div>

          <div className="space-y-3">
            <Button className="w-full" onClick={() => navigate("/my-projects")}>
              Przejdź do moich projektów
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => navigate("/search")}
            >
              Wróć do wyszukiwania
            </Button>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Confirmation;
