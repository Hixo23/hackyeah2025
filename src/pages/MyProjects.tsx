import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import ProjectCard from "@/components/ProjectCard";
import { mockProjects } from "@/data/mockData";

const MyProjects = () => {
  const myProjects = mockProjects.filter(p => p.status);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-6">Moje projekty</h1>

        <div className="space-y-4 mb-6">
          {myProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Button variant="outline" className="w-full">
          <Calendar className="mr-2 h-4 w-4" />
          Kalendarz projektów
        </Button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default MyProjects;
