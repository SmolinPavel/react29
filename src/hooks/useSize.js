import { useEffect, useState } from 'react';

// const { width, height } = useSize();

function useSize() {
  const [size, setSize] = useState({
    width: window.clientWidth,
    height: window.clientHeight,
  });

  useEffect(() => {
    const handleResize = (e) => {
      // debounce, throttle
      setSize({
        width: window.clientWidth,
        height: window.clientHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...size };
}
