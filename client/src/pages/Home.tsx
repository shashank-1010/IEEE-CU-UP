import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, BookOpen, Award, Users, Calendar, Cpu, Trophy, MapPin, GraduationCap, Building, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";

// Counter component with smooth animation
interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const Counter = ({ end, suffix = "", duration = 2000, delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStarted) {
          setTimeout(() => {
            setHasStarted(true);
          }, delay);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "100px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted, delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number;
    let animationFrameId: number;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="min-h-[60px] flex items-center justify-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={hasStarted ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold font-heading"
      >
        {count}{suffix}
      </motion.span>
    </div>
  );
};

// Parallax Content Components
const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string; 
  subheading: string; 
  heading: string; 
  description?: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}

const TextParallaxContent = ({ 
  imgUrl, 
  subheading, 
  heading, 
  description,
  children,
  icon: Icon 
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} description={description} icon={Icon} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl border-2 border-primary/20"
    >
      {/* REMOVED: Blue overlay div */}
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string; 
  heading: string; 
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const OverlayCopy = ({ 
  subheading, 
  heading, 
  description,
  icon: Icon 
}: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-4"
    >
      <div className="relative text-center max-w-3xl">
        {Icon && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-white/30 shadow-xl inline-flex"
          >
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
          </motion.div>
        )}
        <p className="mb-3 sm:mb-4 md:mb-5 text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {subheading}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-snug sm:leading-normal">
          {heading}
        </h2>
        
        {/* Added description text */}
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

const ParallaxSectionContent = () => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-primary font-heading">
      Advancing Technology for Humanity
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-6 text-xl text-muted-foreground md:text-2xl">
        IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Our student branch at Chandigarh University embodies this mission through innovation, collaboration, and excellence.
      </p>
      <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
        We provide students with opportunities to develop technical skills, leadership qualities, and professional networks that shape their future careers.
      </p>
      <Link href="/about">
        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-colors md:w-fit">
          Learn More <FiArrowUpRight className="ml-2 inline" />
        </Button>
      </Link>
    </div>
  </div>
);

// Circle Text Component - Only shows on desktop
const DrawCircleText = () => {
  return (
    <div className="relative hidden lg:block">
      <h1 className="max-w-2xl text-center text-4xl md:text-4xl leading-snug font-bold"><br></br>
        Advancing{" "}
        <span className="relative">
          Technology
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1 w-[120%] h-auto"
          >
            
          </svg>
        </span>{" "}<br></br>
        for Humanity
      </h1>
    </div>
  );
};

// Campus Info Section with Side-by-Side Layout
const CampusInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[#00629B]/10 flex items-center justify-center">
              <Building className="h-6 w-6 text-[#00629B]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-heading">About Chandigarh University UP Campus</h2>
              <p className="text-gray-600">A Premier Technical Institution in Uttar Pradesh</p>
            </div>
          </div>
        </motion.div>

        {/* Side-by-Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <img 
                src="https://www.vidyavision.com/CollegeUploads/Photos/2025-12-2-11-22-12_a%20(7).jpg"
                alt="Chandigarh University UP Campus"
                className="w-full h-auto object-cover aspect-[4/3]"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2064";
                }}
              />
            </div>
            {/* Location overlay removed as requested */}
          </motion.div>

          {/* Right Side - Written Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">World-Class Technical Education</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Chandigarh University Uttar Pradesh Campus is a modern educational hub strategically located in the heart of Uttar Pradesh. Designed to provide world-class technical education and cutting-edge research opportunities, the campus stands as a beacon of innovation and academic excellence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Spread across acres of state-of-the-art infrastructure, the campus offers a perfect blend of academic rigor and technological innovation, creating an ideal ecosystem for IEEE student activities and technical growth.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#00629B]" />
                Campus Highlights
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-[#00629B]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">50+ Programs</p>
                      <p className="text-xs text-gray-600">Technical & Professional</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center">
                      <Users className="h-5 w-5 text-[#00629B]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">10,000+ Students</p>
                      <p className="text-xs text-gray-600">Active Community</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center">
                      <Cpu className="h-5 w-5 text-[#00629B]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Modern Labs</p>
                      <p className="text-xs text-gray-600">Advanced Facilities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-300 flex items-center justify-center">
                      <Award className="h-5 w-5 text-[#00629B]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Industry Ties</p>
                      <p className="text-xs text-gray-600">Strong Collaborations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Why Choose CU UP Campus?</h4>
              <ul className="space-y-2">
                {[
                  "State-of-the-art laboratories and research facilities",
                  "Strong industry-academia partnerships",
                  "Active technical clubs and societies",
                  "Innovation and entrepreneurship development cell",
                  "Modern campus with all amenities",
                  "Focus on holistic student development"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[#00629B]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#00629B] rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Info - Added in text section instead of overlay */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white border border-blue-200 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#00629B]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Campus Location</p>
                  <p className="text-sm text-gray-700">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* IEEE Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 p-6 bg-gradient-to-r from-[#00629B]/5 to-blue-50 rounded-xl border border-[#00629B]/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#00629B]/10 flex items-center justify-center">
              <Globe className="h-6 w-6 text-[#00629B]" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">IEEE at CU UP Campus</h4>
              <p className="text-gray-700">
                The IEEE Student Branch leverages the campus's excellent infrastructure and resources to provide students with unparalleled opportunities in technical innovation, research, and professional development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-slate-50 py-24 lg:py-32 overflow-hidden border-b border-slate-200">
          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block py-2 px-4 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6 border border-primary/20">
                    Where Students Build the Future with AI
                  </span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading">
                    <span className="text-[#00629B]">IEEE</span> Student Branch <br />
                    <span className="text-red-500">Chandigarh </span>
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading">University</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                    Connect with the world's largest technical professional organization. 
                    Innovate, collaborate, and shape the future of technology with us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/join">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base shadow-md rounded-full">
                        Join Our Community
                      </Button>
                    </Link>
                    <Link href="/events">
                      <Button variant="outline" size="lg" className="px-8 h-12 text-base border-primary/20 hover:bg-slate-100 text-primary rounded-full">
                        View Events
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              {/* Circle Text on Right Side - Only shows on desktop */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hidden lg:block lg:mt-16"
              >
                <DrawCircleText />
              </motion.div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none -z-0" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* CU UP Campus Info with Side-by-Side Layout */}
        <CampusInfoSection />

        {/* Parallax Features Section */}
        <div className="bg-white">
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Innovate"
            heading="Cutting Edge Technology"
            description="Explore AI, IoT, and emerging tech through hands-on workshops and real-world projects"
            icon={Cpu}
          >
            <ParallaxSectionContent />
          </TextParallaxContent>
          
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Collaborate"
            heading="Global Community"
            description="Connect with 400,000+ students worldwide and build lifelong professional networks"
            icon={Users}
          >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24 pt-10 sm:pt-12 md:pt-14">
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Join a network of over 400,000 students worldwide. Collaborate with peers, 
                  learn from industry experts, and participate in global competitions and 
                  conferences that push the boundaries of technology.
                </p>
                <p className="mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our chapter facilitates connections that last a lifetime, providing mentorship 
                  opportunities and career guidance from experienced professionals.
                </p>
              </div>
              <h2 className="col-span-1 text-2xl sm:text-2xl md:text-3xl font-bold md:col-span-4 text-primary font-heading tracking-tight">
                Worldwide Network
              </h2>
            </div>
          </TextParallaxContent>
          
          <TextParallaxContent
            imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            subheading="Excel"
            heading="Achieve Excellence"
            description="Win competitions, publish research, and become a leader in your technical field"
            icon={Trophy}
          >
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:gap-10 md:gap-12 px-4 sm:px-6 pb-16 sm:pb-20 md:pb-24 pt-10 sm:pt-12 md:pt-14">
              <h2 className="col-span-1 text-2xl sm:text-2xl md:text-3xl font-bold md:col-span-4 text-primary font-heading tracking-tight">
                Award Winning
              </h2>
              <div className="col-span-1 md:col-span-8">
                <p className="mb-4 sm:mb-5 md:mb-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our members consistently excel in national and international competitions, 
                  research publications, and technical innovations. We celebrate achievements 
                  and foster an environment of continuous learning and growth.
                </p>
                <p className="mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                  With access to IEEE's vast resources, publications, and learning platforms, 
                  our students are equipped to become leaders in their respective fields.
                </p>
                <Link href="/achievements">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 sm:px-7 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg transition-colors w-full md:w-fit">
                    View Achievements <FiArrowUpRight className="ml-2 inline" />
                  </Button>
                </Link>
              </div>
            </div>
          </TextParallaxContent>
        </div>

        {/* Mission Section */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] bg-slate-100 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                    alt="Students collaborating on technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <p className="text-white font-medium text-lg">Fostering technological innovation for the benefit of humanity.</p>
                  </div>
                </div>
              </motion.div>
              
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-foreground mb-3 font-heading">Our Mission</h2>
                  <p className="text-muted-foreground text-lg">
                    We strive to create a vibrant community where students can explore cutting-edge technologies and develop professional skills.
                  </p>
                </div>
                
                <div className="grid gap-6">
                  {[
                    { icon: Globe, title: "Global Network", desc: "Access to IEEE's worldwide community of professionals and experts." },
                    { icon: BookOpen, title: "Technical Excellence", desc: "Workshops, seminars, and resources to stay ahead in technology." },
                    { icon: Award, title: "Professional Growth", desc: "Leadership opportunities and career development guidance." }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-primary border border-primary/20">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Animated Counters */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Active Members", value: 200, suffix: "+", duration: 2500, icon: Users },
                { label: "Yearly Events", value: 50, suffix: "+", duration: 2200, icon: Calendar },
                { label: "Technical Societies", value: 6, suffix: "", duration: 1500, icon: Cpu },
                { label: "Awards Won", value: 15, suffix: "+", duration: 2000, icon: Trophy },
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  className="space-y-4"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <Counter 
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={stat.duration}
                    delay={i * 200}
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.1) + 0.5, duration: 0.5 }}
                    className="text-blue-100 font-medium text-sm md:text-base"
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-slate-50">
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-heading">Ready to start your journey?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join IEEE Chandigarh University Student Branch today and open doors to endless possibilities in the world of technology.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base rounded-full">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
