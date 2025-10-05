import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import { mockRecommendations } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const Recommendations = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Wróć
          </Button>
          <h1 className="text-2xl font-bold text-primary">Rekomendacje</h1>
        </div>

        <div className="space-y-4">
          {mockRecommendations.map((rec) => (
            <div key={rec.id} className="bg-card border border-border rounded-2xl p-4">
              <p className="font-bold text-primary mb-2">Od: {rec.from}</p>
              <p className="text-sm text-foreground">{rec.text}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Recommendations;
