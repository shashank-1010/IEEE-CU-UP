// app/pages/guidelines.tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Target, Eye, Users, Lightbulb, Star, Shield, HeartHandshake, BookOpen, Globe, Rocket, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Guidelines() {
  const handleDownload = (fileName: string) => {
    // In a real app, you would fetch the PDF from server or public folder
    const link = document.createElement('a');
    link.href = `/pdfs/${fileName}`; // Update this path as needed
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner - White with blue text */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-[#00629B]">
                IEEE Student Branch Guidelines
              </h1>
              <p className="text-xl mt-4 text-gray-700 font-medium">
                Chandigarh University – Uttar Pradesh
              </p>
              <p className="text-lg mt-6 max-w-2xl mx-auto text-gray-600">
                Our vision, mission, core values, and commitment to excellence in technology and ethics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PDF Downloads Section */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#00629B]">IEEE Official Documents</h2>
                <p className="text-gray-600 mt-2">Download and review IEEE's ethical and professional guidelines</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 border-[#00629B]/20 hover:shadow-lg transition-shadow bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-[#00629B]">
                      <Shield className="h-6 w-6" />
                      IEEE Code of Conduct
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      Approved by IEEE Board of Directors, June 2014
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">
                      Guidelines for respectful, fair, and professional behavior in all IEEE activities.
                    </p>
                    <Button 
                      onClick={() => handleDownload("IEEE_Code_of_Conduct.pdf")}
                      className="w-full bg-[#00629B] hover:bg-[#00629B]/90 text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#00629B]/20 hover:shadow-lg transition-shadow bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-[#00629B]">
                      <BookOpen className="h-6 w-6" />
                      IEEE Code of Ethics
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      Adopted by IEEE Board of Directors, June 2020
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">
                      Ethical principles for upholding integrity, responsibility, and public welfare.
                    </p>
                    <Button 
                      onClick={() => handleDownload("IEEE_Code_of_Ethics.pdf")}
                      className="w-full bg-[#00629B] hover:bg-[#00629B]/90 text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
              >
                <h2 className="text-3xl font-bold text-[#00629B]">What We Do</h2>
                <p className="text-gray-600 mt-2">Our activities and focus areas at IEEE Student Branch</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Expert Talks & Workshops",
                    desc: "Organizing seminars, workshops, and guest lectures on emerging technologies."
                  },
                  {
                    icon: <Rocket className="h-8 w-8" />,
                    title: "Research & Innovation",
                    desc: "Promoting research, innovation, and IEEE-standard publication practices."
                  },
                  {
                    icon: <Globe className="h-8 w-8" />,
                    title: "Global Exposure",
                    desc: "Providing exposure to global technical trends, ethics, and standards."
                  },
                  {
                    icon: <Award className="h-8 w-8" />,
                    title: "Competitions & Conferences",
                    desc: "Encouraging participation in conferences, competitions, and technical forums."
                  },
                  {
                    icon: <Zap className="h-8 w-8" />,
                    title: "Leadership Development",
                    desc: "Developing leadership, teamwork, and professional communication skills."
                  },
                  {
                    icon: <HeartHandshake className="h-8 w-8" />,
                    title: "Industry Interaction",
                    desc: "Building strong academia–industry interaction for career growth."
                  }
                ].map((item, index) => (
                  <Card key={index} className="border border-gray-200 hover:border-[#00629B]/40 transition-all hover:shadow-md bg-white">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-full bg-[#00629B]/10 flex items-center justify-center mb-4 text-[#00629B]">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Aim */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-2 border-[#00629B]/20 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-[#00629B]">
                      <Target className="h-6 w-6" />
                      Our Aim
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      To create a vibrant technical ecosystem that empowers students to become competent engineers, researchers, innovators, and responsible professionals by leveraging global IEEE resources.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#00629B]/20 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-[#00629B]">
                      <Eye className="h-6 w-6" />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      To be a leading IEEE Student Branch that nurtures innovation, research excellence, and professional leadership, contributing meaningfully to technological advancement and societal development globally.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#00629B]/20 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-[#00629B]">
                      <Rocket className="h-6 w-6" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-gray-700 space-y-2 list-disc list-inside">
                      <li>Promote technical knowledge and professional development</li>
                      <li>Encourage research, innovation, and quality publications</li>
                      <li>Bridge academia, industry, and research organizations</li>
                      <li>Cultivate ethical and socially conscious professionals</li>
                      <li>Provide a collaborative platform for lifelong growth</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#00629B]">Our Core Values</h2>
                <p className="text-gray-600 mt-2">Guiding principles that define our culture and actions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Star className="h-6 w-6" />, title: "Technical Excellence", color: "text-amber-600", bg: "bg-amber-50" },
                  { icon: <Shield className="h-6 w-6" />, title: "Integrity & Ethics", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { icon: <Lightbulb className="h-6 w-6" />, title: "Innovation & Creativity", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: <Users className="h-6 w-6" />, title: "Inclusivity & Collaboration", color: "text-purple-600", bg: "bg-purple-50" },
                  { icon: <Zap className="h-6 w-6" />, title: "Professional Growth", color: "text-orange-600", bg: "bg-orange-50" },
                  { icon: <HeartHandshake className="h-6 w-6" />, title: "Social Responsibility", color: "text-red-600", bg: "bg-red-50" }
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <div className={`p-3 rounded-full ${value.bg} ${value.color}`}>
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{value.title}</h3>
                      <p className="text-gray-600 mt-1">
                        {value.title === "Technical Excellence" && "We strive for high standards in learning, innovation, and research."}
                        {value.title === "Integrity & Ethics" && "We uphold professional ethics, transparency, and honesty in all actions."}
                        {value.title === "Innovation & Creativity" && "We encourage creative thinking and innovative solutions to real-world challenges."}
                        {value.title === "Inclusivity & Collaboration" && "We believe in equal opportunities, teamwork, and collaborative growth."}
                        {value.title === "Professional Growth" && "We are committed to developing leadership and career-ready skills."}
                        {value.title === "Social Responsibility" && "We promote technology-driven solutions that positively impact society."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section - Clean white with blue accent */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-[#00629B]/20 shadow-sm">
                <h2 className="text-3xl font-bold text-[#00629B]">Our Commitment</h2>
                <div className="w-24 h-1 bg-[#00629B] mx-auto my-6 rounded-full"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The IEEE Student Branch at Chandigarh University–Uttar Pradesh is dedicated to creating meaningful learning experiences, enhancing institutional visibility, and contributing to the academic, professional, and research growth of students while upholding the global values and objectives of IEEE.
                </p>
                <div className="mt-10">
                  <Button asChild size="lg" className="bg-[#00629B] hover:bg-[#00629B]/90 text-white">
                    <Link href="/join">
                      Join IEEE Student Branch
                    </Link>
                  </Button>
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