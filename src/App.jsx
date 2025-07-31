import { Switch, Route } from "wouter";
import { queryClient } from "./Lib/QueryClient.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./Components/Ui/Toaster.jsx";
import { TooltipProvider } from "./Components/Ui/Tooltip.jsx";
import { ThemeProvider } from "./Components/ThemeProvider.jsx";
import { Navigation } from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Projects from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFound from "./Pages/Not-Found.jsx";
import {SimpleFooter } from "./Components/Footer.jsx";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Navigation />
            <main className="pt-16">
              <Router />
            </main>
           <SimpleFooter/>
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;