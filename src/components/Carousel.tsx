import {useRef, useState, useEffect, type ReactNode} from 'react';
import clsx from 'clsx';

// Horizontal card carousel with scroll-snap and previous/next buttons, like product-page card rows.
export default function Carousel({
  children,
  className,
  dots = false,
  count = 0,
}: {
  children: ReactNode;
  className?: string;
  dots?: boolean;
  count?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + 20;
      setIndex(Math.round(el.scrollLeft / step));
    };
    el.addEventListener('scroll', onScroll, {passive: true});
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const go = (dir: number) => {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    el.scrollBy({left: dir * (first.offsetWidth + 20), behavior: 'smooth'});
  };
  const goTo = (i: number) => {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    el.scrollTo({left: i * (first.offsetWidth + 20), behavior: 'smooth'});
  };

  return (
    <div className={clsx('carousel', className)}>
      <div className="carousel__track" ref={ref}>
        {children}
      </div>
      <div className="carousel__controls">
        {dots && count > 1 && (
          <div className="carousel__dots">
            {Array.from({length: count}).map((_, i) => (
              <button key={i} type="button" aria-label={`Go to slide ${i + 1}`} className={i === index ? 'on' : undefined} onClick={() => goTo(i)} />
            ))}
          </div>
        )}
        <div className="carousel__arrows">
          <button type="button" aria-label="Previous" onClick={() => go(-1)}>‹</button>
          <button type="button" aria-label="Next" onClick={() => go(1)}>›</button>
        </div>
      </div>
    </div>
  );
}
