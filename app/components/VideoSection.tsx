"use client";

interface VideoComponentProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoComponent({
  src,
  poster,
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
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        <source src={src.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
