
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Patients from "./pages/Patients";
import PatientDetails from "./pages/PatientDetails";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/dashboard/Sidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <div className="flex h-screen overflow-hidden bg-gray-50 font-sans">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/patients/:id" element={<PatientDetails />} />
              <Route path="/messages" element={<NotFound />} />
              <Route path="/appointments" element={<NotFound />} />
              <Route path="/records" element={<NotFound />} />
              <Route path="/analytics" element={<NotFound />} />
              <Route path="/billing" element={<NotFound />} />
              <Route path="/settings" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
