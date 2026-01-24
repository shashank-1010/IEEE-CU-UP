import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, User, Filter, ChevronDown, Building, Calendar, Award, Hash } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Dummy member data
const dummyMembers = [
  { id: "101932497", name: "Kanika Singh", email: "25LBCS1377@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "100697627", name: "Ishan Yadav", email: "25LBCS1278@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101932040", name: "Naitik Srivastava", email: "25lbcs1011@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101933725", name: "Paras Tiwari", email: "25LBCS1079@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101931975", name: "Animesh Mishra", email: "25LBCS1039@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101932317", name: "Aaradhya Gupta", email: "25LBCS1099@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
  { id: "101944697", name: "Deepanjali Srivastava", email: "25LBCS1291@culkomail.in", campus: "Chandigarh University UP", state: "Uttar Pradesh", membershipType: "Student", membershipYear: 2025, department: "Btech-CSE Core", status: "Active" },
];

// Campus options
const campusOptions = ["All Campuses", "Chandigarh University UP", "Chandigarh University Main"];
const membershipOptions = ["All Types", "Student", "Professional", "Graduate"];
const yearOptions = ["All Years", "2025"];

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
                {/* Search Bar and Controls */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
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
                
                {/* Search Input */}
                <div className="relative mb-6">
                  <Input              
                    type="text"
                    placeholder="Search by name, email, ID, or department..."
                    className="pl-12 py-6 text-base border-2 border-gray-200 focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/10 rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <User className="h-5 w-5" />
                  </div>
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

        {/* Members Display Section - ONLY TABLE VIEW */}
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
                  
                  {/* Table View - Mobile and Desktop responsive */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm"
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Member Info
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                            Contact
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            School and Course
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                            Membership
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredMembers.map((member, index) => (
                          <motion.tr 
                            key={member.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.03 }}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-[#00629B]/10 flex items-center justify-center mr-3">
                                  <User className="h-5 w-5 text-[#00629B]" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                  <div className="text-sm text-gray-500 md:hidden">{member.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Hash className="h-3 w-3 text-gray-400 mr-2" />
                                <span className="text-sm font-medium text-gray-900 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                  {member.id}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                              <div className="text-sm text-gray-900">{member.email}</div>
                            </td>
                            <td className="px-4 md:px-6 py-4">
                              <div className="text-sm text-gray-900">{member.campus}</div>
                              <div className="text-sm text-gray-500">{member.department}</div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                              <div className="flex flex-col gap-1">
                                <span className={`px-2 py-1 text-xs rounded-full w-fit ${
                                  member.membershipType === "Student" 
                                    ? "bg-[#00629B]/10 text-[#00629B]" 
                                    : "bg-purple-100 text-purple-700"
                                }`}>
                                  {member.membershipType}
                                </span>
                                <span className="text-xs text-gray-600">Since {member.membershipYear}</span>
                                <span className="text-xs text-green-600 font-medium">{member.status}</span>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex flex-col sm:flex-row gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="h-8 w-full sm:w-auto justify-center"
                                  asChild
                                >
                                  <a href={`mailto:${member.email}`}>
                                    <Mail className="h-3.5 w-3.5 mr-1" />
                                    <span className="hidden sm:inline">Email</span>
                                  </a>
                                </Button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
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
