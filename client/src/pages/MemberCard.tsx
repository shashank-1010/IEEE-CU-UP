import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, User, Filter, ChevronDown, Building, Calendar, Award, Hash, Linkedin, GraduationCap, BookOpen } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Dummy member data - LinkedIn URLs ke saath
const dummyMembers = [
{
    id: "101933725",
    name: "Paras Tiwari",
    email: "25lbcs1079@culkomail.in",
    linkedin: "https://www.linkedin.com/in/paras-tiwari-6ab5201b6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.Tech CSE Core",
    school: "School of engineering",
    course: "B.Tech CSE Core",
    status: "Active"
  },
{
    id: "102047614",
    name: "Anubhav Singh",
    email: "25lbec1014@culkomail.in",
    linkedin: "https://www.linkedin.com/in/anubhav-singh-a672353ab/",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.tech ECE",
    school: "School Of Engineering",
    course: "B.tech ECE",
    status: "Active"
  },
{
    id: "101932765",
    name: "Mayank Kumar Mishra",
    email: "25lmcs1014@culkomail.in",
    linkedin: "https://in.linkedin.com/in/mayank-kumar-mishra-411971290",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Graduate",
    membershipYear: 2025,
    department: "M. Tech",
    school: "School of Computer Science and Engineering",
    course: "M. Tech",
    status: "Active"
  },
{
    id: "101932040",
    name: "Naitik Srivastava",
    email: "25lbcs1011@culkomail.in",
    linkedin: "https://www.linkedin.com/in/naitiksrivastava25",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.Tech CSE Core",
    school: "School of Computer Science and Engineering",
    course: "B.Tech CSE Core",
    status: "Active"
  },
{
    id: "101932497",
    name: "Kanika Singh",
    email: "25lbcs1377@culkomail.in",
    linkedin: "https://www.linkedin.com/in/kanika-singh-776ab0392",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Btech.CSE",
    school: "School of Computer Science and Engineering",
    course: "Btech.CSE",
    status: "Active"
  },
{
    id: "102047487",
    name: "Sheetanshu Gautam",
    email: "25lbec1027@culkomail.in",
    linkedin: "https://nan",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B Tech ece",
    school: "School of core engineering",
    course: "B Tech ece",
    status: "Active"
  },
{
    id: "101931955",
    name: "Jayant Singh",
    email: "25lbcs1012@culkomail.in",
    linkedin: "https://www.linkedin.com/in/jayant-singh-ya",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "BTech CSE core",
    school: "School of computer science and engineering",
    course: "BTech CSE core",
    status: "Active"
  },
{
    id: "102049043",
    name: "Abhedya Pratap Singh",
    email: "25lbec1009@culkomail.in",
    linkedin: "https://Abhedya Pratap Singh",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.Tech ECE",
    school: "School of Engineering",
    course: "B.Tech ECE",
    status: "Active"
  },
{
    id: "97277330",
    name: "Raaj Shekhar",
    email: "25lmcs1004@culkomail.in",
    linkedin: "https://www.linkedin.com/in/raaj-shekhar-65128b1a1",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Graduate",
    membershipYear: 2025,
    department: "M. Tech. CSE AI-ML",
    school: "School of Computer Science and Engineering",
    course: "M. Tech. CSE AI-ML",
    status: "Active"
  },
{
    id: "101932317",
    name: "Mayank Gautam",
    email: "25lbit1022@culkomail.in",
    linkedin: "https://www.linkedin.com/in/mayank-gautam-9140933aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "BTech IT",
    school: "School of CSE",
    course: "BTech IT",
    status: "Active"
  },
{
    id: "101932496",
    name: "Aadya Gupta",
    email: "25lbcs1335@culkomail.in",
    linkedin: "https://www.linkedin.com/in/aadya-gupta-207699396/",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Btech CSE core",
    school: "CSE core",
    course: "Btech CSE core",
    status: "Active"
  },
{
    id: "101946760",
    name: "Mohd Humza",
    email: "25lbcs1305@culkomail.in",
    linkedin: "https://Right now my linkedin profile was disabled but i am fixing it asap.",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Btech",
    school: "School of computer science and engineering",
    course: "Btech",
    status: "Active"
  },
{
    id: "101932511",
    name: "Ayan Ahmad Khan",
    email: "25lbcs1294@culkomail.in",
    linkedin: "https://www.linkedin.com/in/-ayankhan",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.Tech CSE",
    school: "School of computer science and engineering",
    course: "B.Tech CSE",
    status: "Active"
  },
{
    id: "101944697",
    name: "Deepanjali Srivastava",
    email: "25lbcs1291@culkomail.in",
    linkedin: "https://www.linkedin.com/in/deepanjali-srivastava-189b27372?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Btech CSE",
    school: "Computer Science and Engineering",
    course: "Btech CSE",
    status: "Active"
  },
{
    id: "102047984",
    name: "Rohit Kumawat",
    email: "25lbec1020@culkomail.in",
    linkedin: "https://www.linkedin.com/in/rohit-kumawat-7586a7394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.tech (ECE)",
    school: "School of Engineering",
    course: "B.tech (ECE)",
    status: "Active"
  },
{
    id: "102047474",
    name: "Ansh Pratap Verma",
    email: "25lbec1018@culkomail.in",
    linkedin: "https://www.linkedin.com/in/ansh-pratap-verma-00aab0337?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Graduate",
    membershipYear: 2025,
    department: "B.tech ECE",
    school: "School of Engineering",
    course: "B.tech ECE",
    status: "Active"
  },
{
    id: "101995486",
    name: "Raunak Kumar",
    email: "25lbec1006@culkomail.in",
    linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B tech ECE",
    school: "School of engineering",
    course: "B tech ECE",
    status: "Active"
  },
{
    id: "101934289",
    name: "Shashank Pandey",
    email: "25lbbc1048@culkomail.in",
    linkedin: "https://www.linkedin.com/in/shashank-pandey-067811392?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Bca ( Hons.)",
    school: "School of computing",
    course: "Bca ( Hons.)",
    status: "Active"
  },
{
    id: "101932390",
    name: "Akshara Bajpai",
    email: "25lbit1024 @culkomail.in",
    linkedin: "https://www.linkedin.com/in/akshara-bajpai-0a7559397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Btech IT",
    school: "School of computer science engineering",
    course: "Btech IT",
    status: "Active"
  },
{
    id: "101932602",
    name: "Sampoorn Tripathi",
    email: "25lbcs1261@culkomail.in",
    linkedin: "https://www.linkedin.com/in/sampoorn-tripathi-38121b354?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "BTech CSE CORE",
    school: "School of Computer Science Engineering",
    course: "BTech CSE CORE",
    status: "Active"
  },
{
    id: "101930539",
    name: "Aaradhya Gupta",
    email: "25lbcs1099@culkomail.in",
    linkedin: "https://www.linkedin.com/in/aaradhyagupta21",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B. Tech CSE Core",
    school: "School of Computer Science and Engineering",
    course: "B. Tech CSE Core",
    status: "Active"
  },
{
    id: "102047289",
    name: "Pulkit Shukla",
    email: "25lbec1010@culkomail.in",
    linkedin: "https://www.linkedin.com/in/pulkit-shukla-b153693a7?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "ECE",
    school: "School of Engineering",
    course: "ECE",
    status: "Active"
  },
{
    id: "101930703",
    name: "Suryansh Kumar Gupta",
    email: "25lmcs1005@culkomail.in",
    linkedin: "https://www.linkedin.com/in/suryansh549/",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Graduate",
    membershipYear: 2025,
    department: "M. Tech. CSE AI-ML",
    school: "School of Computer Science and Engineering",
    course: "M. Tech. CSE AI-ML",
    status: "Active"
  },
{
    id: "101931975",
    name: "Animesh Mishra",
    email: "25lbcs1039@culkomail.in",
    linkedin: "https://animesh-mishra-t",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.tech CSE",
    school: "Computer Science and Engineering",
    course: "B.tech CSE",
    status: "Active"
  },
{
    id: "100697627",
    name: "Ishan Yadav",
    email: "25lbcs1278@culkomail.com",
    linkedin: "https://www.linkedin.com/in/ishan-yadav-49a4913ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B.Tech .CSE",
    school: "School of Computer Science and Engineering",
    course: "B.Tech .CSE",
    status: "Active"
  },
{
    id: "102049052",
    name: "Anu Yadav",
    email: "25lbec1003@culkomail.in",
    linkedin: "https://my LinkedIn is not working so I’ll send you later.",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "B. Tech ECE",
    school: "School of Engineering",
    course: "B. Tech ECE",
    status: "Active"
  },
{
    id: "97407232",
    name: "Sarfaraj Salim Khan",
    email: "25lmcs1001@culkomail.in",
    linkedin: "https://www.linkedin.com/in/sarfaraj-salim-khan-8363b92ab/",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Graduate",
    membershipYear: 2025,
    department: "M.Tech. CSE - AI/ML",
    school: "School of Computer Science and Engineering",
    course: "M.Tech. CSE - AI/ML",
    status: "Active"
  },
{
    id: "102047487",
    name: "Sheetanshu Gautam",
    email: "25lbec1027@culkomail.in",
    linkedin: "https://Na",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Btech ECE",
    school: "SCHOOL OF ENGINEERING",
    course: "Btech ECE",
    status: "Active"
  },
{
    id: "102049139",
    name: "Paavika Rastogi",
    email: "25lbec1002@culkomail.in",
    linkedin: "https://Can't find",
    campus: "Chandigarh University Main",
    state: "Punjab",
    membershipType: "Student",
    membershipYear: 2025,
    department: "Btech ECE",
    school: "School of engineering",
    course: "Btech ECE",
    status: "Active"
  },
];

// Campus options
const campusOptions = ["All Campuses", "Chandigarh University UP", "Chandigarh University Main"];
const membershipOptions = ["All Types", "Student Member", "Professional", "Graduate Member"];
const yearOptions = ["All Years", "2025", "2026"];
const schoolOptions = ["All Schools", "School of Engineering and Technology", "School of Computing and Information Systems", "School of Electronics and Electrical Engineering", "School of Business and Management", "School of Computer Applications", "School of Law"];
const courseOptions = ["All Courses", "B.Tech Computer Science and Engineering", "B.Tech Artificial Intelligence and Machine Learning", "B.Tech Electronics and Communication Engineering", "Bachelor of Business Administration (BBA)", "B.Tech Data Science and Analytics", "Master of Computer Applications (MCA)", "Bachelor of Laws (LL.B.)", "Master of Business Administration (MBA)", "B.Tech Civil Engineering", "M.Tech Computer Science and Engineering"];

export default function Members() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("All Campuses");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedSchool, setSelectedSchool] = useState("All Schools");
  const [selectedCourse, setSelectedCourse] = useState("All Courses");
  const [showFilters, setShowFilters] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  // Initial members - filter lagane se pehle
  const [membersToShow, setMembersToShow] = useState(dummyMembers);

  // Apply filter function
  const applyFilters = () => {
    const filteredMembers = dummyMembers.filter(member => {
      const matchesSearch = 
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.school.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.course.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCampus = selectedCampus === "All Campuses" || member.campus === selectedCampus;
      const matchesType = selectedType === "All Types" || member.membershipType === selectedType;
      const matchesYear = selectedYear === "All Years" || member.membershipYear.toString() === selectedYear;
      const matchesSchool = selectedSchool === "All Schools" || member.school === selectedSchool;
      const matchesCourse = selectedCourse === "All Courses" || member.course === selectedCourse;
      
      return matchesSearch && matchesCampus && matchesType && matchesYear && matchesSchool && matchesCourse;
    });

    setMembersToShow(filteredMembers);
    setIsFilterApplied(true);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCampus("All Campuses");
    setSelectedType("All Types");
    setSelectedYear("All Years");
    setSelectedSchool("All Schools");
    setSelectedCourse("All Courses");
    setMembersToShow(dummyMembers);
    setIsFilterApplied(false);
  };

  // Clear only filter selections (not search)
  const clearFiltersOnly = () => {
    setSelectedCampus("All Campuses");
    setSelectedType("All Types");
    setSelectedYear("All Years");
    setSelectedSchool("All Schools");
    setSelectedCourse("All Courses");
    applyFilters();
  };

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
                    Showing <span className="font-bold text-[#00629B]">{membersToShow.length}</span> members
                    {isFilterApplied && (
                      <span className="ml-2 text-xs bg-[#00629B]/10 text-[#00629B] px-2 py-1 rounded-full">
                        Filters Applied
                      </span>
                    )}
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
                    placeholder="Search by name, email, ID, department, school, or course..."
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
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
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

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <GraduationCap className="h-4 w-4 inline mr-2 text-[#00629B]" />
                            School
                          </label>
                          <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B] text-sm"
                            value={selectedSchool}
                            onChange={(e) => setSelectedSchool(e.target.value)}
                          >
                            {schoolOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            <BookOpen className="h-4 w-4 inline mr-2 text-[#00629B]" />
                            Course
                          </label>
                          <select 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00629B]/20 focus:border-[#00629B] text-sm"
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                          >
                            {courseOptions.map(option => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-100">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={clearFiltersOnly}
                          className="border-gray-300 hover:border-[#00629B] hover:text-[#00629B]"
                        >
                          Clear Filters
                        </Button>
                        <Button 
                          size="sm"
                          onClick={applyFilters}
                          className="bg-[#00629B] hover:bg-[#00629B]/90 text-white"
                        >
                          Apply Filters
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
              {membersToShow.length > 0 ? (
                <>
                  <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 font-heading">Member Directory</h2>
                      <p className="text-gray-600 mt-2">
                        Connect with IEEE members from Chandigarh University
                      </p>
                    </div>
                    {isFilterApplied && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={clearAllFilters}
                        className="border-gray-300 hover:border-[#00629B] hover:text-[#00629B]"
                      >
                        Clear All
                      </Button>
                    )}
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
                            Member Name
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            School
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                            Contact
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Campus & Department
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                            Membership
                          </th>
                          <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {membersToShow.map((member, index) => (
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
                                  <div className="text-xs text-gray-500 md:hidden">{member.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <Hash className="h-3 w-3 text-gray-400 mr-2" />
                                <span className="text-xs font-medium text-gray-900 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-200">
                                  {member.id}
                                </span>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4">
                              <div className="flex items-start">
                                <GraduationCap className="h-3.5 w-3.5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-900">{member.school}</div>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4">
                              <div className="flex items-start">
                                <BookOpen className="h-3.5 w-3.5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-900">{member.course}</div>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                              <div className="space-y-2">
                                <div className="text-sm text-gray-900 truncate max-w-[180px]">{member.email}</div>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4">
                              <div className="text-sm text-gray-900">{member.campus}</div>
                              <div className="text-xs text-gray-500">{member.department}</div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                              <div className="flex flex-col gap-1">
                                <span className={`px-2 py-1 text-xs rounded-full w-fit ${
                                  member.membershipType === "Student" 
                                    ? "bg-[#00629B]/10 text-[#00629B]" 
                                    : member.membershipType === "Professional"
                                    ? "bg-purple-100 text-purple-700"
                                    : "bg-green-100 text-green-700"
                                }`}>
                                  {member.membershipType}
                                </span>
                                <span className="text-xs text-gray-600">Since {member.membershipYear}</span>
                                <span className="text-xs text-green-600 font-medium">{member.status}</span>
                              </div>
                            </td>
                            <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex flex-col gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="h-8 w-full justify-center px-2"
                                  asChild
                                >
                                  <a href={`mailto:${member.email}`}>
                                    <Mail className="h-3.5 w-3.5 mr-1" />
                                    <span className="text-xs">Email</span>
                                  </a>
                                </Button>
                                {member.linkedin && (
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="h-8 w-full justify-center px-2 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/5"
                                    asChild
                                  >
                                    <a 
                                      href={member.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Linkedin className="h-3.5 w-3.5 mr-1" />
                                      <span className="text-xs">LinkedIn</span>
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                  
                  {/* Mobile View - For better mobile experience */}
                  <div className="lg:hidden mt-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-4">Mobile View</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {membersToShow.map((member) => (
                        <div key={member.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full bg-[#00629B]/10 flex items-center justify-center mr-3">
                                <User className="h-5 w-5 text-[#00629B]" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{member.name}</div>
                                <div className="text-xs text-gray-500">ID: {member.id}</div>
                              </div>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              member.membershipType === "Student" 
                                ? "bg-[#00629B]/10 text-[#00629B]" 
                                : member.membershipType === "Professional"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-green-100 text-green-700"
                            }`}>
                              {member.membershipType}
                            </span>
                          </div>
                          
                          <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                              <GraduationCap className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">School:</div>
                                <div className="text-gray-700">{member.school}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <BookOpen className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">Course:</div>
                                <div className="text-gray-700">{member.course}</div>
                              </div>
                            </div>
                            
                            <div className="flex items-start">
                              <Building className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">Campus:</div>
                                <div className="text-gray-700">{member.campus}</div>
                                <div className="text-xs text-gray-500">{member.department}</div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="font-medium mb-1">Contact:</div>
                              <div className="text-gray-700 mb-1">{member.email}</div>
                              {member.linkedin && (
                                <a 
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-xs text-[#0077B5] hover:text-[#0077B5]/80"
                                >
                                  <Linkedin className="h-3 w-3 mr-1" />
                                  LinkedIn Profile
                                </a>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex gap-2 mt-4">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex-1"
                              asChild
                            >
                              <a href={`mailto:${member.email}`}>
                                <Mail className="h-3.5 w-3.5 mr-1" />
                                Email
                              </a>
                            </Button>
                            {member.linkedin && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="flex-1 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/5"
                                asChild
                              >
                                <a 
                                  href={member.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Linkedin className="h-3.5 w-3.5 mr-1" />
                                  LinkedIn
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
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
                    onClick={clearAllFilters}
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
