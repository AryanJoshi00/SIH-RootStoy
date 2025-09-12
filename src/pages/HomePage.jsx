import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Shield, MapPin, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import QRScanner from '../components/QRScanner';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const navigate = useNavigate();

  const handleScan = (code) => {
    setIsScannerOpen(false);
    toast.success('QR Code scanned successfully!');
    navigate(`/product/${code}`);
  };

  const handleScanError = () => {
    toast.error('Failed to scan QR code. Please try again.');
  };

  const features = [
    {
      icon: QrCode,
      title: 'Instant Verification',
      description: 'Scan QR codes to instantly verify product authenticity and traceability.'
    },
    {
      icon: MapPin,
      title: 'Journey Tracking',
      description: 'Follow your herb\'s complete journey from farm to your hands.'
    },
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Tamper-proof records ensure complete transparency and trust.'
    },
    {
      icon: CheckCircle,
      title: 'Lab Certifications',
      description: 'View detailed lab test results and quality certifications.'
    }
  ];

  const faqs = [
    {
      question: 'How does QR code verification work?',
      answer: 'Each product has a unique QR code that links to blockchain-verified data about its origin, processing, and quality tests.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, all data is stored on a secure blockchain network with encryption and tamper-proof records.'
    },
    {
      question: 'What if a product is recalled?',
      answer: 'You\'ll be immediately notified through our recall system and can check batch safety status anytime.'
    },
    {
      question: 'Can I trust the lab results?',
      answer: 'All lab results are from certified laboratories and are verified through our blockchain system.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-earth-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-earth-900 mb-6">
              Trust Your
              <span className="text-emerald-600"> Ayurvedic Herbs</span>
            </h1>
            <p className="text-xl text-earth-600 mb-8 leading-relaxed">
              Scan to verify your Ayurvedic herb's complete journey from farm to your hands. 
              Transparent, blockchain-verified provenance data for complete peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setIsScannerOpen(true)}
                className="flex items-center space-x-2"
              >
                <QrCode className="h-5 w-5" />
                <span>Scan QR Code</span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/scan')}
                className="flex items-center space-x-2"
              >
                <span>Go to Scanner</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
              Why Choose HerbTrace?
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              We provide complete transparency in the Ayurvedic herb supply chain 
              through cutting-edge blockchain technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardContent>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-earth-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-earth-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
              Try It Now
            </h2>
            <p className="text-lg text-earth-600">
              Experience our platform with these sample product codes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { code: 'A123XY', name: 'Ashwagandha', status: 'Certified' },
              { code: 'B456YZ', name: 'Turmeric', status: 'Certified' },
              { code: 'C789AB', name: 'Brahmi', status: 'Pending' }
            ].map((product) => (
              <Card key={product.code} className="hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/product/${product.code}`)}>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <QrCode className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-earth-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-earth-600 mb-2">
                      Code: {product.code}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Certified' 
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-earth-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-earth-600">
              Everything you need to know about HerbTrace
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-earth-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-earth-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
