
import { useState, useEffect } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const ProfileImage = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      try {
        // Load the original image
        const response = await fetch('/lovable-uploads/39392098-79e3-46de-85e6-8179931e4ee8.png');
        const blob = await response.blob();
        const image = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(image);
        const processedUrl = URL.createObjectURL(processedBlob);
        
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Error processing image:', error);
        // Fallback to original image if processing fails
        setProcessedImageUrl('/lovable-uploads/39392098-79e3-46de-85e6-8179931e4ee8.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-neon-blue via-neon-green to-neon-magenta p-1 animate-glow">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
            {isProcessing ? (
              <div className="text-6xl animate-pulse">⚡</div>
            ) : processedImageUrl ? (
              <img 
                src={processedImageUrl} 
                alt="Phani Krishna" 
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="text-6xl animate-float">⚡</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
