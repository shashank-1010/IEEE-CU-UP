import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="container-custom text-center">
            <h1 className="text-4xl font-bold text-foreground font-heading">About Us</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our history, our goals, and the global organization we represent.
            </p>
          </div>
        </div>

        <div className="container-custom py-20 space-y-24">
          {/* About IEEE Global */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4 font-heading">About IEEE Global</h2>
              <div className="prose prose-slate text-muted-foreground">
                <p className="mb-4">
                  IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                </p>
                <p>
                  With more than 420,000 members in over 160 countries, IEEE is the trusted "voice" for engineering, computing, and technology information around the globe. The organization inspires a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-100 rounded-xl overflow-hidden aspect-video shadow-lg"
            >
               {/* Technology / Global connection image */}
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                alt="Global Technology Network" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </section>

          {/* About CU Student Branch */}
          <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-100 rounded-xl overflow-hidden aspect-video shadow-lg md:order-2"
            >
              {/* University Campus Image */}
              <img 
                src="https://www.vidyavision.com/CollegeUploads/Photos/2025-12-2-11-22-12_a%20(7).jpg" 
                alt="University Campus" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:order-1"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 font-heading">IEEE CU Student Branch</h2>
              <div className="prose prose-slate text-muted-foreground">
                <p className="mb-4">
                  Established at Chandigarh University, our Student Branch is a dynamic community of tech enthusiasts, innovators, and future leaders.
                </p>
                <p>
                  We organize regular workshops, hackathons, guest lectures, and industrial visits to bridge the gap between academic learning and industry requirements. Our mission is to empower students with the skills and network they need to excel in their professional careers.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
