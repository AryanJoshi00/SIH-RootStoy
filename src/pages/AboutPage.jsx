import { useState, useEffect, useRef } from "react";
import {
  Leaf,
  Shield,
  Globe,
  Users,
  Award,
  Zap,
  Database,
  Cloud,
  Lock,
  TestTube,
  MapPin,
  CheckCircle,
  QrCode,
  Code,
  Container,
  Server,
} from "lucide-react";

const About = () => {
  const [counters, setCounters] = useState({
    productsVerified: 0,
    farmersConnected: 0,
    countriesReached: 0,
    labTestsConducted: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const impactSectionRef = useRef(null);

  const targetCounters = {
    productsVerified: 125000,
    farmersConnected: 2500,
    countriesReached: 45,
    labTestsConducted: 50000,
  };

  // Animate counters when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            const animateCounter = (key, target) => {
              let current = 0;
              const increment = target / steps;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
              }, stepDuration);
            };

            Object.entries(targetCounters).forEach(([key, target]) => {
              animateCounter(key, target);
            });
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (impactSectionRef.current) {
      observer.observe(impactSectionRef.current);
    }

    return () => {
      if (impactSectionRef.current) {
        observer.unobserve(impactSectionRef.current);
      }
    };
  }, [hasAnimated]);

  const team = [
    {
      name: "Arshad Shaikh",
      role: "React Native App Developer",
      description:
        "Expert in mobile app development and cross-platform solutions",
    },
    {
      name: "Aryan Joshi",
      role: "React Web Developer, UI/UX Developer",
      description:
        "Specialist in modern web technologies and user experience design",
    },
    {
      name: "Bhavik Thakkar",
      role: "Blockchain / Hyperledger Fabric Specialist",
      description:
        "Expert in distributed systems and blockchain technology implementation",
    },
    {
      name: "Brahmi Matey",
      role: "AI Integrator, Full Stack Developer",
      description:
        "AI and machine learning integration specialist with full-stack expertise",
    },
    {
      name: "Mrunal Shah",
      role: "Team Co-ordinator",
      description: "Valuable team member contributing to project success",
    },
    {
      name: "Pranjal Chaudhari",
      role: "Team Leader, Full Stack Developer",
      description:
        "Project leader with comprehensive full-stack development expertise",
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️", description: "Frontend Framework" },
    { name: "Express.js", icon: "🚀", description: "Backend Framework" },
    { name: "Node.js", icon: "🟢", description: "Backend Runtime" },
    { name: "Go", icon: "🔵", description: "Programming Language" },
    { name: "MongoDB", icon: "🍃", description: "Database" },
    { name: "Blockchain", icon: "⛓️", description: "Distributed Ledger" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "FHIR", icon: "🏥", description: "Healthcare Standards" },
    { name: "REST API", icon: "🔗", description: "API Integration" },
    { name: "Red Hat OpenShift", icon: "☁️", description: "Cloud Platform" },
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable records ensure tamper-proof traceability",
    },
    {
      icon: Leaf,
      title: "Transparency",
      description: "Complete visibility into every step of the supply chain",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Promoting eco-friendly and ethical farming practices",
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Connecting farmers and consumers worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-warm">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-herb-500 to-herb-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            About ROOTSTORY
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing the Ayurvedic industry by combining ancient
            wisdom with cutting-edge blockchain technology to ensure complete
            transparency and trust in every product.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              ROOTSTORY brings Ayurveda's ancient wisdom into the modern world
              with blockchain-powered trust and transparency, ensuring every
              herb you consume is authentic, safe, and sustainably sourced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="card p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-herb-500 to-herb-600 rounded-2xl flex items-center justify-center group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section ref={impactSectionRef} className="py-20 bg-herb-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-white/90">
              Numbers that reflect our commitment to transparency and quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counters.productsVerified.toLocaleString()}+
              </div>
              <div className="text-white/90">Products Verified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counters.farmersConnected.toLocaleString()}+
              </div>
              <div className="text-white/90">Farmers Connected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counters.countriesReached}+
              </div>
              <div className="text-white/90">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counters.labTestsConducted.toLocaleString()}+
              </div>
              <div className="text-white/90">Lab Tests Conducted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Meet the Team Behind the Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are six innovators, dreamers, and problem-solvers who came
              together to turn a vision into reality for the Ministry of Ayush –
              SIH 2025 challenge. United by curiosity, caffeine, and a shared
              passion for technology and Ayurveda, we've woven together code,
              design, and blockchain wizardry to build a solution that traces
              every herb from farm to formulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-herb-500 to-herb-600 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-herb-500 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-neutral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with modern, secure, and scalable technologies to ensure
              reliability and performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300 w-48"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ROOTSTORY
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-herb-500/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-herb-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Trust & Transparency
              </h3>
              <p className="text-gray-600">
                We believe in complete transparency. Every step of the supply
                chain is recorded and verifiable on the blockchain.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-herb-500/10 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-herb-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We're committed to promoting sustainable farming practices and
                environmental conservation in the Ayurvedic industry.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-herb-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-herb-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We build bridges between farmers, manufacturers, and consumers,
                creating a connected ecosystem of trust.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-herb-500/10 rounded-lg flex items-center justify-center mb-4">
                <TestTube className="w-6 h-6 text-herb-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing and quality checks to
                ensure the highest standards of purity and safety.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-herb-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-herb-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously innovate to bring the latest technology to
                traditional Ayurvedic practices.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 bg-herb-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-herb-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Impact
              </h3>
              <p className="text-gray-600">
                We're working to make authentic Ayurvedic products accessible
                and trustworthy worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;