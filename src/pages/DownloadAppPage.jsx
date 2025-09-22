import { useEffect } from "react";
import { Download, Smartphone } from "lucide-react";
import RSDashboard from "../assets/AppDashboard.jpg";

const DownloadAppPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadClick = () => {
    try {
      // Open Google Drive download link in new tab
      const newWindow = window.open('https://drive.google.com/file/d/17uyZ5FutcsoGDzjDnQf9rsTOLtHPaD33/view?usp=sharing', '_blank');
      
      // Check if popup was blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        // Fallback: redirect in same tab
        window.location.href = 'https://drive.google.com/file/d/17uyZ5FutcsoGDzjDnQf9rsTOLtHPaD33/view?usp=sharing';
      }
    } catch (error) {
      console.error("Error opening download link:", error);
      // Fallback: redirect in same tab
      window.location.href = 'https://drive.google.com/file/d/17uyZ5FutcsoGDzjDnQf9rsTOLtHPaD33/view?usp=sharing';
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fdfb] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-herb-800 mb-4">
            Download RootStory App
          </h1>
          <p className="text-xl text-herb-700 max-w-2xl mx-auto">
            Experience the full power of blockchain-verified herb traceability on your mobile device
          </p>
        </div>

        {/* App Screenshot Card */}
        <div className="mb-8">
          <div className="max-w-sm mx-auto w-[90%] md:w-auto">
            {/* iPhone Frame */}
            <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
              {/* Screen */}
              <div className="bg-black rounded-[2.5rem] p-1">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                {/* Screen Content */}
                <div className="bg-white rounded-[2.25rem] overflow-hidden">
                  <img 
                    src={RSDashboard} 
                    alt="RSDashboard" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <button
            onClick={handleDownloadClick}
            className="bg-[#3E8E63] hover:bg-[#2d6b4a] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3 mx-auto"
          >
            <Download className="h-5 w-5" />
            <span>Download App now</span>
            <Smartphone className="h-5 w-5" />
          </button>
        </div>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-herb-200/30">
            <div className="w-12 h-12 bg-herb-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-herb-600" />
            </div>
            <h3 className="text-lg font-semibold text-herb-800 mb-2">Easy Download</h3>
            <p className="text-herb-600 text-sm">Available on iOS and Android app stores</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-herb-200/30">
            <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-6 w-6 text-mint-600" />
            </div>
            <h3 className="text-lg font-semibold text-herb-800 mb-2">Mobile Optimized</h3>
            <p className="text-herb-600 text-sm">Designed for seamless mobile experience</p>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-herb-200/30">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-herb-800 mb-2">Offline Access</h3>
            <p className="text-herb-600 text-sm">Scan and verify even without internet</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-herb-600 mb-4">
            Join thousands of users who trust RootStory for authentic herb verification
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppPage;
