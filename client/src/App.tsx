import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import Members from "@/pages/MemberCard";
import Register from "@/pages/register";
import Guidelines from "@/pages/guide";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/events" component={Events} />
      <Route path="/members" component={Members} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/guide" component={Guidelines} />
      <Route path="/join" component={Register} /> {/* Redirect join to contact for now */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
