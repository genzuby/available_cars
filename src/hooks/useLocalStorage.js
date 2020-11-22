import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function useLocalStorage(key, initValue) {
  // const key = `AUTO1_MY_FAVORITE_CAR`;
  const carDetailInfo = useSelector(state => state.carDetailInfo);
  const [localValue, setLocalVaue] = useState(() => {
    if (!initValue) return;
    try {
      const localData = localStorage.getItem(key);
      return localData ? JSON.parse(localValue) : initValue;
    } catch (err) {
      return initValue;
    }
  });
  console.log(carDetailInfo);

  const addLocalStorage = () => {
    if (localValue) localStorage.setItem(key, JSON.stringify(localValue));
  };

  return { addLocalStorage };
}
