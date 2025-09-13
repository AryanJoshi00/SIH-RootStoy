import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  QrCode,
  Shield,
  MapPin,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Leaf,
  Lock,
  Sparkles,
} from "lucide-react";
import Button from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import QRScanner from "../components/QRScanner";
import toast from "react-hot-toast";

const HomePage = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const navigate = useNavigate();

  const handleScan = (code) => {
    setIsScannerOpen(false);
    toast.success("QR Code scanned successfully!");
    navigate(`/product/${code}`);
  };

  const features = [
    {
      icon: QrCode,
      title: "Instant Verification",
      description:
        "Scan QR codes to instantly verify product authenticity and traceability.",
      color: "bg-blue-600",
    },
    {
      icon: MapPin,
      title: "Journey Tracking",
      description:
        "Follow your herb's complete journey from farm to your hands.",
      color: "bg-emerald-600",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description:
        "Tamper-proof records ensure complete transparency and trust.",
      color: "bg-slate-700",
    },
    {
      icon: CheckCircle,
      title: "Lab Certifications",
      description: "View detailed lab test results and quality certifications.",
      color: "bg-amber-600",
    },
  ];

  const faqs = [
    {
      question: "How does QR code verification work?",
      answer:
        "Each product has a unique QR code that links to blockchain-verified data about its origin, processing, and quality tests.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, all data is stored on a secure blockchain network with encryption and tamper-proof records.",
    },
    {
      question: "What if a product is recalled?",
      answer:
        "You'll be immediately notified through our recall system and can check batch safety status anytime.",
    },
    {
      question: "Can I trust the lab results?",
      answer:
        "All lab results are from certified laboratories and are verified through our blockchain system.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-herb-50">
        {/* Clean Background with Subtle Pattern */}
        <div className="absolute inset-0 bg-herb-50"></div>

        {/* Minimal Organic Shapes */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] organic-shape bg-herb-100/30 animate-organic-drift"></div>
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] organic-shape bg-mint-100/25 animate-organic-drift"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #32B768 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Floating Botanical Elements - Enhanced */}
        <div className="absolute top-20 right-1/4 text-herb-400/40 animate-float">
          <Leaf className="h-16 w-16" />
        </div>
        <div
          className="absolute top-1/3 left-1/4 text-mint-400/35 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Leaf className="h-12 w-12" />
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 text-amber-400/40 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <Leaf className="h-14 w-14" />
        </div>
        <div
          className="absolute top-1/2 right-10 text-herb-400/30 animate-float"
          style={{ animationDelay: "6s" }}
        >
          <Leaf className="h-8 w-8" />
        </div>
        <div
          className="absolute bottom-20 left-1/3 text-mint-400/25 animate-float"
          style={{ animationDelay: "8s" }}
        >
          <Leaf className="h-10 w-10" />
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #32B768 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4">
          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced Typography with Text Shadow */}
            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 text-herb-800 leading-tight">
              AYURPHORIA
            </h1>

            <p className="text-3xl md:text-4xl font-display font-bold text-herb-800 mb-6 leading-tight">
              No ayurphobia, only
              <span className="text-herb-600 ml-3 relative">
                Ayurphoria
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-herb-500 to-mint-500 rounded-full opacity-60"></div>
              </span>
            </p>

            <p className="text-xl md:text-2xl text-herb-700 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              Trust your Ayurvedic herbs with complete transparency. Scan to
              verify your herb's journey from farm to your hands with
              blockchain-verified provenance data.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => setIsScannerOpen(true)}
                className="btn-scan flex items-center space-x-3 px-8 py-4 text-lg font-semibold group"
              >
                <QrCode className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                <span>Scan QR Code</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
              </button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/scan")}
                className="flex items-center space-x-3 px-8 py-4 text-lg font-semibold group"
              >
                <span>Go to Scanner</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="flex items-center space-x-3 text-herb-700 group">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-herb-800">
                    100% Authentic
                  </div>
                  <div className="text-sm text-herb-600">Verified Source</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-herb-700 group">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-herb-800">
                    Blockchain Secured
                  </div>
                  <div className="text-sm text-herb-600">Tamper-Proof</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-herb-700 group">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-herb-800">
                    Organic Certified
                  </div>
                  <div className="text-sm text-herb-600">Premium Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative bg-white">
        {/* Minimal Background Shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] organic-shape bg-herb-100/20 animate-organic-drift"></div>
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] organic-shape bg-mint-100/20 animate-organic-drift"
          style={{ animationDelay: "6s" }}
        ></div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-10 text-herb-400">
            <Leaf className="h-8 w-8" />
          </div>
          <div className="absolute bottom-20 right-10 text-mint-400">
            <Shield className="h-6 w-6" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400">
            <QrCode className="h-4 w-4" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-display font-black mb-8 text-herb-800 leading-tight">
              Why Choose AYURPHORIA?
            </h2>
            <p className="text-2xl text-herb-700 max-w-4xl mx-auto leading-relaxed font-light">
              We provide complete transparency in the Ayurvedic herb supply
              chain through cutting-edge blockchain technology and traditional
              wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-herb-50/50 to-mint-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="relative z-10 p-8">
                    <div
                      className={`w-24 h-24 ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 relative`}
                    >
                      <Icon className="h-12 w-12 text-white relative z-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-herb-900 mb-4 group-hover:text-herb-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-herb-700 leading-relaxed text-lg group-hover:text-herb-600 transition-colors duration-300">
                      {feature.description}
                    </p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-full h-1 bg-gradient-to-r from-herb-500 to-mint-500 rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Blockchain Demo Section */}
      <section className="py-32 px-6 relative bg-slate-900 overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 text-blue-400 animate-pulse">
            <QrCode className="h-16 w-16" />
          </div>
          <div
            className="absolute bottom-20 right-1/4 text-emerald-400 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <Shield className="h-20 w-20" />
          </div>
          <div
            className="absolute top-1/2 left-10 text-amber-400 animate-pulse"
            style={{ animationDelay: "4s" }}
          >
            <Leaf className="h-12 w-12" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-black mb-8 text-white">
              Try It Now
            </h2>
            <p className="text-2xl text-slate-300 font-light">
              Experience our blockchain-verified platform with these sample
              products
            </p>
          </div>

          {/* Animated Blockchain Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                code: "A123XY",
                name: "Ashwagandha",
                status: "Certified",
                gradient: "from-blue-500 to-blue-600",
                description: "Premium quality root extract",
                hash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef12",
              },
              {
                code: "B456YZ",
                name: "Turmeric",
                status: "Certified",
                gradient: "from-emerald-500 to-emerald-600",
                description: "High curcumin content",
                hash: "0x2b3c4d5e6f7890abcdef1234567890abcdef1234",
              },
              {
                code: "C789AB",
                name: "Brahmi",
                status: "Pending",
                gradient: "from-amber-500 to-amber-600",
                description: "Fresh leaf processing",
                hash: "0x3c4d5e6f7890abcdef1234567890abcdef123456",
              },
            ].map((product, index) => (
              <div
                key={product.code}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                onClick={() => navigate(`/product/${product.code}`)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}
                    >
                      <QrCode className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 font-mono">
                        Block #{index + 1}
                      </div>
                      <div className="text-xs text-slate-500">Verified</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-400 mb-3 font-mono text-sm">
                    Code: {product.code}
                  </p>
                  <p className="text-slate-300 mb-4 text-sm">
                    {product.description}
                  </p>

                  {/* Blockchain Hash */}
                  <div className="mb-4">
                    <div className="text-xs text-slate-500 mb-1">
                      Block Hash:
                    </div>
                    <div className="text-xs text-slate-400 font-mono break-all">
                      {product.hash}
                    </div>
                  </div>

                  <span
                    className={`inline-block px-4 py-2 rounded-full text-xs font-semibold ${
                      product.status === "Certified"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 relative -mt-8">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-earth-50 to-herb-50"></div>
        <div className="absolute inset-0 bg-gradient-organic"></div>

        {/* Organic Background Shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] organic-shape bg-gradient-to-bl from-earth-200/15 to-sand-200/20 animate-organic-drift"></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] organic-shape bg-gradient-to-tr from-herb-200/15 to-mint-200/20 animate-organic-drift"
          style={{ animationDelay: "10s" }}
        ></div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 text-herb-400">
            <Leaf className="h-10 w-10" />
          </div>
          <div className="absolute bottom-20 right-20 text-mint-400">
            <Shield className="h-8 w-8" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400">
            <QrCode className="h-6 w-6" />
          </div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-black mb-8 text-herb-800">
              Frequently Asked Questions
            </h2>
            <p className="text-2xl text-herb-700 font-light">
              Everything you need to know about AYURPHORIA
            </p>
          </div>

          <div className="space-y-10">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-organic hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                      <HelpCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-herb-900 mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-herb-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Scanner Modal */}
      <QRScanner
        isOpen={isScannerOpen}
        onScan={handleScan}
        onClose={() => setIsScannerOpen(false)}
      />
    </div>
  );
};

export default HomePage;
