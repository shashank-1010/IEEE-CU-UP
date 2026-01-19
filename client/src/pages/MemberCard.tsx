import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, User, GraduationCap, Filter, ChevronDown, ExternalLink, Building, Calendar, Award, Hash } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Dummy member data
const dummyMembers = [
  { id: "101932497", name: "Kanika Singh", email: "25LBCS1377@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "100697627", name: "Ishan Yadav", email: "	25LBCS1278@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101932040", name: "Naitik Srivastava", email: "25lbcs1011@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101933725", name: "Paras Tiwari", email: "25LBCS1079@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101931975", name: "Animesh Mishra", email: "25LBCS1039@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101932317", name: "Aaradhya Gupta", email: "25LBCS1099@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101944697", name: "Deepanjali Srivastava", email: "25LBCS1291@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
];
// Campus options
const campusOptions = ["Chandigarh University", "All Campuses"];
const membershipOptions = ["All Types", "Student", "Professional", "Graduate"];
const yearOptions = ["All Years", "2024", "2023", "2022", "2021", "2020"];

export default function Members() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("All Campuses");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [showFilters, setShowFilters] = useState(false);

  // Filter members
  const filteredMembers = dummyMembers.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCampus = selectedCampus === "All Campuses" || member.campus === selectedCampus;
    const matchesType = selectedType === "All Types" || member.membershipType === selectedType;
    const matchesYear = selectedYear === "All Years" || member.membershipYear.toString() === selectedYear;
    
    return matchesSearch && matchesCampus && matchesType && matchesYear;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow bg-white">
        {/* Simple Banner Section - White background with IEEE blue text only */}
        <section className="py-10 md:py-12 bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#00629B] tracking-tight">
                  IEEE Members
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="py-8 bg-gray-50/50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      Showing <span className="font-bold text-[#00629B]">{filteredMembers.length}</span> members
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-gray-300 hover:border-[#00629B] hover:text-[#00629B]"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter className="h-4 w-4" />
                      Filters
                      <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>
                  
                  
                  <Input              
                    type="text"
                    placeholder="Search by name, email, ID, or department..."
                    className="pl-12 py-6 text-base border-2 border-gray-200 focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/10 rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filters Panel */}
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Building className="h-4 w-4 inline mr-2 text-[#00629B]" />
                            Campus
                          </label>
                          <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B] text-sm"
                            value={selectedCampus}
                            onChange={(e) => setSelectedCampus(e.target.value)}
                          >
                            {campusOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <User className="h-4 w-4 inline mr-2 text-[#00629B]" />
                            Membership Type
                          </label>
                          <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B] text-sm"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                          >
                            {membershipOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <Calendar className="h-4 w-4 inline mr-2 text-[#00629B]" />
                            Membership Year
                          </label>
                          <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B] text-sm"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                          >
                            {yearOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-100">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setSelectedCampus("All Campuses");
                            setSelectedType("All Types");
                            setSelectedYear("All Years");
                          }}
                          className="border-gray-300 hover:border-[#00629B] hover:text-[#00629B]"
                        >
                          Clear Filters
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {filteredMembers.length > 0 ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 font-heading">Member Directory</h2>
                    <p className="text-gray-600 mt-2">
                      Connect with IEEE members from Chandigarh University
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMembers.map((member, index) => (
                      <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 h-full hover:border-[#00629B]/30">
                          {/* Member Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-[#00629B]/10 flex items-center justify-center">
                                <User className="h-6 w-6 text-[#00629B]" />
                              </div>
                              <div>
                                <h3 className="font-bold text-gray-900">{member.name}</h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className={`px-2 py-1 text-xs rounded-full ${
                                    member.membershipType === "Student" 
                                      ? "bg-[#00629B]/10 text-[#00629B]" 
                                      : member.membershipType === "Professional"
                                      ? "bg-purple-100 text-purple-700"
                                      : "bg-green-100 text-green-700"
                                  }`}>
                                    {member.membershipType}
                                  </span>
                                  <span className="text-xs text-gray-500">• {member.status}</span>
                                </div>
                              </div>
                            </div>
                            <Hash className="h-5 w-5 text-gray-400" />
                          </div>

                          {/* Member Details */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Mail className="h-4 w-4 text-[#00629B] flex-shrink-0" />
                              <a 
                                href={`mailto:${member.email}`}
                                className="text-sm hover:text-[#00629B] transition-colors truncate"
                              >
                                {member.email}
                              </a>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-700">
                              <Hash className="h-4 w-4 text-[#00629B] flex-shrink-0" />
                              <span className="text-sm font-mono">{member.id}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-700">
                              <GraduationCap className="h-4 w-4 text-[#00629B] flex-shrink-0" />
                              <span className="text-sm">{member.department}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-700">
                              <Building className="h-4 w-4 text-[#00629B] flex-shrink-0" />
                              <span className="text-sm">{member.campus}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-700">
                              <MapPin className="h-4 w-4 text-[#00629B] flex-shrink-0" />
                              <span className="text-sm">{member.state}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-700">
                              <Calendar className="h-4 w-4 text-[#00629B] flex-shrink-0" />
                              <span className="text-sm">Member since {member.membershipYear}</span>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="mt-6 pt-6 border-t border-gray-100 flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex-1 border-gray-300 hover:border-[#00629B] hover:text-[#00629B]"
                              asChild
                            >
                              <a href={`mailto:${member.email}`}>
                                <Mail className="h-4 w-4 mr-2" />
                                Email
                              </a>
                            </Button>
                            <Button 
                              size="sm" 
                              className="flex-1 bg-[#00629B] hover:bg-[#00629B]/90"
                              asChild
                            >
                              <a href={`/profile/${member.id}`}>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Profile
                              </a>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No members found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                  <Button 
                    variant="outline"
                    className="border-gray-300 hover:border-[#00629B] hover:text-[#00629B]"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCampus("All Campuses");
                      setSelectedType("All Types");
                      setSelectedYear("All Years");
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto text-[#00629B] mb-4" />
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 font-heading">Join the IEEE Community</h2>
                  <p className="text-gray-600 mb-8">
                    Become part of the world's largest technical professional organization. 
                    Access exclusive resources, networking opportunities, and career development programs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/join">
                      <Button size="lg" className="bg-[#00629B] hover:bg-[#00629B]/90 text-white px-8">
                        Join IEEE
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="border-[#00629B] text-[#00629B] hover:bg-[#00629B]/5">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}