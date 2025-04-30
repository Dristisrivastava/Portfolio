import { useEffect, useState } from 'react';

const useScrollAnimation = (elementId) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const top = element.getBoundingClientRect().top;
        const height = window.innerHeight;
        if (top < height - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // trigger check on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, [elementId]);

  return isVisible;
};

export default useScrollAnimation;
