import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { useEvents } from "@/hooks/use-events";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Events() {
  const { data: events, isLoading, error } = useEvents();
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = events?.filter(event => {
    if (filter === "all") return true;
    return event.type === filter;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow bg-slate-50/50">
        <div className="bg-white py-16 border-b border-slate-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground font-heading">Events</h1>
                <p className="mt-2 text-muted-foreground">Workshops, seminars, and tech talks.</p>
              </div>
              
              <div className="flex gap-2 p-1 bg-slate-100 rounded-lg">
                <Button 
                  variant={filter === "all" ? "default" : "ghost"} 
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "bg-white text-primary shadow-sm hover:bg-white" : "text-muted-foreground hover:text-foreground"}
                  size="sm"
                >
                  All
                </Button>
                <Button 
                  variant={filter === "upcoming" ? "default" : "ghost"} 
                  onClick={() => setFilter("upcoming")}
                  className={filter === "upcoming" ? "bg-white text-primary shadow-sm hover:bg-white" : "text-muted-foreground hover:text-foreground"}
                  size="sm"
                >
                  Upcoming
                </Button>
                <Button 
                  variant={filter === "past" ? "default" : "ghost"} 
                  onClick={() => setFilter("past")}
                  className={filter === "past" ? "bg-white text-primary shadow-sm hover:bg-white" : "text-muted-foreground hover:text-foreground"}
                  size="sm"
                >
                  Past
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-custom py-16">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-destructive">
              Failed to load events. Please try again later.
            </div>
          ) : filteredEvents?.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No events found for this category.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents?.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
