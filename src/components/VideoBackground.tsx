import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  enableControls?: boolean;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  posterSrc,
  className = '',
  enableControls = true
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [userPrefersReducedMotion, setUserPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUserPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setUserPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      if (!userPrefersReducedMotion) {
        video.play().catch(() => {
          setHasError(true);
        });
      }
    };

    const handleError = () => {
      setHasError(true);
      setIsLoaded(false);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [userPrefersReducedMotion]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {
        setHasError(true);
      });
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  if (hasError) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 ${className}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay={!userPrefersReducedMotion}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        poster={posterSrc}
        aria-label="Background video showing fiber optic technology"
        style={{
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        <source src={videoSrc.replace('.mp4', '.ogv')} type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      {/* Loading Overlay */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}

      {/* Accessibility Controls */}
      {enableControls && isLoaded && !hasError && (
        <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
          <button
            onClick={togglePlayPause}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-200 backdrop-blur-sm"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            title={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          
          <button
            onClick={toggleMute}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-200 backdrop-blur-sm"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
        </div>
      )}

      {/* Reduced Motion Message */}
      {userPrefersReducedMotion && (
        <div className="absolute top-4 left-4 z-20 bg-black/70 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
          Video paused due to motion preference
        </div>
      )}
    </div>
  );
};

export default VideoBackground;