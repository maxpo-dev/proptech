"use client";

interface VideoComponentProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoComponent({
  src,
  className = "",
}: VideoComponentProps) {
  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <video
        className="size-full object-cover"
        playsInline
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
