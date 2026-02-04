// src/components/Rotator.jsx
import { useState, useEffect } from 'react';

export default function Rotator({ items, delay = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % items.length);
    }, delay);
    return () => clearInterval(id);
  }, [items, delay]);

  return (
    <div className="text-center py-8 italic text-gray-600">
      {items[index]}
    </div>
  );
}
