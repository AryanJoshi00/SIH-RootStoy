import { useState, useRef, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { Camera, X, AlertCircle } from 'lucide-react';
import Button from './ui/Button';
import Toast from './ui/Toast';

const QRScanner = ({ onScan, onClose, isOpen = false }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const videoRef = useRef(null);
  const readerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      initializeScanner();
    } else {
      stopScanning();
    }

    return () => {
      stopScanning();
    };
  }, [isOpen]);

  const initializeScanner = async () => {
    try {
      readerRef.current = new BrowserMultiFormatReader();
      setError(null);
      setHasPermission(null);
      
      // Check for camera permission
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } // Use back camera on mobile
      });
      
      setHasPermission(true);
      stream.getTracks().forEach(track => track.stop()); // Stop the test stream
      
      startScanning();
    } catch (err) {
      console.error('Scanner initialization error:', err);
      setError('Camera access denied or not available');
      setHasPermission(false);
    }
  };

  const startScanning = async () => {
    if (!readerRef.current) return;

    try {
      setIsScanning(true);
      setError(null);

      const result = await readerRef.current.decodeFromVideoDevice(
        undefined, // Use default camera
        videoRef.current,
        (result, error) => {
          if (result) {
            const code = result.getText();
            console.log('QR Code detected:', code);
            onScan(code);
            stopScanning();
          }
          if (error && error.name !== 'NotFoundException') {
            console.error('Scan error:', error);
          }
        }
      );
    } catch (err) {
      console.error('Scanning error:', err);
      setError('Failed to start camera scanning');
      setIsScanning(false);
    }
  };

  const stopScanning = () => {
    if (readerRef.current) {
      readerRef.current.reset();
    }
    setIsScanning(false);
  };

  const handleRetry = () => {
    setError(null);
    initializeScanner();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-earth-200">
          <h2 className="text-lg font-semibold text-earth-900">Scan QR Code</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-earth-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scanner Content */}
        <div className="p-4">
          {hasPermission === false ? (
            <div className="text-center py-8">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-earth-900 mb-2">
                Camera Access Required
              </h3>
              <p className="text-earth-600 mb-6">
                Please allow camera access to scan QR codes. You can enable it in your browser settings.
              </p>
              <Button onClick={handleRetry} variant="primary">
                Try Again
              </Button>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-earth-900 mb-2">
                Scanning Error
              </h3>
              <p className="text-earth-600 mb-6">{error}</p>
              <Button onClick={handleRetry} variant="primary">
                Retry
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Camera Preview */}
              <div className="relative bg-earth-100 rounded-lg overflow-hidden aspect-square">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                />
                {isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 border-2 border-emerald-500 rounded-lg animate-pulse">
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-emerald-500 rounded-tl-lg"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-emerald-500 rounded-tr-lg"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-emerald-500 rounded-bl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-emerald-500 rounded-br-lg"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="text-center">
                <Camera className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-earth-600">
                  Position the QR code within the frame to scan
                </p>
              </div>

              {/* Controls */}
              <div className="flex gap-3">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
                {!isScanning && (
                  <Button
                    onClick={startScanning}
                    variant="primary"
                    className="flex-1"
                  >
                    Start Scanning
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
