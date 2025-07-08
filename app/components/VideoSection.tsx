'use client'

interface VideoComponentProps {
  src: string
  poster?: string
  className?: string
}

export default function VideoComponent({ src, poster, className = '' }: VideoComponentProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}>
      <video
        src={src}
        poster={poster}
        className="h-auto w-full"
        playsInline
        loop
        autoPlay
        muted // Ensures autoplay works on most browsers
      />
    </div>
  )
}
