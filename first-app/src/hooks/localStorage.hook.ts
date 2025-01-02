import { useEffect, useState } from "react";

const useLocalStorage = <T>(storageKey: string, initialValue: T) => {
  const [storedData, setStoredData] = useState<T>(() => {
    try {
      const strData = localStorage.getItem(storageKey);
      return strData ? JSON.parse(strData) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(storedData));
    } catch (error) {
      console.error("Failed to save to localStorage", error);
    }
  }, [storedData, storageKey]);

  return [storedData, setStoredData] as const;
};

export default useLocalStorage;
