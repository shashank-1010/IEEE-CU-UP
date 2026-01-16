import { useQuery } from "@tanstack/react-query";
import type { Event } from "@/lib/types";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await fetch("/data/events.json");
      if (!res.ok) throw new Error("Failed to fetch events");
      return res.json() as Promise<Event[]>;
    },
  });
}
