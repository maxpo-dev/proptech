import React, { useRef, useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

interface VideoComponentProps {
  src: string;
  className?: string;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Automatically play the video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={`relative bg-black rounded-lg shadow-lg overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onClick={handlePlayPause}
        autoPlay
        muted
        loop
        playsInline
        controls={isPlaying}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
          onClick={handlePlayPause}
        >
          <FaPlay className="text-white text-4xl" />
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
