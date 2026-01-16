export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "upcoming" | "past" | "all";
  location?: string;
  imageUrl?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio?: string;
  category: "faculty" | "core";
  imageUrl?: string | null;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}
