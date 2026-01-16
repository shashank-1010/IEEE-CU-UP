import { useQuery } from "@tanstack/react-query";
import type { TeamMember } from "@/lib/types";

export function useTeamMembers() {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const res = await fetch("/data/team.json");
      if (!res.ok) throw new Error("Failed to fetch team members");
      return res.json() as Promise<TeamMember[]>;
    },
  });
}
