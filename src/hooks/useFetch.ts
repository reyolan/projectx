import useToggle from "./useToggle";
import { useState, useEffect } from "react";

function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [error, setError] = useState<unknown>({});
  const [isLoading, invertIsLoading] = useToggle(true);

  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(url);
      console.log(response);
      try {
        const data = await response.json();
        setData(data);
      } catch (err: unknown) {
        setError(err);
      } finally {
        invertIsLoading();
      }
    };

    getRequest();
  }, []);

  return [data, error, isLoading] as const;
}

export default useFetch;
