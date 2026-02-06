import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, ExternalLink, User, Phone, Mail, GraduationCap, BookOpen, Building, Award, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Course and department options
const courseOptions = ["B.Tech", "M.Tech", "B.E.", "M.E.", "Ph.D", "M.Sc", "B.Sc", "MBA", "Other"];
const departmentOptions = ["Computer Science", "Electrical Engineering", "Electronics & Communication", "Mechanical Engineering", "Civil Engineering", "Information Technology", "Artificial Intelligence", "Data Science", "Cyber Security", "Other"];
const schoolOptions = ["School of Engineering", "School of Computing", "School of Business", "School of Sciences", "School of Architecture"];

export default function Register() {
  const [isIEEE, setIsIEEE] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    uid: "",
    email: "",
    course: "",
    department: "",
    school: "",
    membershipNumber: "",
    membershipType: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required";
    if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = "Enter a valid 10-digit phone number";
    if (!formData.uid.trim()) newErrors.uid = "UID is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[a-zA-Z0-9._%+-]+@(cuchd\.in|chandigarh\.edu\.in|chandigarhuniversity\.ac\.in)$/.test(formData.email)) {
      newErrors.email = "Please use your official college email";
    }
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.school) newErrors.school = "School is required";
    if (!formData.membershipNumber.trim()) newErrors.membershipNumber = "IEEE Membership Number is required";
    if (!/^[0-9]+$/.test(formData.membershipNumber)) newErrors.membershipNumber = "Enter a valid membership number";
    if (!formData.membershipType) newErrors.membershipType = "Membership Type is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        contact: "",
        uid: "",
        email: "",
        course: "",
        department: "",
        school: "",
        membershipNumber: "",
        membershipType: ""
      });
      setErrors({});
    }, 1500);
  };

  const resetForm = () => {
    setSubmitStatus("idle");
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow bg-white">
        {/* Banner Section */}
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
                  IEEE Registration
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                  Join IEEE Student Branch at Chandigarh University
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Membership Check Step */}
              {isIEEE === null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-2 border-[#00629B]/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-[#00629B]">
                        Are you an IEEE Member?
                      </CardTitle>
                      <CardDescription>
                        Please select your membership status to proceed with registration
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <button
                            onClick={() => setIsIEEE(true)}
                            className="w-full p-8 border-2 border-green-200 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-200 flex flex-col items-center justify-center group"
                          >
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200">
                              <CheckCircle className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Yes, I'm an IEEE Member</h3>
                            <p className="text-gray-600 text-sm">Proceed to registration form</p>
                          </button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <button
                            onClick={() => setIsIEEE(false)}
                            className="w-full p-8 border-2 border-red-200 rounded-xl bg-red-50 hover:bg-red-100 transition-all duration-200 flex flex-col items-center justify-center group"
                          >
                            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-200">
                              <AlertCircle className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">No, I'm not an IEEE Member</h3>
                            <p className="text-gray-600 text-sm">Purchase membership first</p>
                          </button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Not an IEEE Member Message */}
              {isIEEE === false && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-2 border-red-200">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-red-600">
                            IEEE Membership Required
                          </CardTitle>
                          <CardDescription>
                            Please purchase an IEEE membership to join the student branch
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <p className="text-gray-700">
                          To register for IEEE Student Branch at Chandigarh University, you must first become an IEEE member. 
                          IEEE membership provides access to technical resources, conferences, publications, and networking opportunities.
                        </p>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h4 className="font-bold text-lg text-[#00629B] mb-2">Benefits of IEEE Membership:</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Access to IEEE Xplore Digital Library</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Discounted rates on conferences and publications</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Networking with professionals worldwide</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Career development resources</span>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button
                            size="lg"
                            className="bg-[#00629B] hover:bg-[#00629B]/90 text-white flex-1"
                            asChild
                          >
                            <a 
                              href="https://www.ieee.org/membership/join/index.html" 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-5 w-5 mr-2" />
                              Join IEEE Now
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-[#00629B] text-[#00629B] hover:bg-[#00629B]/5 flex-1"
                            onClick={() => setIsIEEE(null)}
                          >
                            Back to Options
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Registration Form */}
              {isIEEE === true && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-2 border-[#00629B]/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#00629B]/10 flex items-center justify-center">
                          <Award className="h-6 w-6 text-[#00629B]" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-[#00629B]">
                            Student Branch Registration
                          </CardTitle>
                          <CardDescription>
                            Fill in your details to join IEEE Student Branch at Chandigarh University
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Success/Error Messages */}
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-green-800">Registration Successful!</h4>
                              <p className="text-green-700 text-sm mt-1">
                                Thank you for registering with IEEE Student Branch. We'll contact you soon.
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-4 border-green-300 text-green-700 hover:bg-green-100"
                            onClick={resetForm}
                          >
                            Register Another Member
                          </Button>
                        </motion.div>
                      )}

                      {submitStatus === "error" && Object.keys(errors).length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold text-red-800">Please fix the following errors:</h4>
                              <ul className="text-red-700 text-sm mt-1 list-disc list-inside">
                                {Object.values(errors).map((error, index) => (
                                  <li key={index}>{error}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Personal Information */}
                          <div className="space-y-4">
                            <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                              <User className="h-5 w-5 text-[#00629B]" />
                              Personal Information
                            </h3>
                            
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-gray-700">
                                Name *
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className={`${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="contact" className="text-gray-700">
                                Contact No *
                              </Label>
                              <Input
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                placeholder="10-digit phone number"
                                className={`${errors.contact ? "border-red-500 focus:border-red-500" : ""}`}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="uid" className="text-gray-700">
                                UID *
                              </Label>
                              <Input
                                id="uid"
                                name="uid"
                                value={formData.uid}
                                onChange={handleInputChange}
                                placeholder="University ID"
                                className={`${errors.uid ? "border-red-500 focus:border-red-500" : ""}`}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-gray-700">
                                College Email *
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="name@cuchd.in"
                                className={`${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                              />
                              <p className="text-xs text-gray-500">
                                Use your official college email only
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                              <GraduationCap className="h-5 w-5 text-[#00629B]" />
                              Academic Information
                            </h3>
                            
                            <div className="space-y-2">
                              <Label htmlFor="course" className="text-gray-700">
                                Course *
                              </Label>
                              <Select
                                value={formData.course}
                                onValueChange={(value) => handleSelectChange("course", value)}
                              >
                                <SelectTrigger className={`${errors.course ? "border-red-500" : ""}`}>
                                  <SelectValue placeholder="Select your course" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  {courseOptions.map((course) => (
                                    <SelectItem key={course} value={course}>
                                      {course}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="department" className="text-gray-700">
                                Department *
                              </Label>
                              <Select
                                value={formData.department}
                                onValueChange={(value) => handleSelectChange("department", value)}
                              >
                                <SelectTrigger className={`${errors.department ? "border-red-500" : ""}`}>
                                  <SelectValue placeholder="Select your department" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  {departmentOptions.map((dept) => (
                                    <SelectItem key={dept} value={dept}>
                                      {dept}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="school" className="text-gray-700">
                                School *
                              </Label>
                              <Select
                                value={formData.school}
                                onValueChange={(value) => handleSelectChange("school", value)}
                              >
                                <SelectTrigger className={`${errors.school ? "border-red-500" : ""}`}>
                                  <SelectValue placeholder="Select your school" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  {schoolOptions.map((school) => (
                                    <SelectItem key={school} value={school}>
                                      {school}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        {/* IEEE Membership Information */}
                        <div className="space-y-4 pt-6 border-t border-gray-200">
                          <h3 className="font-bold text-lg text-gray-800 flex items-center gap-2">
                            <Award className="h-5 w-5 text-[#00629B]" />
                            IEEE Membership Information
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="membershipNumber" className="text-gray-700">
                                IEEE Membership Number *
                              </Label>
                              <Input
                                id="membershipNumber"
                                name="membershipNumber"
                                value={formData.membershipNumber}
                                onChange={handleInputChange}
                                placeholder="Enter your IEEE membership number"
                                className={`${errors.membershipNumber ? "border-red-500 focus:border-red-500" : ""}`}
                              />
                              <p className="text-xs text-gray-500">
                                Find this in your IEEE membership confirmation email
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="membershipType" className="text-gray-700">
                                Membership Type *
                              </Label>
                              <Select
                                value={formData.membershipType}
                                onValueChange={(value) => handleSelectChange("membershipType", value)}
                              >
                                <SelectTrigger className={`${errors.membershipType ? "border-red-500" : ""}`}>
                                  <SelectValue placeholder="Select membership type" />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                  <SelectItem value="Student Member">Student Member</SelectItem>
                                  <SelectItem value="Graduate Student Member">Graduate Student Member</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        {/* Form Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8">
                          <Button
                            type="submit"
                            size="lg"
                            className="bg-[#00629B] hover:bg-[#00629B]/90 text-white flex-1"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Processing...
                              </>
                            ) : (
                              "Submit Registration"
                            )}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
                            onClick={() => setIsIEEE(null)}
                          >
                            Back
                          </Button>
                        </div>

                        <p className="text-sm text-gray-500 text-center pt-4">
                          By registering, you agree to our terms and conditions. Your information will be used for IEEE Student Branch purposes only.
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
