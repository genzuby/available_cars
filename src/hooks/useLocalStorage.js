import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initValue) {
  const [localValue, setLocalVaue] = useState(() => {
    if (!initValue) return;
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localValue));
  }, [key, localValue]);

  return [localValue, setLocalVaue];
}
