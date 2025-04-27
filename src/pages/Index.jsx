import { ThemeProvider } from "../components/theme/ThemeProvider";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import IncidentDashboard from "../components/IncidentDashboard";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          <IncidentDashboard />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
