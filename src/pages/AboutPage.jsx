import { Shield, Lock, Globe, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Every product is verified through tamper-proof blockchain technology ensuring complete transparency and authenticity.'
    },
    {
      icon: Lock,
      title: 'Data Privacy',
      description: 'Your personal information is protected with enterprise-grade encryption and privacy-first design principles.'
    },
    {
      icon: Globe,
      title: 'Global Traceability',
      description: 'Track products from their origin farms across different countries with real-time location data.'
    },
    {
      icon: Users,
      title: 'Community Trust',
      description: 'Built by and for the Ayurvedic community to ensure traditional knowledge meets modern transparency.'
    }
  ];

  const team = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Ayurvedic Expert',
      description: '15+ years in traditional medicine and herb quality assessment.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Blockchain Developer',
      description: 'Expert in distributed systems and supply chain transparency.'
    },
    {
      name: 'Anita Patel',
      role: 'Sustainability Lead',
      description: 'Passionate about ethical sourcing and environmental impact.'
    }
  ];

  const stats = [
    { label: 'Products Verified', value: '10,000+' },
    { label: 'Farmers Connected', value: '500+' },
    { label: 'Countries Covered', value: '15+' },
    { label: 'Lab Tests Conducted', value: '50,000+' }
  ];

  return (
    <div className="min-h-screen bg-earth-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-earth-900 mb-6">
            About HerbTrace
          </h1>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the Ayurvedic herb industry by providing complete transparency 
            and traceability through blockchain technology. Every herb tells a story, and we make 
            sure you can trust every chapter.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <Card>
            <CardContent>
              <div className="text-center py-12">
                <Heart className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
                <h2 className="text-3xl font-display font-bold text-earth-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-earth-600 max-w-4xl mx-auto leading-relaxed">
                  To restore trust in the Ayurvedic herb supply chain by providing consumers with 
                  complete transparency about the origin, quality, and journey of their herbs. 
                  We believe that traditional medicine deserves modern verification.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
              Why HerbTrace?
            </h2>
            <p className="text-lg text-earth-600">
              We combine traditional Ayurvedic wisdom with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-earth-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-earth-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <Card>
            <CardContent>
              <div className="text-center py-12">
                <h2 className="text-3xl font-display font-bold text-earth-900 mb-8">
                  Our Impact
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-earth-600">
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
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-earth-600">
              Experts in Ayurveda, technology, and sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent>
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-earth-900 mb-1">
                    {member.name}
                  </h3>
                  <Badge className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-earth-600 text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <Card>
            <CardContent>
              <div className="py-12">
                <div className="text-center mb-8">
                  <Award className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                  <h2 className="text-3xl font-display font-bold text-earth-900 mb-4">
                    Technology Stack
                  </h2>
                  <p className="text-lg text-earth-600">
                    Built with modern, secure, and scalable technologies
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    'Blockchain',
                    'React',
                    'Node.js',
                    'PostgreSQL',
                    'AWS',
                    'Docker',
                    'Kubernetes',
                    'Redis'
                  ].map((tech, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-earth-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-semibold text-earth-700">
                          {tech}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <Card>
            <CardContent>
              <div className="text-center py-12">
                <h2 className="text-3xl font-display font-bold text-earth-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-earth-600 mb-8 max-w-2xl mx-auto">
                  Have questions about our platform or want to partner with us? 
                  We'd love to hear from you.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-emerald-600 font-semibold">📧</span>
                    </div>
                    <h3 className="font-semibold text-earth-900 mb-1">Email</h3>
                    <p className="text-earth-600 text-sm">info@herbtrace.com</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-emerald-600 font-semibold">📱</span>
                    </div>
                    <h3 className="font-semibold text-earth-900 mb-1">Phone</h3>
                    <p className="text-earth-600 text-sm">+91 98765 43210</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-emerald-600 font-semibold">🌐</span>
                    </div>
                    <h3 className="font-semibold text-earth-900 mb-1">Website</h3>
                    <p className="text-earth-600 text-sm">www.herbtrace.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Note */}
        <section className="text-center">
          <p className="text-earth-600">
            Built with ❤️ for the SIH Hackathon 2025
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
