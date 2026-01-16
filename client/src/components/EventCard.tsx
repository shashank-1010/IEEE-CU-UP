import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import { motion } from "framer-motion";
import type { Event } from "@/lib/types";

export function EventCard({ event }: { event: Event }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
        {event.imageUrl ? (
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
            <Calendar className="w-12 h-12" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm uppercase tracking-wide">
          {event.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1.5 text-primary" />
            {format(new Date(event.date), "MMM d, yyyy")}
          </div>
          {event.location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5 text-primary" />
              {event.location}
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}
