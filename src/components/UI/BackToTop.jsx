import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkIfAtBottom = () => {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', checkIfAtBottom);
    return () => window.removeEventListener('scroll', checkIfAtBottom);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isAtBottom && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg border border-white/10 transition-all duration-300 hover:scale-110"
          aria-label="Kembali ke atas"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default BackToTop;