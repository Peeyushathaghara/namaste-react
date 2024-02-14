import { EACH_RESTRO_URL } from "./constants";
import { useEffect, useState } from "react";

const useZomatoRestro = (url) => {
  // console.log('url :', url)
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(EACH_RESTRO_URL + url);

    const json = await data.json();
    // console.log(json);
    setResDetails(json);
  };

  return resDetails;
};

export default useZomatoRestro;
