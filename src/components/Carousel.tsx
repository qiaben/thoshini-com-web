import {useRef, useState, useEffect, type ReactNode} from 'react';
import clsx from 'clsx';

// Horizontal card carousel with scroll-snap and previous/next buttons, like product-page card rows.
// With `autoplay` (milliseconds), it moves to the next slide on its own, loops back to the first,
// pauses while the pointer is over it, and shows a pause/play button.
export default function Carousel({
  children,
  className,
  dots = false,
  count = 0,
  autoplay = 0,
}: {
  children: ReactNode;
  className?: string;
  dots?: boolean;
  count?: number;
  autoplay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const [playing, setPlaying] = useState(autoplay > 0);
  const [hover, setHover] = useState(false);

  const step = () => {
    const first = ref.current?.firstElementChild as HTMLElement | null;
    return first ? first.offsetWidth + 20 : 0;
  };
  const total = () => count || ref.current?.children.length || 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const s = step();
      if (!s) return;
      const i = Math.round(el.scrollLeft / s);
      indexRef.current = i;
      setIndex(i);
    };
    el.addEventListener('scroll', onScroll, {passive: true});
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Respect visitors who ask their device for reduced motion.
  useEffect(() => {
    if (autoplay > 0 && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, [autoplay]);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const n = total();
    const target = n ? ((i % n) + n) % n : i;
    el.scrollTo({left: target * step(), behavior: 'smooth'});
  };

  useEffect(() => {
    if (!autoplay || !playing || hover) return;
    const id = window.setInterval(() => goTo(indexRef.current + 1), autoplay);
    return () => window.clearInterval(id);
  }, [autoplay, playing, hover]);

  const userGo = (i: number) => {
    goTo(i);
  };

  return (
    <div
      className={clsx('carousel', className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}>
      <div className="carousel__track" ref={ref}>
        {children}
      </div>
      <div className="carousel__controls">
        {dots && count > 1 && (
          <div className="carousel__dots-row">
            <div className="carousel__dots">
              {Array.from({length: count}).map((_, i) => (
                <button key={i} type="button" aria-label={`Go to slide ${i + 1}`} className={i === index ? 'on' : undefined} onClick={() => userGo(i)}>
                  {i === index && autoplay > 0 && (
                    <span className={clsx('fill', playing && !hover && 'run')} style={{animationDuration: `${autoplay}ms`}} key={`${index}-${playing}-${hover}`} />
                  )}
                </button>
              ))}
            </div>
            {autoplay > 0 && (
              <button type="button" className="carousel__play" aria-label={playing ? 'Pause' : 'Play'} onClick={() => setPlaying((p) => !p)}>
                {playing ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><rect x="2" y="1" width="3" height="10" rx="1" /><rect x="7" y="1" width="3" height="10" rx="1" /></svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden><path d="M3 1.5v9l7.5-4.5z" /></svg>
                )}
              </button>
            )}
          </div>
        )}
        <div className="carousel__arrows">
          <button type="button" aria-label="Previous" onClick={() => userGo(index - 1)}>‹</button>
          <button type="button" aria-label="Next" onClick={() => userGo(index + 1)}>›</button>
        </div>
      </div>
    </div>
  );
}
