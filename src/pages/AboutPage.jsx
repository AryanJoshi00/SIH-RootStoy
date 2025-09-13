import {
  Shield,
  Lock,
  Globe,
  Users,
  Award,
  Heart,
  Code,
  Database,
  Cloud,
  Zap,
  Layers,
  Cpu,
  Server,
  GitBranch,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/Card";
import Badge from "../components/ui/Badge";

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Every product is verified through tamper-proof blockchain technology ensuring complete transparency and authenticity.",
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description:
        "Your personal information is protected with enterprise-grade encryption and privacy-first design principles.",
    },
    {
      icon: Globe,
      title: "Global Traceability",
      description:
        "Track products from their origin farms across different countries with real-time location data.",
    },
    {
      icon: Users,
      title: "Community Trust",
      description:
        "Built by and for the Ayurvedic community to ensure traditional knowledge meets modern transparency.",
    },
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Ayurvedic Expert",
      description:
        "15+ years in traditional medicine and herb quality assessment.",
    },
    {
      name: "Rajesh Kumar",
      role: "Blockchain Developer",
      description:
        "Expert in distributed systems and supply chain transparency.",
    },
    {
      name: "Anita Patel",
      role: "Sustainability Lead",
      description:
        "Passionate about ethical sourcing and environmental impact.",
    },
  ];

  const stats = [
    { label: "Products Verified", value: "10,000+" },
    { label: "Farmers Connected", value: "500+" },
    { label: "Countries Covered", value: "15+" },
    { label: "Lab Tests Conducted", value: "50,000+" },
  ];

  return (
    <div className="min-h-screen bg-earth-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow shadow-2xl">
            <Shield className="h-12 w-12 text-white animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-earth-900 mb-8 animate-fade-in-up">
            About AYURPHORIA
          </h1>
          <p
            className="text-xl text-earth-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            We're revolutionizing the Ayurvedic herb industry by providing
            complete transparency and traceability through blockchain
            technology. Every herb tells a story, and we make sure you can trust
            every chapter.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="bg-emerald-50 border-emerald-200">
            <CardContent>
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-earth-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-earth-600 max-w-4xl mx-auto leading-relaxed">
                  To restore trust in the Ayurvedic herb supply chain by
                  providing consumers with complete transparency about the
                  origin, quality, and journey of their herbs. We believe that
                  traditional medicine deserves modern verification.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-6">
              Why AYURPHORIA?
            </h2>
            <p className="text-lg text-earth-600 max-w-3xl mx-auto">
              We combine traditional Ayurvedic wisdom with cutting-edge
              technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group bg-white/80 backdrop-blur-sm border-0 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-herb-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative z-10">
                    <div className="flex items-start space-x-6 p-4">
                      <div className="w-18 h-18 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-9 w-9 text-emerald-600 group-hover:animate-bounce" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-earth-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-earth-600 leading-relaxed group-hover:text-earth-700 transition-colors duration-300">
                          {feature.description}
                        </p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-full h-1 bg-gradient-to-r from-emerald-500 to-herb-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <Card className="bg-herb-50 border-herb-200">
            <CardContent>
              <div className="text-center py-16">
                <h2 className="text-3xl font-display font-bold text-earth-900 mb-12">
                  Our Impact
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                        <div className="text-2xl font-bold text-emerald-600">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-earth-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-6">
              Our Team
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Experts in Ayurveda, technology, and sustainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent>
                  <div className="w-24 h-24 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Users className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-earth-900 mb-2">
                    {member.name}
                  </h3>
                  <Badge className="mb-4 text-sm px-4 py-2">
                    {member.role}
                  </Badge>
                  <p className="text-earth-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-20">
          <Card className="bg-slate-50 border-emerald-200">
            <CardContent>
              <div className="py-16">
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
                    Technology Stack
                  </h2>
                  <p className="text-lg text-earth-600 max-w-2xl mx-auto">
                    Built with modern, secure, and scalable technologies that
                    power our blockchain-verified platform
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    {
                      name: "Blockchain",
                      icon: Layers,
                      color: "text-purple-600",
                      bg: "bg-purple-100",
                    },
                    {
                      name: "React",
                      icon: Code,
                      color: "text-blue-600",
                      bg: "bg-blue-100",
                    },
                    {
                      name: "Node.js",
                      icon: Server,
                      color: "text-green-600",
                      bg: "bg-green-100",
                    },
                    {
                      name: "PostgreSQL",
                      icon: Database,
                      color: "text-indigo-600",
                      bg: "bg-indigo-100",
                    },
                    {
                      name: "AWS",
                      icon: Cloud,
                      color: "text-orange-600",
                      bg: "bg-orange-100",
                    },
                    {
                      name: "Docker",
                      icon: Cpu,
                      color: "text-cyan-600",
                      bg: "bg-cyan-100",
                    },
                    {
                      name: "Kubernetes",
                      icon: GitBranch,
                      color: "text-blue-700",
                      bg: "bg-blue-100",
                    },
                    {
                      name: "Redis",
                      icon: Zap,
                      color: "text-red-600",
                      bg: "bg-red-100",
                    },
                  ].map((tech, index) => {
                    const Icon = tech.icon;
                    return (
                      <div key={index} className="text-center group">
                        <div
                          className={`w-20 h-20 ${tech.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                        >
                          <Icon className={`h-8 w-8 ${tech.color}`} />
                        </div>
                        <span className="text-sm font-semibold text-earth-700 group-hover:text-earth-900 transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <Card className="bg-herb-50 border-herb-200">
            <CardContent>
              <div className="text-center py-16">
                <h2 className="text-3xl font-display font-bold text-earth-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-earth-600 mb-12 max-w-2xl mx-auto">
                  Have questions about our platform or want to partner with us?
                  We'd love to hear from you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <span className="text-emerald-600 font-semibold text-xl">
                        📧
                      </span>
                    </div>
                    <h3 className="font-bold text-earth-900 mb-2">Email</h3>
                    <p className="text-earth-600">info@ayurphoria.com</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <span className="text-emerald-600 font-semibold text-xl">
                        📱
                      </span>
                    </div>
                    <h3 className="font-bold text-earth-900 mb-2">Phone</h3>
                    <p className="text-earth-600">+91 98765 43210</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <span className="text-emerald-600 font-semibold text-xl">
                        🌐
                      </span>
                    </div>
                    <h3 className="font-bold text-earth-900 mb-2">Website</h3>
                    <p className="text-earth-600">www.ayurphoria.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
