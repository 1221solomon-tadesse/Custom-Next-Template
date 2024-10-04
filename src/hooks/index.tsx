'use client';
import { useState, useEffect } from 'react';

const ScrollToBottomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        window.innerHeight + window.scrollY <
        document.body.offsetHeight - 300
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex items-center justify-center">
      {isVisible && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-5 rounded-full bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-green-700"
          style={{ left: '50%', transform: 'translateX(-50%)' }} // Centering the button
        >
          Scroll
        </button>
      )}
    </div>
  );
};

export default ScrollToBottomButton;
