import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Rocket, 
  Users, 
  Lightbulb, 
  Shield, 
  Sparkles, 
  Handshake, 
  TrendingUp,
  Globe,
  Award,
  Briefcase,
  HeartHandshake
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section - Simple */}
        <section className="py-16 md:py-20 border-b border-gray-200">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-4">
                About IEEE Student Branch
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering Tomorrow's Innovators at Chandigarh University
              </p>
            </motion.div>
          </div>
        </section>

        {/* About IEEE Global & CU Branch */}
        <div className="container-custom py-16 space-y-20">
          {/* About IEEE Global */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Globe className="h-5 w-5 text-[#00629B]" />
                <span className="font-medium">Global Organization</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">About IEEE Global</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  <span className="font-semibold text-[#00629B]">IEEE</span> is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                </p>
                <p>
                  With more than 420,000 members in over 160 countries, IEEE is the trusted voice for engineering, computing, and technology information around the globe. The organization inspires a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-gray-200 rounded-lg p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#00629B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Global Reach</h3>
                  <p className="text-gray-600">420,000+ members worldwide</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-2 h-2 bg-[#00629B] rounded-full"></div>
                  <span className="text-gray-700">160+ Countries</span>
                </div>
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="w-2 h-2 bg-[#00629B] rounded-full"></div>
                  <span className="text-gray-700">3,000+ Student Branches</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00629B] rounded-full"></div>
                  <span className="text-gray-700">5,000+ Annual Conferences</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* About CU Student Branch */}
          <section className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-gray-200 rounded-lg p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#00629B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">CU Student Branch</h3>
                  <p className="text-gray-600">Established at Chandigarh University</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our Student Branch is a dynamic community of tech enthusiasts, innovators, and future leaders dedicated to bridging academic learning with industry requirements.
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase className="h-4 w-4 text-[#00629B]" />
                <span>Industry-Academia Bridge</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Users className="h-5 w-5 text-[#00629B]" />
                <span className="font-medium">Student Community</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">IEEE CU Student Branch</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We organize regular workshops, hackathons, guest lectures, and industrial visits to bridge the gap between academic learning and industry requirements.
                </p>
                <p>
                  Our mission is to empower students with the skills and network they need to excel in their professional careers while upholding the global standards and ethics of IEEE.
                </p>
              </div>
            </motion.div>
          </section>
        </div>

        {/* What We Do Section */}
        <section className="py-16 md:py-20 border-t border-gray-200">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <Target className="h-5 w-5 text-[#00629B]" />
                <span className="font-medium">Our Activities</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">What We Do</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our activities and focus areas at IEEE Student Branch
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Expert Talks & Workshops",
                  description: "Organizing seminars, workshops, and guest lectures on emerging technologies."
                },
                {
                  icon: <Lightbulb className="h-6 w-6" />,
                  title: "Research & Innovation",
                  description: "Promoting research, innovation, and IEEE-standard publication practices."
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Global Exposure",
                  description: "Providing exposure to global technical trends, ethics, and standards."
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Competitions & Conferences",
                  description: "Encouraging participation in conferences, competitions, and technical forums."
                },
                {
                  icon: <Briefcase className="h-6 w-6" />,
                  title: "Leadership Development",
                  description: "Developing leadership, teamwork, and professional communication skills."
                },
                {
                  icon: <Handshake className="h-6 w-6" />,
                  title: "Industry Interaction",
                  description: "Building strong academia–industry interaction for career growth."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center mb-4">
                    <div className="text-[#00629B]">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Aim, Vision, Mission */}
        <section className="py-16 md:py-20 border-t border-gray-200">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Our Aim */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-8"
              >
                <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-[#00629B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Our Aim</h3>
                <p className="text-gray-700 leading-relaxed">
                  To create a vibrant technical ecosystem that empowers students to become competent engineers, researchers, innovators, and responsible professionals by leveraging global IEEE resources.
                </p>
              </motion.div>

              {/* Our Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border border-gray-200 rounded-lg p-8"
              >
                <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-[#00629B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be a leading IEEE Student Branch that nurtures innovation, research excellence, and professional leadership, contributing meaningfully to technological advancement and societal development globally.
                </p>
              </motion.div>

              {/* Our Mission */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border border-gray-200 rounded-lg p-8"
              >
                <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6 text-[#00629B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Our Mission</h3>
                <ul className="space-y-3">
                  {[
                    "Promote technical knowledge and professional development",
                    "Encourage research, innovation, and quality publications",
                    "Bridge academia, industry, and research organizations",
                    "Cultivate ethical and socially conscious professionals",
                    "Provide a collaborative platform for lifelong growth"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-[#00629B] rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-20 border-t border-gray-200">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <HeartHandshake className="h-5 w-5 text-[#00629B]" />
                <span className="font-medium">Our Principles</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-heading">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Guiding principles that define our culture and actions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Award className="h-5 w-5" />,
                  title: "Technical Excellence",
                  description: "We strive for high standards in learning, innovation, and research."
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: "Integrity & Ethics",
                  description: "We uphold professional ethics, transparency, and honesty in all actions."
                },
                {
                  icon: <Sparkles className="h-5 w-5" />,
                  title: "Innovation & Creativity",
                  description: "We encourage creative thinking and innovative solutions to real-world challenges."
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  title: "Inclusivity & Collaboration",
                  description: "We believe in equal opportunities, teamwork, and collaborative growth."
                },
                {
                  icon: <TrendingUp className="h-5 w-5" />,
                  title: "Professional Growth",
                  description: "We are committed to developing leadership and career-ready skills."
                },
                {
                  icon: <HeartHandshake className="h-5 w-5" />,
                  title: "Social Responsibility",
                  description: "We promote technology-driven solutions that positively impact society."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center">
                      <div className="text-[#00629B]">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-20 border-t border-gray-200">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="border border-gray-200 rounded-lg p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                    <Briefcase className="h-5 w-5 text-[#00629B]" />
                    <span className="font-medium">Our Commitment</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-heading">
                    Dedicated to Excellence
                  </h2>
                </div>
                
                <div className="mb-10">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <span className="font-semibold text-[#00629B]">The IEEE Student Branch at Chandigarh University–Uttar Pradesh</span> is dedicated to creating meaningful learning experiences, enhancing institutional visibility, and contributing to the academic, professional, and research growth of students while upholding the global values and objectives of IEEE.
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <div className="inline-flex flex-col sm:flex-row gap-4">
                    <a
                      href="/join"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#00629B] text-white font-medium rounded-lg hover:bg-[#005084] transition-colors"
                    >
                      <Users className="h-5 w-5" />
                      Join IEEE Student Branch
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Briefcase className="h-5 w-5" />
                      Learn More
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    Become part of a global community of innovators and leaders
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
