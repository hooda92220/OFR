import React, { useEffect, useRef, useState } from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
  className?: string;
}

const YouTubeBackground: React.FC<YouTubeBackgroundProps> = ({ 
  videoId, 
  className = '' 
}) => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    const loadYouTubeAPI = () => {
      if (window.YT && window.YT.Player) {
        initializePlayer();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.body.appendChild(script);

      window.onYouTubeIframeAPIReady = initializePlayer;
    };

    const initializePlayer = () => {
      if (!containerRef.current) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId, // Required for looping
          controls: 0,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          disablekb: 1,
          fs: 0,
          cc_load_policy: 0,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            event.target.mute();
            setIsReady(true);
            
            // Set quality to highest available
            const availableQualities = event.target.getAvailableQualityLevels();
            if (availableQualities.length > 0) {
              event.target.setPlaybackQuality(availableQualities[0]);
            }
          },
          onStateChange: (event: any) => {
            // Ensure continuous looping
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
    };

    loadYouTubeAPI();

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* YouTube Player Container */}
      <div className="absolute inset-0 w-full h-full">
        <div
          ref={containerRef}
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            minWidth: '100vw',
            minHeight: '100vh',
            width: '177.77vh', // 16:9 aspect ratio
            height: '56.25vw',
          }}
        />
      </div>
      
      {/* Loading overlay */}
      {!isReady && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default YouTubeBackground;