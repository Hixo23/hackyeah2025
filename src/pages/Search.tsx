import { useState } from "react";
import { Map, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNavigation from "@/components/BottomNavigation";
import ProjectCard from "@/components/ProjectCard";
import { mockProjects } from "@/data/mockData";
import { Project } from "@/types/project";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectDetails from "@/components/ProjectDetails";

const Search = () => {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="bg-card border-b border-border p-4">
        <h1 className="text-2xl font-bold text-primary mb-4">
          Szukaj otwartych pozycji
        </h1>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="flex-1 justify-between"
          >
            <span>Filtruj wyszukiwanie</span>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">
                3
              </span>
            </div>
          </Button>
          
          <Button
            variant={viewMode === "map" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("map")}
          >
            <Map className="h-4 w-4" />
          </Button>
          
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="p-4">
        {viewMode === "map" ? (
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <p className="text-muted-foreground">Widok mapy (demo)</p>
          </div>
        ) : (
          <div>
            {mockProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onDetailsClick={setSelectedProject}
              />
            ))}
          </div>
        )}
      </main>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <ProjectDetails 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </DialogContent>
      </Dialog>

      <BottomNavigation />
    </div>
  );
};

export default Search;
