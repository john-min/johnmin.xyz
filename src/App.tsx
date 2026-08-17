import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConceptIndex from "./pages/concepts/ConceptIndex";
import EditorialHome from "./pages/concepts/editorial/EditorialHome";
import EditorialProjects from "./pages/concepts/editorial/EditorialProjects";
import SystemsHome from "./pages/concepts/systems/SystemsHome";
import SystemsProjects from "./pages/concepts/systems/SystemsProjects";
import ArchHome from "./pages/concepts/architectural/ArchHome";
import ArchProjects from "./pages/concepts/architectural/ArchProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/concepts" element={<ConceptIndex />} />
          <Route path="/concepts/editorial" element={<EditorialHome />} />
          <Route path="/concepts/editorial/projects" element={<EditorialProjects />} />
          <Route path="/concepts/systems" element={<SystemsHome />} />
          <Route path="/concepts/systems/projects" element={<SystemsProjects />} />
          <Route path="/concepts/architectural" element={<ArchHome />} />
          <Route path="/concepts/architectural/projects" element={<ArchProjects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
