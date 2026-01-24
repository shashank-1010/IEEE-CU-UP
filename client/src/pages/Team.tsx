import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Loader2, Linkedin, Twitter, Mail, Award, Users, Settings, BookOpen, Mic, DollarSign, Camera, TrendingUp, Cpu, Globe, PenTool, Video } from "lucide-react";
import { motion } from "framer-motion";

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  role: string;
  department?: string;
  email: string;
  imageUrl: string;
  category: "faculty" | "core" | "tech" | "media" | "events" | "anchor";
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    instagram?: string;
  };
}

export default function Team() {
  // Mock data with local images - replace with your actual data
  const members: TeamMember[] = [
    // Faculty Advisors
    {
      id: 1,
      name: "Dr. Ajay Kumar Singh",
      role: "HOD",
      department: "School of Computer Science and Engineering",
      email: "rkumar@ieee-cu.edu",
      imageUrl: "/images/team/sir1.jpeg",
      category: "faculty",
    },
    {
      id: 2,
      name: "Dr. Vikash Kumar Mishra",
      role: "Branch Counsellor, IEEE Student Branch ",
      department: "School of Computer Science and Engineering",
      email: "priya.sharma@ieee-cu.edu",
      imageUrl: "/images/team/sir3.png",
      category: "faculty",
    },
    {
      id: 3,
      name: "Dr. Amit Kumar Mishra",
      role: "Faculty Advisor",
      department: "School of Computer Science and Engineering",
      email: "priya.sharma@ieee-cu.edu",
      imageUrl: "/images/team/sir2.png",
      category: "faculty",
    },
    
    
    // Core Committee
    {
      id: 4,
      name: "Raaj Shekhar",
      role: "Chairperson",
      department: "M.Tech. CSE - AI/ML",
      email: "25LMCS10042@culkomail.in",
      imageUrl: "/images/team/chairperson.png",
      category: "core",
      bio: "Leading IEEE CU towards technological excellence",
    },
    {
      id: 5,
      name: "Ayan Ahmad Khan",
      role: "Vice Chairperson",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1294@culkomail.in",
      imageUrl: "/images/team/vice-chair.jpg",
      category: "core",
      bio: "Driven by innovation and student-led initiatives",
    },
    {
      id: 6,
      name: "Jayant Singh",
      role: "Secretary",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1012@culkomail.in",
      imageUrl: "/images/team/secretary.jpg",
      category: "core",
      bio: "Team coordination and event management",
    },
    {
      id: 7,
      name: "Suryansh Kumar Gupta",
      role: "Treasurer",
      department: "M.Tech. CSE - AI/ML",
      email: "25LMCS1005@culkomai.in",
      imageUrl: "/images/team/treasurer.png",
      category: "core",
      bio: "Financial management and budgeting",
    },
    
    // Technical Team
    {
      id: 12,
      name: "Sarfaraj Salim Khan",
      role: "Technical Lead",
      department: "M.Tech. CSE - AI/ML",
      email: "25LMCS1001@culkomail.in",
      imageUrl: "/images/team/tech-lead.jpg",
      category: "tech",
      bio: "Tech Lead managing technical direction and team coordination.",
    },
    {
      id: 13,
      name: "Shashank Pandey",
      role: "Technical Member",
      department: "BCA (Hons.)",
      email: "25LBBC1048@culkomail.in",
      imageUrl: "/images/team/tech1.jpeg",
      category: "tech",
      bio: "Developer building and managing IEEE website and mobile app.",
    },
    {
      id: 14,
      name: "Akshara Bajpai",
      role: "Technical Member",
      department: "B.Tech. IT",
      email: "25LBIT1024@culkomail.in",
      imageUrl: "/images/team/tech2.jpg",
      category: "tech",
      bio: "Technical support assisting in development.",
    },
    {
      id: 15,
      name: "Mayank Gautam",
      role: "Technical Member",
      department: "B.Tech. IT",
      email: "25LBIT1022@culkomail.in",
      imageUrl: "/images/team/tech3.jpg",
      category: "tech",
      bio: "Technical executive supporting development.",  
    },
    {
      id: 16,
      name: "Sampoorn Tripathi",
      role: "Technical Member",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1261@culkomail.in",
      imageUrl: "/images/team/tech4.jpg",
      category: "tech", 
      bio: "Technical team member contributing to system support.",   
    },
    {
      id: 17,
      name: "Deepanjali srivastava",
      role: "Technical Member",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1291@culkomail.in",
      imageUrl: "/images/team/tech5.jpg",
      category: "tech", 
      bio: "Technical team member contributing to system support.",   
    },
    
    // Media Team
    {
      id: 16,
      name: "Mohd Humza",
      role: "Social Media Manager",
      department: "B.Tech. CSE - Core",
      email: "25LBCS1305@culkomail.in",
      imageUrl: "/images/team/media1.jpg",
      category: "media",
    },
    {
      id: 17,
      name: "Paras Tiwari",
      role: "Content Writer",
      department: "B.Tech. CSE - Core",
      email: "kabir.choudhary@ieee-cu.edu",
      imageUrl: "/images/team/media2.jpg",
      category: "media",
    },
    {
      id: 18,
      name: "Naitik Srivastava",
      role: "Photographer",
      department: "B.Tech. CSE - Core",
      email: "neha.sharma@ieee-cu.edu",
      imageUrl: "/images/team/media3.jpg",
      category: "media",
    },
    
    // Anchoring Team
    {
      id: 21,
      name: "Kanika Singh",
      role: "Anchor",
      department: "B.Tech. CSE - Core",
      email: "dhruv.saxena@ieee-cu.edu",
      imageUrl: "/images/team/achor1.jpg",
      category: "anchor",
    },
    {
      id: 21,
      name: "Aadya Gupta",
      role: "Anchor",
      department: "B.Tech. CSE - Core",
      email: "dhruv.saxena@ieee-cu.edu",
      imageUrl: "/images/team/achor2.jpg",
      category: "anchor",
    },
    {
      id: 22,
      name: "Suryansh",
      role: "Anchor",
      department: "BA_JMC",
      email: "25LBAJ1006@culkomail.in",
      imageUrl: "/images/team/achor3.png",
      category: "anchor",
    },
  ];

  // Filter members by category
  const faculty = members.filter(m => m.category === "faculty");
  const core = members.filter(m => m.category === "core");
  const tech = members.filter(m => m.category === "tech");
  const media = members.filter(m => m.category === "media");
  const events = members.filter(m => m.category === "events");
  const anchor = members.filter(m => m.category === "anchor");

  // For loading state simulation (remove in production)
  const isLoading = false;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold text-foreground font-heading">Our Team</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated individuals who lead and drive our student branch forward.
            </p>
          </div>
        </div>

        <div className="container-custom py-20 space-y-24">
          {isLoading && (
             <div className="flex justify-center py-20">
               <Loader2 className="w-10 h-10 animate-spin text-primary" />
             </div>
          )}

          {/* Faculty Advisors */}
          {!isLoading && faculty.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Faculty Advisors
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {faculty.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Core Committee */}
          {!isLoading && core.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Core Committee
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {core.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Technical Team */}
          {!isLoading && tech.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Technical Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {tech.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          {/* Media Team */}
          {!isLoading && media.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Media Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {media.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}

          

          {/* Anchoring Team */}
          {!isLoading && anchor.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-center mb-12 font-heading text-primary relative inline-block left-1/2 -translate-x-1/2">
                Anchoring Team
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {anchor.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow text-center group"
    >
      <div className="aspect-square bg-slate-100 overflow-hidden relative">
        {member.imageUrl ? (
          <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${member.name.split(' ').join('+')}&background=random&color=fff&size=256`;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 text-4xl font-bold">
            {member.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-foreground font-heading">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
        
        {member.department && (
          <p className="text-muted-foreground text-xs mb-3">{member.department}</p>
        )}
        
        {member.bio && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{member.bio}</p>
        )}

        <div className="flex justify-center gap-3 pt-2">
          {member.socialLinks?.linkedin && (
            <a 
              href={member.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0077B5] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.socialLinks?.twitter && (
            <a 
              href={member.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#1DA1F2] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="text-slate-400 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
