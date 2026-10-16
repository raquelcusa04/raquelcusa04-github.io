import { px } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ImageSequencePlayer({ frames, initialDelay = 1050, fps = 29 }) 
{
const [currentIndex, setCurrentIndex] = useState(0);
const [isStarted, setIsStarted] = useState(false);


const frameInterval = 1000 / fps;

  useEffect(() => {
    if (!frames || frames.length === 0) return;
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [frames]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    if (!isStarted || !frames || frames.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 >= frames.length) {
          clearInterval(interval); 
            return prev;
            }
            return prev + 1;
        });
        }, frameInterval);

        return () => clearInterval(interval);
    }, [isStarted, frames, frameInterval]);

    if (!frames || frames.length === 0) return null;

    return (
        <div className="sequence-player-container" >
        <img
            src={frames[currentIndex]}
            alt={`Frame ${currentIndex + 3}`}
            className="sequence-frame-img" width={383}
        />
        </div>
    );
}