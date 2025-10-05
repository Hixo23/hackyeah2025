import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import ApplicationForm from "./pages/ApplicationForm";
import Confirmation from "./pages/Confirmation";
import MyProjects from "./pages/MyProjects";
import Profile from "./pages/Profile";
import Recommendations from "./pages/Recommendations";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/chat" element={<Chat />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
