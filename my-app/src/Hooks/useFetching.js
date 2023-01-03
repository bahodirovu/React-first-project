import { useState } from "react";

export const useFetchin = (callback) => {
  const [isLoading, setIsLoadind] = useState(false);
  const [err, setErr] = useState("");

  const fetching = async (...args) => {
    try {
      setIsLoadind(true);
      await callback(...args);
    } catch (e) {
      setErr(e.message);
    } finally {
      setIsLoadind(false);
    }
  };

  return [fetching, isLoading, err];
};
