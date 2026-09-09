"use client";

import { PointerEvent, useRef } from "react";

type CarouselImage = {
  src: string;
  alt: string;
  label?: string;
};

type ProductCarouselProps = {
  images: CarouselImage[];
  title: string;
};

export default function ProductCarousel({ images, title }: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft, moved: false };
    track.setPointerCapture(event.pointerId);
    track.classList.add("is-dragging");
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const distance = event.clientX - drag.current.startX;
    if (Math.abs(distance) > 4) drag.current.moved = true;
    track.scrollLeft = drag.current.startScroll - distance;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current.active = false;
    track.classList.remove("is-dragging");
    if (track.hasPointerCapture(event.pointerId)) track.releasePointerCapture(event.pointerId);
  };

  const nudge = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <div className="product-carousel" aria-label={`${title} product photos`}>
      <div className="carousel-tools">
        <span>Drag or swipe to explore</span>
        <div className="carousel-buttons" aria-label="Carousel controls">
          <button type="button" onClick={() => nudge(-1)} aria-label="Previous product image">←</button>
          <button type="button" onClick={() => nudge(1)} aria-label="Next product image">→</button>
        </div>
      </div>
      <div
        className="carousel-track"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={(event) => drag.current.active && stopDragging(event)}
      >
        {images.map((image, index) => (
          <figure className="carousel-slide" key={`${image.src}-${index}`}>
            <img src={image.src} alt={image.alt} draggable={false} loading={index < 2 ? "eager" : "lazy"} />
            {(image.label || index === 0) && <figcaption className="band-caption">{image.label || title}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
}
