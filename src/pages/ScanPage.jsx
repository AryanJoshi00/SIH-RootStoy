import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, ArrowLeft, Camera, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import QRScanner from '../components/QRScanner';
import toast from 'react-hot-toast';

const ScanPage = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [hasCamera, setHasCamera] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if camera is available
    const checkCamera = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        setHasCamera(videoDevices.length > 0);
      } catch (error) {
        console.error('Error checking camera:', error);
        setHasCamera(false);
      }
    };

    checkCamera();
  }, []);

  const handleScan = (code) => {
    setIsScannerOpen(false);
    toast.success('QR Code scanned successfully!');
    navigate(`/product/${code}`);
  };

  const handleScanError = () => {
    toast.error('Failed to scan QR code. Please try again.');
  };

  const instructions = [
    {
      step: 1,
      title: 'Position the QR Code',
      description: 'Hold your device steady and position the QR code within the scanning frame.'
    },
    {
      step: 2,
      title: 'Wait for Detection',
      description: 'The scanner will automatically detect and read the QR code.'
    },
    {
      step: 3,
      title: 'View Product Details',
      description: 'You\'ll be redirected to see the complete product journey and certifications.'
    }
  ];

  return (
    <div className="min-h-screen bg-earth-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
          
          <h1 className="text-2xl font-display font-bold text-earth-900">
            Scan QR Code
          </h1>
          
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Scanner Section */}
          <div className="space-y-6">
            <Card>
              <CardContent>
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <QrCode className="h-10 w-10 text-emerald-600" />
                  </div>
                  
                  <h2 className="text-xl font-semibold text-earth-900 mb-4">
                    Ready to Scan
                  </h2>
                  
                  <p className="text-earth-600 mb-6">
                    Scan the QR code on your Ayurvedic herb packaging to view 
                    its complete journey and verification details.
                  </p>

                  {hasCamera === false ? (
                    <div className="text-center py-8">
                      <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-earth-900 mb-2">
                        Camera Not Available
                      </h3>
                      <p className="text-earth-600 mb-6">
                        Your device doesn't have a camera or camera access is blocked. 
                        You can still use sample product codes to explore the platform.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => navigate('/')}
                      >
                        Go to Home
                      </Button>
                    </div>
                  ) : (
                    <Button
                      size="lg"
                      onClick={() => setIsScannerOpen(true)}
                      className="flex items-center space-x-2 mx-auto"
                    >
                      <Camera className="h-5 w-5" />
                      <span>Start Scanning</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Sample Codes */}
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-earth-900 mb-4">
                  Try Sample Codes
                </h3>
                <p className="text-earth-600 mb-4">
                  Don't have a QR code? Try these sample product codes:
                </p>
                
                <div className="space-y-3">
                  {[
                    { code: 'A123XY', name: 'Ashwagandha', status: 'Certified' },
                    { code: 'B456YZ', name: 'Turmeric', status: 'Certified' },
                    { code: 'C789AB', name: 'Brahmi', status: 'Pending' }
                  ].map((product) => (
                    <div
                      key={product.code}
                      className="flex items-center justify-between p-3 bg-earth-50 rounded-lg hover:bg-earth-100 transition-colors cursor-pointer"
                      onClick={() => navigate(`/product/${product.code}`)}
                    >
                      <div>
                        <div className="font-medium text-earth-900">{product.name}</div>
                        <div className="text-sm text-earth-600">Code: {product.code}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          product.status === 'Certified' 
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {product.status}
                        </span>
                        <QrCode className="h-4 w-4 text-earth-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions Section */}
          <div className="space-y-6">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-earth-900 mb-6">
                  How to Scan
                </h3>
                
                <div className="space-y-6">
                  {instructions.map((instruction) => (
                    <div key={instruction.step} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {instruction.step}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-earth-900 mb-1">
                          {instruction.title}
                        </h4>
                        <p className="text-earth-600 text-sm">
                          {instruction.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold text-earth-900 mb-4">
                  Scanning Tips
                </h3>
                
                <ul className="space-y-2 text-sm text-earth-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Ensure good lighting for better scanning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Hold your device steady and at a comfortable distance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Make sure the QR code is not damaged or dirty</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 mt-1">•</span>
                    <span>Allow camera permissions when prompted</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* QR Scanner Modal */}
      <QRScanner
        isOpen={isScannerOpen}
        onScan={handleScan}
        onClose={() => setIsScannerOpen(false)}
      />
    </div>
  );
};

export default ScanPage;
