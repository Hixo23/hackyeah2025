import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation, useNavigate } from "react-router-dom";

const DependentProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;
  
  const [skills, setSkills] = useState(["Gotowanie", "Malowanie ścian"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleFinish = () => {
    navigate("/parent-confirmation", { state: { project } });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-4">
          Profil Twojego podopiecznego
        </h1>

        <p className="text-foreground mb-2">
          Powiedz nam coś o swoim podopiecznym, byśmy mogli podpowiadać najlepiej dopasowane oferty wolontariatu.
        </p>
        <p className="text-foreground mb-6">
          Będziesz mógł potem edytować jego/jej profil.
        </p>

        <div className="mb-6">
          <Label htmlFor="skills" className="text-primary mb-2 block">
            Dodaj umiejętności
          </Label>
          <Input
            id="skills"
            placeholder="Zacznij wpisywać, np: gotowanie"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            onBlur={handleAddSkill}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-card border border-primary rounded-full px-4 py-2 flex items-center gap-2"
            >
              <span className="text-primary">{skill}</span>
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="text-primary hover:text-primary/70"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <Button className="w-full" onClick={handleFinish}>
          Zakończ
        </Button>
      </div>
    </div>
  );
};

export default DependentProfile;
